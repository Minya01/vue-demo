<template>
  <div class="my-page">
      <header class="header">
            <div class="user-icon">
                <img src="../../../static/images/user.png" alt="">
            </div>
            <ul class="user-info">
                <li class="realName">苏苏</li>
                <li class="mobile">13012341234</li>
            </ul>
        </header>
      <FooterNav />
  </div>
</template>

<script>
    import FooterNav from 'components/footer/nav'

    export default {
        data(){
            return {}
        },
        components:{
           FooterNav 
        }
    }
</script>

<style lang="scss" scoped>
    @import 'static/styles/libs/require';

    .header{
        @include wh(100%,px2rem(178px));
        background-image: url('#{$imgPath}/user-header-bg.png');
        background-repeat: no-repeat;
        background-size: contain;
		box-sizing: border-box;
		@include display-flexbox;
        @include remCalc("padding",44px,60px);
        
        .user-icon{
            border-radius:px2rem(44px);
			overflow: hidden;
			img{
				width: px2rem(88px);
				height: px2rem(88px);
			}
        }

        .user-info{
            @include flex(1);
			padding-left:px2rem(40px);
			box-sizing:border-box;
			text-align: left;
			li{
				color: #ffffff;
				&.realName{
					font-size: px2rem(32px);
					line-height: px2rem(56px);
				}
				&.mobile{
					font-size: px2rem(26px);
					opacity:0.5;
				}

			}
        }
    }
</style>

