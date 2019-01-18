<template>
  <div class="PC">
    <img class="PC_bg_pic" src="../../static/cutPic/背景.png" alt="">
    <!--个人头像-->
    <div class="PC_person_info">
      <div>
        <img style="vertical-align:middle" class="PC_personPic" src="../../static/cutPic/设置.png" alt=""><span
        style="vertical-align:middle">阿拉丁</span>
      </div>
      <div>
        <img class="PC_secKill_pic" src="../../static/cutPic/秒杀成绩).png" alt="">
      </div>
    </div>
    <!--可提现现金-->
    <div class="PC_get_relmomey">
      <p class="PC_txt_top">可提现金（元）</p>
      <div class="PC_textBottom_flex">
        <span class="PC_txtBottom_left">0.00</span><span class="PC_txtBottom_sub">提现</span>
      </div>
    </div>
    <!--o哇噢多多-->
    <div class="PC_wao">
      <div class="PC_wao_top">
        <div class="PC_wao_flex"><span class="PC_txt_top">哇噢多多(个)</span><span class="PC_txt_top">今日增长(个)</span></div>
        <div class="PC_wao_flex"><span class="PC_txt_top PC_txtBottom_left">0.00</span><span class="PC_txt_top"><span class="PC_txtBottom_left" style="color: red;">+0</span> </span></div>
      </div>
      <div class="PC_wao_bottom">
        <div class="PC_wao_flex"><span class="newPCtxt">昨日补贴(元)</span><span class="newPCtxt">30天补贴(元)</span></div>
        <div class="PC_wao_flex"><span class="PC_txt_top">0</span><span class="PC_txt_top">0</span></div>
      </div>
    </div>
    <!--补贴提现额度 -->
    <div class="PC_Today ">
      <div class="PC_Today_top PC_wao_top">
        <div class="PC_wao_flex"><span class="PC_txt_top">补贴提现额度</span><span class="PC_txt_top">今日补贴(个)</span></div>
        <div class="PC_wao_flex"><span class="PC_txt_top PC_txtBottom_left">3000</span><span class="PC_txt_top"><span class="PC_txtBottom_left" style='color: red;'>+0</span></span></div>
      </div>
      <div class="PC_Today_middle PC_wao_top">
        <div class="PC_wao_flex"><span class="newPCtxt">昨日补贴(元)</span><span class="newPCtxt">30天补贴(元)</span></div>
        <div class="PC_wao_flex"><span class="PC_txt_top">0</span><span class="PC_txt_top">0</span></div>
      </div>
      <div class="PC_Today_bottom">
        <div class="PC_wao_flex_new"><span>消费力</span><span>关注力</span><span>传播力</span></div>
        <div class="PC_wao_flex_new"><span class="PC_txt_top">0</span><span class="PC_txt_top">0</span><span class="PC_txt_top">0 </span></div>
      </div>
    </div>
    <!--Toollog-->
    <div class="PC_toolLog">
      <div class="PC_toolLog_flex"><img src="../../static/cutPic/订单.png" alt=""><span>订单</span></div>
      <div class="PC_toolLog_flex"><img src="../../static/cutPic/点赞.png" alt=""><span>点赞</span></div>
      <div class="PC_toolLog_flex"><img src="../../static/cutPic/推广.png" alt=""><span>推广</span></div>
      <div class="PC_toolLog_flex"><img src="../../static/cutPic/设置.png" alt=""><span>设置</span></div>
    </div>
    <!--phone、address-->
    <div class="phoneAdd">
      <div class="PC_phone">
        <div class="phoneAdd_picTxt">
          <img style="vertical-align: middle;margin-right: 0.24rem;" class="phoneAdd_pic" src="../../static/cutPic/手机号码.png" alt=""><span>手机号码</span>
        </div>
        <div class="phoneAdd_txt">未填写将影响正常发货 ></div>
      </div>
      <div class="PC_add">
        <div class="phoneAdd_picTxt">
          <img style="vertical-align: middle;margin-right: 0.24rem;" class="phoneAdd_pic" src="../../static/cutPic/收货地址.png" alt=""><span>收货地址</span>
        </div>
        <div class="phoneAdd_txt">未填写将影响正常发货 ></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "personCenter"
  }
</script>

