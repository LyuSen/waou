<template>
  <div class="sk">
    <!--轮播图-->
    <div class="sk_banner">
      <mt-swipe :auto="2000" style="height:3.5rem">
        <mt-swipe-item>
          <img class="sk_banner_pic" src="../../static/cutPic/轮播图.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="sk_banner_pic" src="../../static/cutPic/农夫山泉17.5度橙6斤装铂金版.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="sk_banner_pic" src="../../static/cutPic/开小差爆米花100g-3(奶油味+焦糖味+芝麻味).png" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--体现滚动-->
    <div>
      <getMoney></getMoney>
    </div>
    <!--货品清单-->
    <div class="sk_shop">
      <div class="sk_shop_goods" :data-id=item.pic_id @click="toNewPage(index)" v-for="(item,index) in getData " :key="index">
        <img class="sk_shop_goodsPic" :src=item.sec_src alt="">
        <p class="sk_shop_goodsTxt">{{item.goods_name}}</p>
        <!--出售情况-->
        <div class="sk_shop_goodsSell">
          <div class="sk_shop_pri_flex" >
            <!--商品进度-->
            <div style="display: flex;margin-top:0.25rem;">
              <span class="sk_goods_font" style="margin-right: 0.26rem;">商品进度</span>
              <ul class="sk_goods_pro" >
                <li class="act" style="list-style: disc"></li>
                <li  style="list-style: disc"></li>
                <li  style="list-style: disc"></li>
                <li style="list-style: disc"></li>
              </ul>
            </div>
            <!--价格-->
            <div>
              <span class="sk_goods_pri">￥</span><span class="sk_goods_pri sk_goods_priBig">{{item.price}}</span><span class="lineThrough_pri" style="text-decoration:line-through;">￥{{item.oldPri}}</span>
            </div>
          </div>
          <!--秒杀按钮-->
          <div class="seckill_box"  data-id="0">
            <p class="seckillTxt seckillTxt_margin">一键秒杀</p>
            <span class="seckillTxt" style="font-size:0.18rem;">预计补贴约</span><span class="seckillTxt" style="font-size:0.18rem;">55.68</span>
          </div>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  import getMoney from '@/components/getMoney'
  export default {
    name: "secKill",
    data(){
      return{

      }
    },
    methods:{
    toNewPage:function (index) {
      this.$router.push({path:'/shopdetail',query:{ id:index }})
    }
    },
    computed:{
      getData(){
        // this.$store.commit('getData')
        console.log(this.$store.state.msg);
        return this.$store.state.msg
      }
    },
    components:{getMoney}
  }
</script>

<style lang="stylus" scoped>
  /*轮播区域*/
  .sk_banner_pic
    width 100%

  /*提现区域*/
  /*物品清单*/
  .sk_shop_goods
    width 6.90rem
    background-color #ffffff
    border-radius 0.20rem
    margin 0.2rem auto
  .sk_shop_goodsPic
    width:6.9rem;
    height:3.2rem
  .sk_shop_goodsTxt
    padding 0.2rem
  /*商品进度*/
  .sk_goods_pro li
    float: left
    margin-left:0.3rem
  .sk_shop_goodsSell
    display flex
    justify-content space-between
    padding-bottom 0.4rem
  /*秒杀按钮文字*/
  .seckillTxt
    font-family PingFang-SC-Medium
    font-size 0.28rem
    font-weight normal
    font-stretch normal
    /*line-height 0.63rem*/
    letter-spacing 0.01rem
    color: #ffffff
  .seckill_box
    width 2.00rem
    height 0.84rem
    padding 0.1rem
    margin-right 0.24rem
    text-align center
    background-color #fa4948
    border-radius 0.10rem
    .seckillTxt_margin
      margin 0.1rem 0 0.05rem 0
  .sk_goods_font
  .sk_goods_pro
    font-family: PingFang-SC-Medium;
    font-size: 0.20rem;
    font-weight: normal;
    font-stretch: normal;
    /*line-height: 6px;*/
    letter-spacing: 0.01rem;
    color: #999999;
  .sk_goods_pro
    color pink
  .act
    color: deeppink
  .sk_goods_pri
    font-family: PingFang-SC-Heavy;
    font-size: 0.22rem;
    font-weight: normal;
    font-stretch: normal;
    /*line-height: 6px;*/
    letter-spacing: 0.01rem;
    color: #ff3657;
  .sk_goods_priBig
    font-size 0.25rem
    font-weight:bold
  /*flex盒子群*/
  .sk_shop_pri_flex
    display: flex;
    flex-direction: column
    margin-left 0.24rem
    justify-content: space-between
  /*原价(划线)*/
  .lineThrough_pri
    margin-left 0.18rem
    font-family: PingFang-SC-Medium;
    font-size: 0.1rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0.01rem;
    color: #999999;
</style>
