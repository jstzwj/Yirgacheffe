<template>
    <div>
        <nav-menu></nav-menu>
        <el-row :gutter="10" class="artists_layout">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <sidebar></sidebar>
            </el-col>
            <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
                <router-view></router-view>
            </el-col>
        </el-row>
        
    </div>
    
</template>

<script>
import NavMenu from '../components/NavMenu'
import Sidebar from '../components/Sidebar'

export default {
  name: 'Artists',
  components: {
    'nav-menu': NavMenu,
    'sidebar': Sidebar
  }
}
</script>


<style scoped>

</style>
