<template>
  <div class="pane-list">
    <el-row>
      <TodoPane v-for="topic in topicList"
                v-bind:key="topic.id"
                v-bind:title="topic.title">
      </TodoPane>
    </el-row>
  </div>
</template>

<script>
import TodoPane from '@/components/TodoPane'

export default {
  name: 'todoList',
  components: { TodoPane },
  data () {
    return {
      topicList: [
        {
          'id': 'IH',
          'title': '重要-紧急'
        },
        {
          'id': 'INH',
          'title': '重要-不紧急'
        },
        {
          'id': 'NIH',
          'title': '不重要-紧急'
        },
        {
          'id': 'NINH',
          'title': '不重要-不紧急'
        }
      ]
    }
  }
}
</script>

<style scoped>
.pane-list {
  width: 100%;
  height: 100%;
}
</style>
