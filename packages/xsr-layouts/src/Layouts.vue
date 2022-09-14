<script setup lang='ts'>
import { computed,StyleValue,toRefs,withDefaults } from 'vue';

type Props = {
    mode?:'vertical'|'horizontal',
    collapsed?:boolean
    sider?:{
        show:boolean,
        width:number,
        collapsedWidth:number
    },
    header?:{
        show:boolean
        fixed:boolean
        height:number
    },
    footer?:{
        show:boolean
        fixed:boolean
        height:number
    },
    main?:{
        fixed:boolean
        height:number
    }

}
const props = withDefaults(defineProps<Props>(),{
    mode:'vertical',
    collapsed:false,
    sider(){
        return{
            show:true,
            width:200,
            collapsedWidth:60
        }
    },
    header(){
        return {
            show:true,
            fixed:true,
            height:60
        }
    },
    footer(){
        return{
            show:true,
            fixed:true,
            height:60
        }
    },
    main(){
        return{
            fixed:true,
            height:800
        }
    }
})
const {mode,collapsed,header,footer,sider,main} = toRefs(props)
const headerStyle = computed(()=>{
    let style:StyleValue = {}
    if(mode?.value==='vertical'){
        style.paddingLeft = 0
    }
    if(mode?.value==='horizontal'){
        style.paddingLeft = collapsed?.value?`${sider?.value?.collapsedWidth}px`:`${sider?.value?.width}px`
    }
    style.height = `${header?.value?.height}px`
    if(header?.value?.fixed){
        style.position = 'fixed',
        style.top = 0
        style.left = 0
    }
    if(!header?.value?.fixed){
        style.position = 'relative'
    }
    return style
})
const sideStyle = computed(()=>{
    let style:StyleValue = {}
    style.width = collapsed?.value?`${sider?.value?.collapsedWidth}px`:`${sider?.value?.width}px`
    if(mode?.value==='vertical'){
        style.paddingTop = `${header?.value?.height}px`
        style.paddingBottom = `${footer?.value?.height}px`
    }
    if(mode?.value==='horizontal'){
        style.paddingTop = 0
        style.paddingBottom = 0
    }
    return style
})
const mainStyle = computed(()=>{
    let style:StyleValue = {}
    style.paddingLeft = collapsed?.value?`${sider?.value?.collapsedWidth}px`:`${sider?.value?.width}px`
    style.paddingTop = header?.value?.fixed?`${header?.value.height}px`:`0`
    style.paddingBottom = footer?.value?.fixed?`${footer?.value.height}px`:`0`
    return style
})
const footerStyle = computed(()=>{
    let style:StyleValue = {}
    style.width = `100%`
    style.height = `${footer?.value?.height}px`
    if(mode?.value==='vertical'){
        style.paddingLeft = 0
    }
    if(mode?.value==='horizontal'){
        style.paddingLeft = collapsed?.value?`${sider?.value?.collapsedWidth}px`:`${sider?.value?.width}px`
    }
    if(footer?.value?.fixed){
        style.position = 'fixed'
        style.left = 0
        style.bottom = 0
    }
    if(!footer?.value?.fixed){
        style.position = 'relative'
    }
    return style
})
</script>
<template>
<div class="xsr-layout">
    <div v-if="header.show" class="xsr-layout-header" :style="headerStyle">
        <slot name="header"></slot>
    </div>
    <aside v-if="sider.show" class="xsr-layout-sider" :style="sideStyle">
        <slot name="sider"></slot>
    </aside>
    <main class="xsr-layout-main" :style="mainStyle">
        <slot name="main"></slot>
        <slot></slot>
    </main>
    <footer v-if="footer.show" class="xsr-layout-footer" :style="footerStyle">
        <slot name="footer"></slot>
    </footer>
</div>
</template>
<style scoped>
div {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.xsr-layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s;
}
.xsr-layout-header {
    z-index: 1;
    width: 100%;
    transition: all 0.5s;
  }
  .xsr-layout-sider {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    transition: all 0.3s;
  }
  .xsr-layout-main {
    position: relative;
    width: 100%;
    z-index: 0;
    transition: all 0.3s;
  }
  .xsr-layout-footer {
    width: 100%;
    z-index: 0;
    transition: all 0.5s;
  }
</style>