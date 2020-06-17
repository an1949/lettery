<template>
  <div>
    <button @click = 'back' class= 'btn'>返回</button>
    <p>{{num}}</p>
    <Trun-table></Trun-table>
  </div>
</template>

<script>
import TrunTable from './TrunTanle'
export default {
  data(){
    return{
      num: null,
    }
  },
  components:{
    TrunTable
  },
  methods:{
    back(){
      this.$router.push('/LotteryInfo');
    }
  },
  created(){
    var data = this.$store.state.personInfo;
    var len=  data.length;
    data.forEach((ele,index,data) => {
     this.num =  data[len-1].lucky;
    });
  },
}
</script>

<style lang='less' scoped>
  .btn{
    outline: none;
    border: none;
    width: 40px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    border-radius: 10px;
  }
</style>