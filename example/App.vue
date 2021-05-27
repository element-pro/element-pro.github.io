<template>
  <el-container class="app-container">
    <el-header height="auto">
      <div class="app-header">
        <h1 class="title">
          <span><i class="el-icon-cloudy"></i></span>
          <span>Element Pro</span>
        </h1>
        <div class="nav">
          <span class="info_6">最新版本：v0.7.1</span>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <app-aside></app-aside>
      </el-aside>
      <el-main class="app-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from './components/Aside'
export default {
  name: 'App',
  components: { AppAside }
}
</script>

<style>
.app-container {
  height: 100%;
  width: 1200px;
  margin: auto;
}
.app-header {
  padding: 20px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
}
.app-header > .title {
  color: #409EFF;
  font-size: 30px;
  line-height: 40px;
  margin: 0;
}
.app-header > .title i {
  font-weight: bold;
}
.app-header > .nav {
  flex: 1;
  font-size: 14px;
  text-align: right;
}
.app-main {
  padding: 36px 0;
}
</style>