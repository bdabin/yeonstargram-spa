<template>
  <Box class="tab-bar" wrap vertical="center" horizontal="center" padding="0 24px">
    <Box v-for="(menu, index) in menuItems" :key="index" @click.native="menu.action">
      <Icon :name="menu.icon" width="24px" />
    </Box>
    <input type="file" name="url" ref="uploader" class="inputfile" id="file" @change="fileUpload" />
  </Box>
</template>

<script>
import Icon from '@/components/common/Icon'
import Box from '@/components/presentational/molecules/Box'

export default {
  components: {
    Icon,
    Box
  },
  props: {
    menuItems: {
      type: Array,
      default() {
        return [
          {
            icon: this.$route.path === '/board' ? 'home2' : 'home',
            action: () => {
              if (this.$store.state.upload.image) {
                this.$store.dispatch('imageReset')
              }
              if (this.$route.path !== '/board') this.$router.push('/board')
            }
          },
          {
            icon: this.$route.path === '/explore' ? 'search2' : 'search',
            action: () => {
              if (this.$store.state.upload.image) {
                this.$store.dispatch('imageReset')
              }
              if (this.$route.path !== '/explore') this.$router.push('/explore')
            }
          },
          {
            icon: this.$route.path === '/board/write' ? 'plus2' : 'plus',
            action: () => {
              this.$refs.uploader.click()
              if (this.$route.path !== '/board/write') this.$router.push('/board/write')
            }
          },
          {
            icon: this.$route.path === `/mypage/${this.$store.state.user.id}` ? 'user2' : 'user',
            activeIcon: 'user2',
            action: () => {
              if (this.$store.state.upload.image) {
                this.$store.dispatch('imageReset')
              }
              if (this.$route.path !== `/mypage/${this.$store.state.user.id}`)
                this.$router.push(`/mypage/${this.$store.state.user.id}`)
            }
          }
        ]
      }
    }
  },
  methods: {
    fileUpload(e) {
      this.$store.dispatch('imageUpload', e.target)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #eee;
  z-index: 2;
  background-color: #fff;
  justify-content: space-between !important;
}
input[type='file'] {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
