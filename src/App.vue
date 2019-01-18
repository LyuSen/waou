<template>
  <div id="app">
    <div class="top_nav">
      <mt-header style="background-color:#fa4948" :title=dataName></mt-header>
    </div>
    <div class="middle_main">
      <router-view/>
    </div>
    <div class="bottom_nav"  v-if="$store.state.showBottomNav">
      <!--<router-link to="/secKill">秒杀推荐</router-link>-->
      <!--<router-link to="/shareShop">共享商城</router-link>-->
      <!--<router-link to="/personCenter">个人中心</router-link>-->
      <mt-tabbar  v-model="selected" style="z-index: 22;">
        <mt-tab-item  style="" id="secKill" data-name="秒杀推荐">
          <img slot="icon" v-if="selected!=='secKill'" src="../static/cutPic/秒杀推荐-未选中.png">
          <img slot="icon" v-else src="../static/cutPic/秒杀推荐-选中.png">

          秒杀推荐
        </mt-tab-item>
        <mt-tab-item id="shareShop" data-name="共享商城">
          <img slot="icon" v-if="selected!=='shareShop'" src="../static/cutPic/共享商城-未选中.png">
          <img slot="icon" v-else src="../static/cutPic/共享商城-选中.png">
          分享商城
        </mt-tab-item>
        <mt-tab-item id="personCenter" data-name="个人中心">
          <img slot="icon" v-if="selected!=='personCenter'" src="../static/cutPic/个人中心_未选中.png">
          <img slot="icon" v-else src="../static/cutPic/个人中心_选中.png">
          个人中心
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <div class="xcxLog">
      <img src="../static/cutPic/dot.png" style="width: 1.45rem;	height: 0.54rem; background-color: #d91f3d;
    -webkit-border-radius: 0.32rem;
    -moz-border-radius: 0.32rem;
    border-radius: 0.32rem;" alt="">
    </div>
  </div>
</template>

<script>
  import {Header} from 'mint-ui';
  import { Tabbar, TabItem } from 'mint-ui';

  export default {
    name: 'App',
    data(){
      return{
        selected:'secKill',
        dataName:'秒杀推荐'
      }
    },
    created(){
      this.$store.state.showBottomNav = true
    },
    watch:{
      selected(newV,oleV){
        if(newV==='secKill'){
          this.dataName='秒杀推荐'
        }
        if(newV==='shareShop'){
          this.dataName='共享商城'
        }
        if(newV==='personCenter'){
          this.dataName='个人中心'
        }
        this.$router.push({
          name:newV
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .xcxLog
    position: fixed
    top 0.15rem
    right 0.15rem
  #id
    width: 100%;
  .middle_main
    position: fixed
    /*85%*/
    height 100% - 14rem
    overflow auto
    width 100%
</style>
