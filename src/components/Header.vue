<template>
  <div class = 'header'>
      <!-- <router-link to = "/LotteryInfo" tag = 'li' active-class = 'active'>信息</router-link>
      <router-link :to = "{name:'LotteryClick'}" tag = 'li' active-class = 'active'>抽奖</router-link> -->
  </div>
</template>

<script>
export default {
    data(){
      return{

      }
    },
}
</script>

<style lang='less' scoped>
  .header{
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border: 1px solid #e3e4e5;
    justify-content: center;
    // background: url('../assets/img/1.jpg') no-repeat;
    // background-size: 100% 100px;
    
    li{
      flex:1;
      text-align: center;
      cursor: pointer;
      user-select: none;
      border: 1px solid #e3e4e5;
    }
    .active{
      background: chocolate;
    }
  }
</style>