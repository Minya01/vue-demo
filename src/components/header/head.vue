<template>
  <header id="head-top">
        <section class="head_goback" v-if="goBack" @click="back()">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
    </header>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props: ['signinUp', 'headTitle', 'goBack'],
        computed: {

        },
        methods: {
            getUserInfo(){
                // 获取用户信息
            },
            back(){
                // 返回按钮
                $router.go(-1)
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import 'static/styles/libs/require';

    #head-top{
        @include wh(100%,px2rem(96px));
        background-color: $headBgColor;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;

        .head_goback{
            left: 30px;
            @include wh(px2rem(24px),px2rem(44px));
            margin-left: px2rem(30px);
            margin-top: px2rem(26px);
            opacity:0.6;
        }

        .title_head{
            @include center;
            width: 50%;
            text-align: center;
            .title_text{
                @include sc(px2rem(36px), #fff);
                text-align: center;
            }
        }

    }

</style>

