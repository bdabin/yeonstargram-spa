<template>
  <Box class="board-list-cell" direction="column" padding="0 0 16px">
    <Box class="board-list-header" vertical="center" padding="0 16px">
      <Button type="title1" @click="$emit('mypage',post.User.id)">{{ username }}</Button>
      <Button @click="$emit('more', post.id)">
        <Icon name="more" />
      </Button>
    </Box>
    <Box
      class="board-list-img"
      vertical="center"
      horizontal="center"
      :class="filter"
      :style="`background-image:url(${img})`"
      padding="0 0 100%"
    ></Box>

    <Box class="board-list-option" padding="0px 16px" vertical="center">
      <Button @click="$emit('like',post)">
        <Icon :name="post.likeIt ? 'heart2' : 'heart'" />
      </Button>
      <Button @click="$emit('comment', post.id)">
        <Icon name="comment" />
      </Button>
    </Box>

    <Box class="board-list-desc" padding="12px 16px">
      <Span>
        <b>{{ username }}</b>
        {{ post.description }}
        <template v-if="post.hashtag">
          <a v-for="(tag, index) in post.hashtag" href :key="index">{{tag.name}}</a>
        </template>
      </Span>
    </Box>
  </Box>
</template>

<script>
import Icon from '@/components/common/Icon'
import Span from '@/components/presentational/atoms/Span'
import Button from '@/components/presentational/atoms/Button'
import Box from '@/components/presentational/molecules/Box'

export default {
  components: {
    Button,
    Span,
    Icon,
    Box
  },
  props: ['post', 'loading'],
  computed: {
    filter() {
      if (this.loading) {
        return ''
      }
      return this.post.Photo ? this.post.Photo.filter : ''
    },
    img() {
      if (this.loading) {
        return ''
      }

      return this.post.image ? this.post.image : ''
    },
    username() {
      if (this.loading) {
        return ''
      }

      return this.post.User ? this.post.User.username : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.board-list-cell {
  width: 100%;
  .box {
    width: 100%;
  }
  .board-list-header {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 50px;
    justify-content: space-between;
    button {
      img {
        width: 20px;
      }
    }
  }

  .board-list-img {
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  .board-list-option {
    height: 40px;
    button {
      margin-right: 10px;
      img {
        width: 24px;
      }
    }
  }

  .board-list-desc {
    span {
      a {
        color: rgb(32, 59, 134);
        margin-right: 5px;
      }
    }
  }
}
</style>

