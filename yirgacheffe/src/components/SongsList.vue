<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="time"
        width="180">
      </el-table-column>
      <el-table-column
        prop="artist"
        label="artist"
        width="180">
      </el-table-column>
      <el-table-column
        prop="album"
        label="album"
        width="180">
      </el-table-column>
      <el-table-column
        prop="plays"
        label="plays"
        width="80">
      </el-table-column>
      <el-table-column
        prop="space"
        label="">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: 'SongsList',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
