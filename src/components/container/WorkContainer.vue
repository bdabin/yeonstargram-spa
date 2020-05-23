<template>
  <div>
    <TodoTitle v-model="title" @setTodo="setTodo" />
    <TodoList :todoList="todoList" @delete="onDelete" @update="modeUpdate" @save="onSave" />
  </div>
</template>

<script>
import TodoTitle from '@/components/presentational/organisms/work/TodoTitle'
import TodoList from '@/components/presentational/organisms/work/TodoList'

export default {
  name: 'WorkContainer',
  data() {
    return {
      id: 0,
      title: '',
      todoList: []
    }
  },
  components: {
    TodoTitle,
    TodoList
  },
  mounted() {
    this.loadData()
  },
  methods: {
    setTodo() {
      if (this.title === '') {
        alert('제목을 입력해주세요')
        return
      }
      localStorage.setItem(this.id, this.title)
      this.id += 1
      this.title = ''
      this.loadData()
    },
    loadData() {
      const items = Object.keys(localStorage)
      const newItems = items.filter(item => item !== 'loglevel:webpack-dev-server')
      this.todoList = newItems
        .map(id => {
          return {
            id,
            title: localStorage.getItem(id),
            toggle: false
          }
        })
        .sort((a, b) => {
          if (parseInt(a.id) > parseInt(b.id)) {
            return -1
          } else if (parseInt(a.id) < parseInt(b.id)) {
            return 1
          } else {
            return 0
          }
        })
      if (this.todoList.length > 0) {
        this.id = parseInt(this.todoList[0].id) + 1
      }
    },
    onDelete(id) {
      confirm('정말 삭제하시겠습니까?') ? this.removeItem(id) : null
    },
    removeItem(id) {
      localStorage.removeItem(id)
      this.loadData()
    },
    modeUpdate(id) {
      this.todoList.map(todo => {
        if (todo.id === id) {
          todo.toggle = true
        }
      })
    },
    onSave(title, id) {
      localStorage.setItem(id, title)
      this.loadData()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
