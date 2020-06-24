<template>
  <div>
    <NavigationBar @rightBtn="nextStep" @leftBtn="backSequence">
      <template #leftBtn>
        <Span v-if="step === 1" type="title1">취소</Span>
        <Icon v-else name="back" width="20px" />
      </template>
      <template #centerTitle>
        <Icon name="logo" />
      </template>
      <template #rightBtn>
        <Span v-if="step < 3" type="title1" color="rgb(32, 59, 134)">다음</Span>
        <Span v-else type="title1" color="rgb(32, 59, 134)">등록</Span>
      </template>
    </NavigationBar>
    <div class="wrap">
      <PhotoBox
        v-if="step === 1 && image"
        :image="image"
        :filters="filters"
        :selectedFilter.sync="board.filter"
        @select="selectFilter"
      />
      <WriteBox v-if="step === 2" :board="board" />
    </div>
    <TabBar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import WriteBox from '@/components/presentational/organisms/board/WriteBox/index.vue'
import PhotoBox from '@/components/presentational/organisms/board/PhotoBox/index.vue'
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'
import TabBar from '@/components/presentational/organisms/TabBar/index.vue'
import Icon from '@/components/common/Icon'
import Span from '@/components/presentational/atoms/Span'

export default {
  name: 'WriteContainer',
  components: {
    WriteBox,
    PhotoBox,
    NavigationBar,
    TabBar,
    Icon,
    Span
  },
  data() {
    return {
      step: 1,
      board: {
        description: '',
        tag: '',
        filter: 'normal'
      },
      id: this.$route.params.id || null,
      originTag: [],
      filters: [
        'normal',
        'clarendon',
        'gingham',
        'moon',
        'lark',
        'reyes',
        'juno',
        'slumber',
        'aden',
        'perpetua',
        'mayfair',
        'rise',
        'hudson',
        'valencia',
        'xpro2',
        'willow',
        'lofi',
        'inkwell',
        'nashville'
      ]
    }
  },
  created() {
    this.routeIdCheck()
  },
  computed: {
    ...mapState({
      image: state => state.upload.image
    })
  },
  methods: {
    backSequence() {
      if (this.step === 1) {
        this.$store.dispatch('imageReset')
        this.$router.go(-1)
      } else {
        this.step -= 1
      }
    },
    nextStep() {
      if (this.step === 2) {
        this.checkUpdateMode()
      } else {
        this.step += 1
      }
    },
    selectFilter(filter) {
      this.board.filter = filter
    },
    async routeIdCheck() {
      if (this.id) {
        await axios.get(`/api/board/write/${this.id}`).then(res => {
          this.board.description = res.data.description
          this.originTag = res.data.hashtag.map(tag => tag.name)
          this.board.tag = this.originTag.join(' ')
        })
      }
    },
    checkUpdateMode() {
      // 수정모드인지 확인
      if (this.id) {
        this.boardUpdate()
      } else {
        this.boardWrite()
      }
    },
    async boardWrite() {
      try {
        // 사진 업로드
        const img = this.$store.state.upload.data
        const formData = new FormData()
        await formData.append('url', img, img.name)
        await formData.append('filter', this.board.filter)

        const { data } = await axios.post('/api/photo/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        // 글쓰기
        const { description, tag } = this.board
        const response = await axios.post('/api/board/write', {
          description,
          tag,
          writer: this.$store.state.user.id,
          photo: data.id
        })

        if (response.status === 200) {
          alert('작성이 완료됐습니다 !')
          this.$router.push('/board')
        } else {
          alert('작성할 수 없는 내용입니다.')
        }
      } catch (e) {
        console.error(e)
      }
    },
    async boardUpdate() {
      // 글 수정
      let addTags = []
      let removeTags = []
      if (this.board.tag !== '') {
        const changedTags = this.board.tag.split(' ')
        addTags = changedTags.filter(tag => !this.originTag.includes(tag))
        removeTags = this.originTag.filter(tag => !changedTags.includes(tag))
      }

      const response = await axios.put(`/api/board/write/${this.id}`, {
        ...this.board,
        writer: this.$store.state.user.id,
        addTags,
        removeTags
      })

      if (response.status === 200) {
        this.$router.push('/board')
      } else {
        alert('수정할 수 없습니다.')
      }
    }
  }
}
</script>

<style>
</style>