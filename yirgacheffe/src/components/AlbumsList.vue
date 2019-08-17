<template>
  <div>
      <el-row :gutter="10">
            <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="3" v-for="item in albums_list" v-bind:key="item">
                <el-card :body-style="{ padding: '0px' }">
                    <el-image
                        style="width: 170px; height: 170px; display: block; margin-left: auto; margin-right: auto;"
                        :src="item.img"
                        fit="scale-down"></el-image>
                    <div style="padding: 14px;">
                        <el-link>{{item.title}}</el-link>
                        <div style="font-size:12px">{{item.author}}</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
    name: 'AlbumList',
    data: function() {
    return {
            albums_list: [
                {
                    'img': "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566069646742&di=e908d28725f8c64c73e91a31e39fbd49&imgtype=0&src=http%3A%2F%2Fi2.sinaimg.cn%2Fent%2Fy%2Fd%2F2010-05-10%2FU1819P28T3D2953478F326DT20100510182128.jpg",
                    'title': '天之大',
                    'author': '费玉清'
                }
            ]
        };
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
