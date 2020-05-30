<template>
  <Box class="board-list-cell" direction="column" padding="0 0 16px">
    <Box class="board-list-header" vertical="center" padding="0 16px">
      <Span type="title1">{{ post.writer }}</Span>
      <Button @click="$emit('more', post.id)">
        <Icon name="more" />
      </Button>
    </Box>

    <Box class="board-list-title" vertical="center" horizontal="center">
      <Span>{{ post.title }}</Span>
    </Box>

    <Box class="board-list-option" padding="0px 16px" vertical="center">
      <Button @click="$emit('like',post.id)">
        <Icon name="heart" />
      </Button>
      <Button @click="$emit('comment', post.id)">
        <Icon name="comment" />
      </Button>
    </Box>

    <Box class="board-list-desc" padding="12px 16px">
      <Span>
        <b>{{ post.writer }}</b>
        {{ post.description }}
      </Span>
    </Box>
    <Button @click="$emit('edit',post.id)">수정</Button>
    <Button @click="$emit('deleteExecution',post.id)">삭제</Button>
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
  props: {
    post: {
      type: Object,
      default() {
        return {}
      }
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

  .board-list-title {
    height: 100px;
    background-color: #020202;
    span {
      color: #fff;
      font-weight: bold;
      font-size: 20px;
    }
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
  }
}
</style>

