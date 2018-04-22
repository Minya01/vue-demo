<template>
  <div class="personal-page">
      <HeadTop head-title="个人信息" :goBack="goBack"></HeadTop>
  </div>
</template>

<script>
    import HeadTop from 'components/header/head'
    
    export default {
        data(){
            return {
                goBack:true
            }
        },
        components:{
            HeadTop
        }
    }
</script>