<style lang="stylus" scoped>
  .newPCtxt
    font-family: PingFang-SC-Medium;
    font-size: 0.28px;
    font-weight: normal;
    font-stretch: normal;
    margin: 0.36rem 0.3rem 0.16rem 0.3rem;
    color: #333333;
  /*顶部背景图片*/
  .PC_bg_pic
    width 100%
    height: 2.8rem

  /*用户头像*/
  .PC_personPic
    width: 0.86rem;
    height: 0.86rem
    border-radius 50%
    margin-left: 0.58rem
    margin-right 0.23rem
  /*秒杀成绩*/
  .PC_secKill_pic
    width: 2.50rem;
    height: 0.70rem;

  .PC_person_info
    display: flex
    flex-direction: row
    justify-content space-between
    position absolute
    top 0.78rem
    width: 100%

  /*可提现金*/
  .PC_get_relmomey
    width: 7.10rem;
    height: 1.72rem;
    background-color: #ffffff;
    border-radius: 0.20rem;
    position: absolute
    top 3.14rem
    left 50%
    transform translate(-50%,0)

  /*个人现金可用，上半部分文字*/
  .PC_txt_top
    font-family: PingFang-SC-Medium;
    font-size: 0.28px;
    font-weight: normal;
    font-stretch: normal;
    color: #999999;
    margin 0.36rem 0.3rem 0.16rem .3rem

  .PC_txtBottom_sub
    display: block
    width: 1.20rem;
    height: 0.57rem;
    line-height 0.57rem
    text-align center
    background-color: #fa4948;
    border-radius: 0.20rem;
    margin-right: 0.3rem
    font-family: PingFang-SC-Medium;
    font-size: 0.28rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #ffffff;

  .PC_txtBottom_left
    display: block
    font-family: PingFang-SC-Heavy;
    font-size: 0.48rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #333333;
    margin-left: 0.3rem

  /*个人现金可用，下半部分文字*/
  .PC_textBottom_flex
    display: flex
    flex-direction: row
    justify-content: space-between

  /*哇欧*/
  .PC_wao
    width: 7.10rem;
    height: 3.44rem;
    background-color: #ffffff;
    border-radius: 0.2rem;
    position: absolute
    top 5.16rem
    left 50%
    transform translate(-50%,0)

  /*文字左右*/
  .PC_wao_flex
    display: flex
    flex-direction:row
    justify-content:space-between
  .PC_wao_flex_new
    display: flex
    flex-direction:row
    justify-content:space-around
  .PC_wao_top:after
    content ''
    display: block
    width: 6.50rem;
    height: 0.02rem;
    margin 0 auto
    background-color: #eaeaea;
  .PC_wao_bottom
    position: relative
    &:after
       content ''
       display: block
       width: 0.02rem;
       height: 1.04rem;
       background-color: #eaeaea;
       position: absolute
       top 0.32rem
       left 50%
       transform translate(-50%,0)
  /*补贴提现额度*/
  .PC_Today
    width: 7.10rem;
    height: 5.38rem;
    background-color: #ffffff;
    position: absolute
    top 8.8rem
    left 50%
    transform translate(-50%,0)
    border-radius: 0.20rem;
  .PC_Today_bottom
    margin-top 0.47rem
    position: relative;
    &:after
      content ''
      display: block
      width: 0.02rem;
      height: 1.04rem;
      background-color: #eaeaea;
      position: absolute
      top 0
      left:2.34rem
    &:before
      content ''
      display: block
      width: 0.02rem;
      height: 1.04rem;
      background-color: #eaeaea;
      position: absolute
      top 0
      right:2.34rem
  /*工具图标*/
  .PC_toolLog
    width: 7.10rem;
    height: 1.72rem;
    background-color: #ffffff;
    border-radius: 0.20rem
    position: absolute
    top 14.4rem
    left 50%
    transform translate(-50%,0)
    display: flex
    justify-content space-around
    align-items  center
    img
      width 0.44rem;
      height 0.48rem
      margin-bottom 0.24rem
  .PC_toolLog_flex
    display: flex
    flex-direction:column
    align-items center
  /*手机地址*/
  .phoneAdd
    width: 7.10rem;
    height: 1.72rem;
    background-color: #ffffff;
    border-radius: 0.20rem
    position: absolute
    top 16.32rem
    left 50%
    transform translate(-50%,0)
    margin-bottom 0.2rem
  /*phone*/
    .PC_phone
      height:0.85rem
      position: relative
    .PC_add
      position: relative
      height:0.86rem
  .PC_phone:after
    position: absolute
    bottom 0
    left 0.3rem
    display: block
    content: ''
    width: 6.50rem;
    height: 0.01rem;
    background-color: #eaeaea;
  .phoneAdd_pic
    width 0.26rem
    height 0.38rem
  .phoneAdd_txt
    position: absolute;
    right: 0.3rem;
    top: 0.33rem;
    font-family: PingFang-SC-Medium;
    font-size: 0.20rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: -0.01rem;
    color: #fa4948;
  .phoneAdd_picTxt
    padding: 0.24rem 0 0 0.3rem;
</style>
