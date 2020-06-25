<template>
  <Box padding="16px" direction="column">
    <Box class="photo-img-box">
      <Box :class="selectedFilter" :style="`background-image:url(${image})`" padding="0 0 100%"></Box>
    </Box>
    <Box class="photo-filter-box">
      <List direction="row">
        <ListCell v-for="(filter, index) in filters" :key="index">
          <Button @click="$emit('select', filter)">
            <Span type="title1" align="center">{{ filter }}</Span>
            <Box :class="filter" :style="`background-image:url(${image})`"></Box>
          </Button>
        </ListCell>
      </List>
    </Box>
  </Box>
</template>

<script>
import Span from '@/components/presentational/atoms/Span'
import Button from '@/components/presentational/atoms/Button'
import Box from '@/components/presentational/molecules/Box'
import List from '@/components/presentational/molecules/List'
import ListCell from '@/components/presentational/molecules/ListCell'
export default {
  components: {
    Span,
    Box,
    Button,
    List,
    ListCell
  },
  props: {
    image: {
      type: String,
      default: ''
    },
    filters: {
      type: Array,
      default() {
        return []
      }
    },
    selectedFilter: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-img-box {
  width: 100%;
  .box {
    box-sizing: border-box;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  img {
    width: 100%;
  }
}
.photo-filter-box {
  width: 100%;
  overflow: hidden;
  .box {
    width: 100px;
    height: 100px;
    color: white;
    background-size: cover;
    background-position: center;
  }
}
</style>
