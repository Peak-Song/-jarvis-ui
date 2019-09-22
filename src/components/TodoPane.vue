<template>
  <div>
    <!--    -->
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
    <el-container>
      <el-header>
        {{ title }}
      </el-header>
      <el-main>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
        >
          <el-table-column
            type="selection"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            lable="姓名"
            >
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'TodoPane',
  props: ['title'],
  data () {
    return {
      tableData: [{
        name: '王小虎'
      }, {
        name: '王小虎'
      }, {
        name: '王小虎'
      }, {
        name: '王小虎'
      }
      ]
    }
  }
}
</script>

<style scoped>
  .todo {
    display: flex;
    /*float: left;*/
    width: 50%;
    height: 100%;
    border-radius: 4px;
    background-color: #20a0ff;
  }
</style>
