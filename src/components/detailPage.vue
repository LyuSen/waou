<template>
  <div class="detail">
    <mt-header style="background-color:#fa4948" fixed   :title=goodCont.goods_name></mt-header>

    <img :src=goodCont.top_src  style="width: 100%;" alt="">
    <div style="padding:0.4rem 0.3rem 0 0.3rem;position: relative;">
      <div class="PC_pri">
        <span class="PC_pri_1">￥</span>
        <span class="PC_pri_2">{{goodCont.price}}</span>
        <span class="PC_pri_3" style="text-decoration: line-through;">￥{{goodCont.oldPri}}</span>
      </div>
      <div class="PC_pro_going">
          <span>商品进度</span>
        <ul class="sk_goods_pro" >
          <li class="act" style="list-style: disc"></li>
          <li  style="list-style: disc"></li>
          <li  style="list-style: disc"></li>
          <li style="list-style: disc"></li>
        </ul>
      </div>
    </div>
    <div class="dp_underline">{{goodCont.goods_name}}</div>
    <div class="pro_flex">
      <div>
        <img style="width:0.24rem;height: 0.24rem;vertical-align: middle" src="../../static/cutPic/red.png" alt=""><span style="vertical-align: middle;">支持7天无理由退货</span>
      </div>
      <div>
        <img style="width:0.24rem;height: 0.24rem;vertical-align: middle" src="../../static/cutPic/red.png" alt=""><span style="vertical-align: middle;">闪电退款</span>
      </div>
      <div>
        <img style="width:0.24rem;height: 0.24rem;vertical-align: middle" src="../../static/cutPic/red.png" alt=""><span style="vertical-align: middle;">国内大部分地区包邮</span>
      </div>
    </div>

    <!--秒少成绩-->
    <div class="PC_sec_txt_padding">
      <div class="PC_sec_txt">
        <p class="PC_sec_txt_1">上一轮秒少成绩（秒少周期一个月）</p>
        <p class="PC_sec_txt_2">马上秒杀，可获消费力积分补贴，等值换购商品</p>
      </div>
      <div class="PC_chanp">
        <img style="width: 0.38rem;height: 0.38rem;vertical-align: middle;margin-right: 0.2rem;" src="../../static/cutPic/green.png" alt=""><span style="padding-right: 0.6rem;">花木兰</span>
        <span>上轮秒杀冠军，获得补贴xx元</span>
      </div>
      <div class="PC_chanp">
        <img style="width:0.38rem;height:0.38rem;vertical-align: middle;margin-right: 0.2rem;" src="../../static/cutPic/green.png" alt=""><span style="padding-right: 0.6rem;" >阿拉丁</span>
        <span>上轮秒杀冠军，获得补贴xx元</span>
      </div>
    </div>
    <!--商品详情-->
    <div >
      <h3 class="beforeRed">商品详情</h3>
      <img  style="width: 100%;" :src=goodCont.det_src alt="">
    </div>
    <!--底部购买-->
    <div class="PC_bottom_buy">
      <div class="PC_first PC_kf_first">
        <img src="../../static/cutPic/sy.png" style="width: 0.35rem;" alt="">
        首页
      </div>
      <div class="PC_kf PC_kf_first">
        <img src="../../static/cutPic/kf.png" style="width: 0.4rem;" alt="">
        客服
      </div>
      <div class="PC_bottom_but">
        <div class="PC_but_friend">朋友助力</div>
        <div class="PC_but_kill"><p>一键秒杀</p>
        <span class="PC_but_kill_1">预计补贴约52.68元</span>
        </div>
      </div>
    </div>
    <div style="position: fixed; height: 200px;top: 0;z-index: 1000;">
      <img  @click="backPage" style="width: 0.5rem;margin-top: 0.17rem;" src="../../static/cutPic/goback.png" alt="">
    </div>
  </div>
</template>

<script>
  import {Header} from 'mint-ui';
  import { Tabbar, TabItem } from 'mint-ui';

  export default {
        name: "detailPage",
        data(){
          return{
            goodId:''
          }
        },
        created(){
          this.$store.state.showBottomNav = false;
          console.log(this.$route.query.id);
          this.goodId = this.$route.query.id;
        },
        computed:{
          goodCont(){
            return this.$store.state.msg[this.goodId]
          }
        },
    methods:{
          backPage:function () {
            this.$router.back();
            this.$store.state.showBottomNav = true
          }
    }
    }
