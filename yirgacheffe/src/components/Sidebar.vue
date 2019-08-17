<template>
    <el-menu
    class="el-menu-vertical-yirgacheffe">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-folder"></i>
                <span>Library</span>
            </template>
            <el-menu-item index="1-1">Recently Added</el-menu-item>
            <el-menu-item index="1-2">
                <router-link tag="li" to="/Albums">Albums</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
                <router-link tag="li" to="/Artists">Artists</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">Songs</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">Music Playlists</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>