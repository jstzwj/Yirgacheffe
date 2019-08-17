<template>
  <el-row>
    <el-col :span="4">
        <ul class="artist-list">
            <li v-for="item in artists_list" v-bind:key="item" class="artist-li">
                <el-avatar :size="32" :src="item.avatar" class="artist-avatar"></el-avatar>
                <span style="font-size:12px" class="artist-name">{{item.name}}</span>
            </li>
        </ul>
    </el-col>
    <el-col :span="20">
        
    </el-col>
  </el-row>
</template>

<script>
export default {
    name: "ArtistsList",
    data: function() {
    return {
        artists_list:[
            {
                'avatar': 'https://avatar-nct.nixcdn.com/singer/avatar/2017/03/11/0/8/3/f/1489205327597_600.jpg',
                'name': 'Jay Chou'
            }
        ]
    };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .artist-list{
        height:500px;
        overflow-y:auto;
        padding: 0px;
    }
    .artist-li{
        padding: 5px;
        list-style:none;
        /* background: #e8f3fe; */
        margin: 3px;
        color: #7dbcfc;
        border: solid 1px #e6e6e6;
    }
    .artist-avatar{
        margin: 5px;
    }
    .artist-name{
        display: inline;
        vertical-align: 16px;
    }
</style>
