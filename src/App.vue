<script setup lang="ts">
  import { ref } from 'vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Layouts from '@xsrole/xsr-layouts';
const collapsed = ref(false)
const mode = ref('vertical')
const header = ref({
  height:60,
  fixed:false,
  show:true
})
const footer = ref({
  height:60,
  fixed:false,
  show:true
})
const sider = ref({
  show:true,
  width:200,
  collapsedWidth:60
})
const handleChangeMode = ()=>{
  mode.value = mode.value ==='vertical'?'horizontal':'vertical'
}
</script>

<template>
  <Layouts :collapsed="collapsed" :mode="mode" :header="header" :footer="footer" :sider="sider">
    <template #header>
      <div wfull hfull bg-gray2>
        header
      </div>
    </template>
    <template #sider>
      <div wfull hfull bg-gray3>
        
      </div>
    </template>
    <template #main>
      <div wfull hfull bg-gray1>
        <div fixed left="1/2" top="20">
          <p @click="collapsed = !collapsed">collapsed({{collapsed}})</p>
          <p @click="handleChangeMode">mode({{mode}})</p>
          <div>
            <p>header-height</p>
            <input type="text" name="" id="" v-model="header.height" >
            <input type="checkbox" name="" id="" v-model="header.show">
            <input type="checkbox" name="" id="" v-model="header.fixed">
          </div>
          <div>
            <p>footer-height</p>
            <input type="text" name="" id="" v-model="footer.height" >
            <input type="checkbox" name="" id="" v-model="footer.show">
            <input type="checkbox" name="" id="" v-model="footer.fixed">
          </div>
          <div>
            <p>footer-height</p>
            <input type="text" name="" id="" v-model="sider.width" >
            <input type="text" name="" id="" v-model="sider.collapsedWidth" >
            <input type="checkbox" name="" id="" v-model="sider.show">
          </div>
        </div>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      </div>
    </template>
    <template #footer>
      <div wfull hfull bg-gray4>
        footer
      </div>
    </template>
</Layouts>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
