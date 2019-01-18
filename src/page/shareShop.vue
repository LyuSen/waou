<template>
  <div class="shareShop">
    <div class="ss_top_pic">
      <div class="ss_search">
        <img src="../../static/cutPic/搜索.png" style="width: 0.26rem;height:0.24rem;margin-left:0.2rem;vertical-align: middle" alt="">
        <input type="text" placeholder="搜索商品">
      </div>
      <div class="ss_getMoney">
        <getMoney></getMoney>
      </div>
      <div>
        <ul class="ss_list">
          <li  @click="changeColor(index)" v-bind:class='{action:index==isactive}'  v-for="(nav,index) in list_nav">{{nav}}</li>
        </ul>
      </div>
    </div>
    <!--for数据-->
    <div class="ss_goods_flex" >
      <div class="ss_goods" :data-id=list.pic_id @click="$router.push({path:'/shopdetail',query:{ id:index }})" v-for="(list,index) in getPic"  >
        <!--v-if="index===isactive"-->
        <img :src=list.share_src alt="">
        <p>{{list.goods_name}}</p>
        <span class="ss_priLog">￥</span>
        <span class="ss_priNow">{{list.price}}</span>
        <span class="ss_priOld">￥{{list.oldPri}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import getMoney from '@/components/getMoney'

  export default {
    name: "personCenter",
    data(){
      return{
        isactive:0,
        list_nav:[
          '推荐',
          '美食',
          '电器',
          '特惠',
          '百货',
          '美妆',
          '服饰'
        ],
        select:0
      }
    },
    methods:{
      changeColor:function(index){
        //点击切换 变量的值 赋值为 index
        console.log(index);
        this.isactive=index;
        this.select = index;
      }
    },
    computed:{
      getPic(){
        switch(this.select)
        {
          case 0:
            return this.$store.state.msg;
          case 1:
            return this.$store.state.food;
          case 4:
            return this.$store.state.good;
        }

      }
    },
    components:{getMoney}
  }
</script>

<style lang="stylus" scoped>
.show
  display: none
.ss_getMoney
  margin-top 0.32rem
.swiper-container
  background #f9f9f9
.action
  color red
.ss_top_pic
  width: 100%
  height:2.76rem
  background-color: #ffffff
  overflow: hidden
  .ss_search
    width: 6.90rem;
    height: 0.60rem;
    background-color: #f2f2f2;
    border-radius: 0.30rem;
    margin 0.2rem auto

    input
      border none
      height 100%
      width: 90%
      background: transparent
  /*赛选*/
 .ss_list
   position: absolute
   top 2.16rem
   left 0.2rem
   li
     float: left
     margin-right 0.20rem
  /*循环列表*/
  .ss_goods_flex
    display: flex
    flex-wrap wrap
    justify-content space-between
    padding:0.2rem
    align-items left
    .ss_goods
      width: 3.50rem;
      height: 5.21rem;
      background-color: #ffffff;
      margin-bottom 0.1rem
      border-radius 0.2rem
      img
        width: 3.50rem;
        height: 3.50rem;
      p
        padding:0.24rem
        font-family: PingFang-SC-Medium;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #333333;
        display: block;
        height: 0.63rem;
      .ss_priLog
        font-family: PingFang-SC-Heavy;
        font-size: 0.22rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0.01rem;
        color: #ff3657;
        padding-left:0.24rem
      .ss_priNow
        font-family: PingFang-SC-Heavy;
        font-size: 0.3rem;
        font-weight: normal;
        letter-spacing: 0.02rem;
        color: #ff3657;
      .ss_priOld
        margin-left: 0.18rem;
        font-family: PingFang-SC-Medium;
        font-size: 0.1rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0.01rem;
        color: #999
        text-decoration: line-through;

</style>
