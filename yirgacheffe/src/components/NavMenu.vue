<template>
    <el-menu :default-active="activeIndex" class="el-menu-yirgacheffe" mode="horizontal" @select="handleSelect"> 
        <el-menu-item index="1">
            <i class="el-icon-headset"></i>
            Yirgacheffe
        </el-menu-item>

        <el-submenu index="2" class="nav-right">
            <template slot="title">
                <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" class="nav-right">Sign In</el-menu-item>
        <el-menu-item index="4" class="nav-right">Sign Up</el-menu-item>
        <el-menu-item index="5" class="nav-right">Explore</el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style scoped>
    .el-menu--horizontal > .el-menu-item.nav-right{
        float:right;
    }
    .el-menu--horizontal > .el-submenu.nav-right{
        float:right;
    }
</style>