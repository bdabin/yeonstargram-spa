<template>
  <div>
    <NavigationBar @rightBtn="profileUpdate">
      <template #centerTitle>
        <Icon name="logo" />
      </template>
      <template #rightBtn>
        <Span type="title1" color="rgb(32, 59, 134)">등록</Span>
      </template>
    </NavigationBar>
    <Profile v-model="profile.intro" :image="profile.image" @changeImage="changeImage" />
    <TabBar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import NavigationBar from '@/components/presentational/organisms/NavigationBar/index.vue'
import Profile from '@/components/presentational/organisms/mypage/Profile'
import TabBar from '@/components/presentational/organisms/TabBar/index.vue'

import Icon from '@/components/common/Icon'
import Span from '@/components/presentational/atoms/Span'
export default {
  components: {
    NavigationBar,
    TabBar,
    Icon,
    Profile,
    Span
  },
  data() {
    return {
      // intro: '',
      profile: {
        intro: '',
        image: ''
      }
    }
  },
  created() {
    this.loadData()
  },
  computed: {
    ...mapState({
      image: state => state.upload.image
    })
  },
  methods: {
    async loadData() {
      const response = await axios.get(`/api/account/mypage/${this.$store.state.user.id}`)
      this.profile.intro = response.data.intro
      const url = response.data.Profile.url.split('/')
      this.profile.image = `/api/image/${url[url.length - 1]}`
    },
    async profileUpdate() {
      try {
        const img = this.$store.state.upload.data
        const formData = new FormData()
        await formData.append('url', img, img.name)
        const { data } = await axios.post('/api/photo/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        const response = await axios.put(`/api/account/mypage`, {
          userId: this.$store.state.user.id,
          intro: this.intro,
          photo: data.id
        })

        if (response.status === 200) {
          alert('프로필 수정이 완료됐습니다 !')
          this.$router.push(`/mypage/${this.$store.state.user.id}`)
        }
      } catch (e) {
        console.log(e)
      }
    },
    changeImage(image) {
      const files = image.files
      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = e => {
        this.profile.image = e.target.result
      }
    }
  }
}
</script>

<style>
</style>