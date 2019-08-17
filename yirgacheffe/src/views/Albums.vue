<template>
    <div>
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
        </el-menu>
        <el-row :gutter="10">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <el-menu
                class="el-menu-vertical-yirgacheffe">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-folder"></i>
                            <span>Library</span>
                        </template>
                        <el-menu-item index="1-1">Recently Added</el-menu-item>
                        <el-menu-item index="1-2">Albums</el-menu-item>
                        <el-menu-item index="1-3">Artists</el-menu-item>
                        <el-menu-item index="1-4">Songs</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Music Playlists</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
                <el-row :gutter="10">
                    <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="3">
                        <el-card :body-style="{ padding: '0px' }">
                            <el-image
                                style="width: 170px; height: 170px; display: block; margin-left: auto; margin-right: auto;"
                                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                fit="scale-down"></el-image>
                            <div style="padding: 14px;">
                                <el-link>好吃的汉堡</el-link>
                                <div style="font-size:12px">Jason</div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">

                    </el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">

                    </el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">

                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        
    </div>
    
</template>

<script>
export default {
  name: 'Albums'
}
</script>


<style>
    .el-menu--horizontal > .el-menu-item.nav-right{
        float:right;
    }
    .el-menu--horizontal > .el-submenu.nav-right{
        float:right;
    }
</style>
