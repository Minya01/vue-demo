<template>
  <div class="borrow-page">
      <head-top head-title="页面一" :goBack="goBack"></head-top>
      <div class="container">
          <div class="form-panel">
              <div class="form-inline">
                <label for="">项目一</label>
                <input type="text" class="form-control">
                <i class="icon icon-question"></i>
            </div>
            <div class="form-inline">
                <label for="">项目二</label>
                <input type="text" class="form-control">
                <i class="icon icon-arrow-right"></i>
            </div>
            <div class="form-inline">
                <label for="">项目三</label>
                <input type="text" class="form-control">
                <i class="icon icon-question"></i>
            </div>
            <div class="form-inline">
                <label for="">项目四</label>
                <input type="text" class="form-control">
                <i class="icon icon-question"></i>
            </div>
            <div class="form-inline">
                <label for="">项目五</label>
                <input type="text" class="form-control">
                <i class="icon icon-question"></i>
            </div>
            <div class="form-inline">
                <label for="">项目六</label>
                <input type="text" class="form-control">
                <i class="icon icon-question"></i>
            </div>
            <div class="form-inline">
                <label for="">项目七</label>
                <input type="text" class="form-control">
                <i class="icon icon-arrow-right"></i>
            </div>
          </div>
          <div class="separator-line"></div>
          <div class="form-panel">
            <div class="form-inline">
                <label for="">项目九</label>
                <input type="text" class="form-control">
                <i class="icon icon-arrow-right"></i>
            </div>
        </div>
        <div class="btn-inline">
            <button type="button" class="btn js-submit-btn disabled">确认</button>
        </div>
      </div>
  </div>
</template>

<script>
     import HeadTop from 'components/header/head'

     export default {
         data(){
             return {
                 goBack:true,//返回按钮
             }
         },
         components:{
             HeadTop
         }

     }
</script>

<style lang="scss" scoped>
    @import 'static/styles/libs/require';

    .form-panel{
        @include remCalc("padding",0,30px);
        background-color: $white;

        .form-inline {
            @include display-flexbox;
            @include align-items;
            overflow: hidden;
            height: px2rem(100px);
            line-height: px2rem(100px);
            font-size: px2rem(30px);

            & + .form-inline{
                border-top: 1px solid #efeff4;
            }

            label{
                margin-right: auto;
                padding-right: px2rem(10px);
                color: #333333;
            }

            .form-control{
                color: #888888;
                text-align: right;
                box-sizing: border-box;
                height: 100%;
            }

            .icon{
                width: px2rem(30px);
                height: 100%;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                margin-left: px2rem(10px);

                &.icon-question{
                    background-image: url('#{$imgPath}/icon-question-blue.png');
                }

                &.icon-arrow-right{
                    background-image: url('#{$imgPath}/icon-arrow-right.png');
                    width: px2rem(38px);
                    background-size: px2rem(22px) px2rem(22px);
                    background-position: right center;
                    margin-left: 0;


                    &.disabled{
                        background: #fff !important;
                    }
                }
            }
        }
    }

    .separator-line {
        @include wh(100%,px2rem(32px));
        // background-color: $bgcolor;
    }

    .btn-inline{
        @include remCalc("padding",100px,60px);
        box-sizing: border-box;

        &.top{
            @include remCalc("padding",30px,60px);
        }

        .btn{
            @include btn-mod(px2rem(88px),px2rem(30px));
            background-color: #108ee9;
            border-radius: px2rem(44px);

            &.disabled{
                background-color: #c8c8c8;
            }
        }
    }
</style>

