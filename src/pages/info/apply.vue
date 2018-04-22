<template>
  <div class="info-index-page">
      <head-top head-title="申请页面" :goBack="goBack"></head-top>
      <div class="container">
          <div class="main">
              <div class="box">
                  <div class="text-box">
                      <p class="sub">你的可用额度（元）</p>
                      <p class="major">6,800</p>
                      <p class="sub">补充信息即可领取</p>
                  </div>
              </div>
          </div>
          <div class="btn-box">
              <a class="btn">立即补充</a>
          </div>
      </div>
      <FooterNav />
  </div>
</template>

<script>
    import HeadTop from 'components/header/head'
    import FooterNav from 'components/footer/nav'

    export default {
        data(){
            return {
                goBack:true
            }
        },
        components:{
            HeadTop,
            FooterNav
        }

    }
</script>

<style lang="scss" scoped>
    @import 'static/styles/libs/require';
    
    .info-index-page{
        background-color: #ffffff;
        height: 100vh;
        overflow: hidden;
    }

    .main{
        @include wh(100%,px2rem(700px));
        @include display-flexbox;
        @include justify-center;
        @include align-items;
        background-image: url('#{$imgPath}/info-index-bg.png');
        background-size: contain;
        background-repeat: no-repeat;

        .box{
            @include wh(px2rem(476px),px2rem(465px));
            @include display-flexbox;
            @include justify-center;
            @include align-items;
            background-image: url('#{$imgPath}/info-index-box.png');
            background-size: contain;
            background-repeat: no-repeat;

            .text-box{
                .sub{
                    font-size: px2rem(24px);
                    color: #0d71eb;
                }

                .major{
                    font-size: px2rem(120px);
                    background: -webkit-linear-gradient(#026ae1, #0695f2);
                    background: linear-gradient(#026ae1, #0695f2);
                    color:transparent;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
    }

    .btn-box{
        @include remCalc("padding",56px,64px);
        box-sizing: border-box;

        .btn {
            @include wh(100%,px2rem(94px));
            display: block;
            background-image: url('#{$imgPath}/button-block.png');
            background-size: 100%;
            background-repeat: no-repeat;
            line-height: px2rem(94px);
            text-align: center;
            font-size: px2rem(34px);
            color: #ffffff;
        }
    }
</style>