</script>

<style lang="stylus" scoped>
.PC_kf_first
  display: flex
  flex-direction:column
  justify-content space-around
  align-items center
/*详情图红遍*/
.sk_goods_pro
  li
    float: left
    color lightpink
    margin-left:0.3rem
  .act
    color red
  //商品进度
.PC_pro_going
  position: absolute
  right 0.3rem
  top 0.31rem
  /*详情页*/
.detail
  position: fixed
  /*top 0*/
  /*right 0*/
  /*left 0*/
  /*bottom 0*/
  overflow auto
  background white
  height 100% - 14rem
  width 100%
.dp_underline
  padding 0.3rem 0.3rem 0 0.3rem
  font-family: PingFang-SC-Medium;
  font-size: 0.30rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: -0.01rem;
  color: #333333;
  &:after
    display block
    content ''
    width: 6.90rem;
    height: 0.02rem;
    background-color: #eaeaea;
    margin 0.2rem auto 0.3rem
  /*保证flex*/
.pro_flex
  display flex
  flex-direction:row
  font-family: PingFang-SC-Medium;
  font-size: 0.24rem;
  font-weight: normal;
  font-stretch: normal;
  color: #7d7d7d;
  justify-content space-around
  position: relative;
  &:after
    display: block
    content: ''
    position: absolute;
    bottom -0.3rem
    width: 7.50rem;
    height: 0.20rem;
    background-color: #f3f4f5;
.PC_sec_txt_padding
  padding 0.5rem 0.3rem 0.3rem 0.3rem
.PC_sec_txt
  font-family: PingFang-SC-Medium;
  font-size: 0.30rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0;
  color: #333333;
  padding-bottom 0.25rem
  border-bottom 0.01rem solid #eaeaea
  .PC_sec_txt_1
    margin-bottom 0.14rem
  .PC_sec_txt_2
    font-size 0.24rem
    color: #999999;
  /*商品详情*/
h3
  text-align center
  &:before
    display: block
    content: ''
    width: 7.50rem;
    height: 0.20rem;
    background-color: #f3f4f5;
    margin-bottom 0.37rem
   &:after
    display: block
    content: ''
    margin-top 0.3rem
    width: 7.50rem;
    height: 0.04rem;
    background-color: #fa4948;
  //价钱问题
.PC_pri
  font-family: PingFang-SC-Heavy;
  font-size: 0.22rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.01rem;
  color: #ff3657;
  .PC_pri_2
    font-size 0.5rem
  .PC_pri_3
    font-family: PingFang-SC-Medium
    font-size 0.2rem
    color: #999999;
    /*补贴冠军*/
.PC_chanp
  padding 0.45rem 0 0.45rem 0
  border-bottom 0.01rem solid #eaeaea
  /*底部购买*/
.PC_bottom_buy
  position: fixed
  bottom 0
  background white
  width 100%
  height:1.02rem
  display: flex
  flex-direction:row
  text-align center
  justify-content space-between
  .PC_first
    width: 13%
  .PC_kf
    width:13%
    border-left: 0.01rem solid #eaeaea
    border-right 0.01rem solid #eaeaea
  .PC_bottom_but
    display: flex
    width 74%
    align-items center
    justify-content:space-around
    .PC_but_friend
      width: 2.44rem;
      height: 0.75rem;
      background-color: white;
      border-radius: 0.10rem;
      border: 0.03rem  solid #fa4948;
      line-height 0.70rem
      font-family: PingFang-SC-Medium;
      font-size: 0.32rem;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0;
      color: #fa4948;
      padding 0.06rem 0 0.06rem 0
    .PC_but_kill
      width: 2.50rem;
      height: 0.76rem;
      background-color: #fa4948;
      border-radius: 0.10rem;
      font-family: PingFang-SC-Medium;
      font-size: 0.25rem;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0.01rem;
      color: #ffffff;
      padding-top 0.12rem
      .PC_but_kill_1
        font-size 0.15rem

</style>
