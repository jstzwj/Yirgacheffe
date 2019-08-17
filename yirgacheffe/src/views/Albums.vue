<template>
    <div>
        <nav-menu></nav-menu>
        <el-row :gutter="10" class="albums_layout">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <sidebar></sidebar>
            </el-col>
            <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
                <albums-list></albums-list>
            </el-col>
        </el-row>
        
    </div>
    
</template>

<script>
import NavMenu from '../components/NavMenu'
import Sidebar from '../components/Sidebar'
import AlbumsList from '../components/AlbumsList'

export default {
  name: 'Albums',
  components: {
    'nav-menu': NavMenu,
    'sidebar': Sidebar,
    'albums-list': AlbumsList
  }
}
</script>


<style scoped>
    .albums_layout{
        height: 100%; 
        position: relative;
    }
</style>
