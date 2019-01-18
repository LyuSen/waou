<template>
  <div class="sk_getmoney">
    <div class="swiper-container" style="height: 0.72rem;">
      <div class="swiper-wrapper" style="height: 0.72rem;">
        <div class="swiper-slide">
          <!--<img src="http://img.hb.aicdn.com/8bb75dd3158a3fefeffafc9106eea9438d1d8fc36f522-O6PhIJ_fw658" alt="">-->
          <div class="sk_getmoney_center"><img class="sk_getmoney_pic" src="../../static/cutPic/设置.png" alt=""> <span>阿拉丁</span><span>成功提现</span><span>88.00</span><span>元</span>
          </div>

        </div>
        <div class="swiper-slide">
          <!--<img src="http://img.hb.aicdn.com/128b5f2408da4cde826f0164ad81d8cb599107e5192604-zxyHyz_fw658" alt="">-->
          <div class="sk_getmoney_center"><img class="sk_getmoney_pic" src="../../static/cutPic/设置.png" alt=""> <span>阿拉丁</span><span>成功提现</span><span>88.00</span><span>元</span>
          </div>

        </div>
        <div class="swiper-slide">
          <!--<img src="http://img.hb.aicdn.com/9b6c89d12bbe71255b55346236e2318c3bbc64844adce-XJpn39_fw658" alt="">-->
          <div class="sk_getmoney_center"><img class="sk_getmoney_pic" src="../../static/cutPic/设置.png" alt=""> <span>阿拉丁</span><span>成功提现</span><span>88.00</span><span>元</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: "getMoney",
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true,
        direction: 'vertical',
        pagination: '.swiper-pagination',
        paginationElement: 'li'
      })
    },
  }
</script>

<style lang="stylus">
  .sk_getmoney_center
    /*line-height 0.72rem*/
    display flex
    align-items center
    margin-top 0.16rem
    margin-left 0.2rem

  .swiper-container
    width 6.90rem
    height 0.72rem
    background-color #ffffff
    border-radius 0.20rem
    margin 0.18rem auto
    display: flex
    /*justify-content center*/
    align-items center

  .sk_getmoney_pic
    width 0.36rem
    height 0.36rem
    -webkit-border-radius: 50%
    -moz-border-radius: 50%
    border-radius: 50%
    margin-right 0.2rem
</style>
