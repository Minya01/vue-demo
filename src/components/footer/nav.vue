<template>
    <div id="footer-nav">
        <section class="box" @click="gotoPath('/apply')">
            <i class="icon icon-money" :class="$route.path.indexOf('apply') !== -1 ? 'active':''"></i>
            <p class="text" :class="$route.path.indexOf('apply') !== -1 ? 'active':''">零花钱</p>
        </section>
        <section class="box" @click="gotoPath('')">
            <i class="icon icon-contract"></i>
            <p class="text">合同</p>
        </section>
        <section class="box" @click="gotoPath('/my')">
            <i class="icon icon-user" :class="$route.path.indexOf('my') !== -1 ? 'active':''"></i>
            <p class="text" :class="$route.path.indexOf('my') !== -1 ? 'active':''">我的</p>
        </section>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        methods: {
            gotoPath(url){
                // 菜单跳转
                this.$router.push(url);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'static/styles/libs/require';

    #footer-nav{
        @include wh(100%,px2rem(98px));
        @include display-flexbox;
        @include justify-center;
        @include align-items;
        border-top: 1px solid #dbdbdb;
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        left: 0;

        .box{
            @include flex(1);
            text-align: center;
            cursor: pointer;

            .icon{
                @include wh(px2rem(40px),px2rem(40px));
                margin: px2rem(10px) auto 0;
                display: block;
                background-repeat: no-repeat;
                background-size: contain;

                @each $img in money,contract,user {
                    &.icon-#{$img} {
                        background-image: url('#{$imgPath}/icon-#{$img}.png');

                        &.active{
                            background-image: url('#{$imgPath}/icon-#{$img}-active.png');
                        }
                    }
                }
            }

            .text{
                font-size: px2rem(20px);
                color: #888888;

                &.active{
                    color: #0087ef;
                }
            }
        }

    }
</style>

