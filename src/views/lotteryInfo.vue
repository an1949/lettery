<template>
  <div class="lotteryInfo">
    <div class="inputBox">
      <label for="name">
        昵称：
        <input type="text" id="name" placeholder="请输入昵称" v-model="LotteryName" />
      </label>
    </div>
    <div class="inputBox">
      <label for="iphone">
        手机号：
        <input type="number" id="iphone" placeholder="请输入手机号" v-model.number="LotteryIphone" />
      </label>
    </div>
    <div class="inputBox">
      <label for="shopping">
        商品：
        <input
          type="number"
          id="shopping"
          placeholder="请输入所购商品的件数"
          v-model.number="LotteryCount"
        />
      </label>
    </div>
    <div class="inputBox">
      <label for="lucky">
        幸运值： {{luckyNumber}}
        <!-- <div  style = 'position: relative;'>
          <div class = 'lucky'></div>
        <div class = 'lucky_B' :style = "{left: luckyNumber }"></div>-->

        <!-- </div> -->

        <!-- <input type="text" id="lucky" placeholder="您的幸运值" /> -->
      </label>
    </div>
    <div class="clickBtn">
      <button type="submit" class="btn" @click="toLetteryPage">进入抽奖</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LotteryName: "",
      LotteryCount: "",
      LotteryIphone: ""
    };
  },
 
  computed: {
    luckyNumber() {
      if (this.LotteryCount <= 1) {
        return 0;
      } else {
        return Math.floor(this.LotteryCount / 2);
      }
    }
  },
  watch: {
    // LotteryCount(val,oldVal){
    //   console.log(val,oldVal);
    // }
  },
  methods: {
    toLetteryPage() {
      if (
        this.LotteryCount != "" &&
        this.LotteryIphone != "" &&
        this.LotteryName != ""
      ) {
        if (this.luckyNumber < 1) {
          alert("您的幸运值不够，无法参与抽奖活动！");
        } else {
          let data = {
            name: this.LotteryName,
            count: this.LotteryCount,
            iphone: this.LotteryIphone,
            lucky: this.luckyNumber
          };
          // this.$axios.post("LotteryListData.json", data)
          //   .then(res=>{
          //     var data = JSON.parse(res.config.data);
          //     var obj = {
          //       name: data.name,
          //       count: data.count,
          //       iphone: data.iphone,
          //       lucky: data.lucky
          //     }
          //     // console.log(obj);
          //     this.$store.commit('getData',obj)
              // console.log();
          // });
          this.$store.commit('getData',data)
          this.LotteryName = "";
          this.LotteryCount = "";
          this.LotteryIphone = "";
          this.$router.push('/LotteryClick');
          // location.reload();
        }
        // this.LotteryName = '';
        // this.LotteryCount = '';
        // this.LotteryIphone = '';
        // this.luckyNumber = '';
      } else {
        alert("信息不完整！请重新填写！");
      }
    }
  }
};
</script>

<style lang='less' scoped>
.lotteryInfo {
  // text-align: center;
  margin-top: 230px;
  .inputBox {
    padding: 10px 5px;
    margin: 5px;
    label {
      font-weight: bold;
    }
    // .lucky{
    //   margin-top: 20px;
    //   width: 95%;
    //   height: 10px;
    //   line-height: 10px;
    //   border: 1px solid #e3e4e5;
    //   border-radius: 6px;
    //   position: absolute;
    //   overflow: hidden;
    // }
    // .lucky_B{
    //   // content: '';
    //   margin-top: 20px;
    //   position: absolute;
    //   top: 0px;
    //   left: -95%;
    //   width: 95%;
    //   height: 10px;
    //   line-height: 10px;
    //   border-radius: 6px;
    //   border: 1px solid #e3e4e5;
    //   background: crimson;

    // }
    input {
      outline: none;
      height: 25px;
      width: 95%;
      line-height: 25px;
      padding: 5px 0 5px 10px;
      margin-top: 5px;
      border: 1px solid #666;
      border-radius: 5px;
    }
  }
  .clickBtn {
    // padding: 10px 5px;
    margin: 10px;
    .btn {
      outline: none;
      border: none;
      width: 100%;
      height: 35px;
      line-height: 35px;
      border: 1px solid #e3e4e5;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      background: chartreuse;
    }
  }
}
</style>