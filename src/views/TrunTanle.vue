<template>
  <div>
    <div class="niu_danji">
      <!--机器-->
      <div class="game_qu">
        <div class="game_go">100/次</div>
        <div class="wdjifen"></div>
      </div>
      <!--球-->
      <div class="dan_gund">
        <span class="qiu_1 diaol_1"></span>
        <span class="qiu_2 diaol_2"></span>
        <span class="qiu_3 diaol_3"></span>
        <span class="qiu_4 diaol_4"></span>
        <span class="qiu_5 diaol_5"></span>
        <span class="qiu_6 diaol_6"></span>
        <span class="qiu_7 diaol_7"></span>
        <span class="qiu_8 diaol_8"></span>
        <span class="qiu_9 diaol_9"></span>
        <span class="qiu_10 diaol_10"></span>
        <span class="qiu_11 diaol_11"></span>
      </div>
      <!--中奖掉落-->
      <div class="medon">
        <!-- <img src="images/mendong.png" /> -->
        <img src="../assets/truntable copy/mendong.png" alt />
      </div>
      <div class="zjdl">
        <span></span>
      </div>
    </div>
    <!--中奖 获得三等奖-->
    <div class="zonj_zezc none" id="jianpin_one">
      <div class="jpzs aiqiyi tc_anima">
        <em class="close"></em>
        <h2>
          <b>
            恭喜你！
            <br />获得三等奖！
          </b>
        </h2>
      </div>
    </div>
    <!--中奖获得三等奖-->
    <div class="zonj_zezc none" id="jianpin_two">
      <div class="jpzs aiqiyi tc_anima">
        <em class="close"></em>
        <h2>
          <b>
            恭喜你！
            <br />获得三等奖！
          </b>
        </h2>
      </div>
    </div>
    <!--中奖 获得三等奖-->
    <div class="zonj_zezc none" id="jianpin_three">
      <div class="jpzs aiqiyi tc_anima">
        <em class="close"></em>
        <h2>咦？没有抽中？</h2>
      </div>
    </div>
    <!--没有中奖-->
    <div class="zonj_zezc none" id="jianpin_kong">
      <div class="jpzs aiqiyi tc_anima">
        <em class="close"></em>
        <h2>咦？没有抽中？</h2>
      </div>
    </div>
    <!--积分不足-->
    <div class="zonj_zezc none" id="no_jifeng">
      <div class="jpzs aiqiyi tc_anima">
        <em class="close"></em>
        <h2>对不起，积分不足！</h2>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data(){
    return{
      luckyNum: null
    }
  },
  created(){
    var data = this.$store.state.personInfo;
        var len=  data.length;
        data.forEach((ele,index,data) => {
        this.luckyNum =  data[len-1].lucky;
        });
  },
  mounted() {
    var _this = this;
    $(function() {
      // console.log(_this.luckyNum);
      var score = _this.luckyNum * 100;
      var flag = true; // 节流阀 控制不能连续点击
      $(".wdjifen").html(score);
      $(".game_go").click(function() {
        if (flag) {
          flag = false;
          score -= 100;
          if (score < 0) {
            for (var i = 1; i <= 11; i++) {
              $(".qiu_" + i).removeClass("wieyi_" + i);
            }
            $("#no_jifeng").show();
          } else {
            draw();
          }
        }
      });

      function draw() {
        var number = Math.floor(4 * Math.random() + 1); // 随机中奖号码 number标识
        for (var i = 1; i <= 11; i++) {
          // $(".qiu_" + i).removeClass("diaol_" + i);
          $(".qiu_" + i).addClass("wieyi_" + i);
        }

        setTimeout(function() {
          for (var i = 1; i <= 11; i++) {
            $(".qiu_" + i).removeClass("wieyi_" + i);
          }
        }, 1100);
        setTimeout(function() {
          switch (number) {
            case 1:
              $(".zjdl")
                .children("span")
                .addClass("diaL_one");
              break;
            case 2:
              $(".zjdl")
                .children("span")
                .addClass("diaL_two");
              break;
            case 3:
              $(".zjdl")
                .children("span")
                .addClass("diaL_three");
              break;
            case 4:
              $(".zjdl")
                .children("span")
                .addClass("diaL_four");
              break;
          }
          $(".zjdl")
            .removeClass("none")
            .addClass("dila_Y");
          setTimeout(function() {
            switch (number) {
              case 1:
                $("#jianpin_one").show();
                break;
              case 2:
                $("#jianpin_two").show();
                break;
              case 3:
                $("#jianpin_three").show();
                break;
              case 4:
                $("#jianpin_kong").show();
                break;
            }
          }, 900);
        }, 3000);

        //取消动画
        setTimeout(function() {
          $(".zjdl")
            .addClass("none")
            .removeClass("dila_Y");
          $(".wdjifen").html(score);
          $(".zjdl")
            .children("span")
            .removeAttr("class");
          flag = true;
        }, 3500);
      }

      $(".close").click(function() {
        console.log(111)
        $(".zonj_zezc").fadeOut();
      });
    });
  }
};
</script>

<style scoped>
* {
  padding: 0rem;
  margin: 0rem;
  font-family: "微软雅黑";
  font-size: 100%;
  font-style: normal;
}
dd,
dl,
dt,
em,
i,
p,
textarea,
a,
div {
  padding: 0rem;
  margin: 0rem;
}
a {
  text-decoration: none;
}
img {

  border: 0rem;
}
ul,
li {
  padding: 0rem;
  margin: 0rem;
  list-style: none;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
body {
  margin: 0rem;
  padding: 0rem;
  color: #ffc476;
  background: #000;
  color: #000000;
}
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
.none {
  display: none;
}

/*扭蛋机*/
.niu_danji {
  width: 100%;
  height: 10.39rem;
  margin: 0rem auto;
  overflow: hidden;
  position: relative;
  top: 2.8rem;
}

.niu_danji .game_qu {
  /* background: url(../images/game_ndj.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/game_ndj.png") no-repeat
    center/cover;
  width: 5.53rem;
  height: 7.67rem;
  left: 0.47rem;
  top: 0.74rem;
  position: absolute;
  z-index: 3;
}
.niu_danji .game_go {
  box-sizing: border-box;
  width: 1.34rem;
  height: 1.34rem;
  position: absolute;
  left: 2.1rem;
  bottom: 2.25rem;
  /* background: url(../images/an_go.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/an_go.png") no-repeat center/cover;
  font-size: 0.18rem;
  color: #fff;
  line-height: 0.2rem;
  text-align: center;
  padding-top: 0.9rem;
  cursor: pointer;
}

.niu_danji .wdjifen {
  font-size: 0.2rem;
  color: #e00b37;
  width: 1.28rem;
  height: 0.35rem;
  line-height: 0.35rem;
  position: absolute;
  left: 2.06rem;
  bottom: 1.2rem;
  text-align: center;
}

.niu_danji .an_jfgr {
  width: 100%;
  text-align: center;
  padding-top: 0.23rem;
  position: absolute;
  left: 0rem;
  bottom: 0.6rem;
}
.niu_danji .an_jfgr img {
  margin: 0rem 0.07rem;
}

.niu_danji .dan_gund {
  width: 5rem;
  height: 4.47rem;
  position: absolute;
  left: 0.68rem;
  top: 0.8rem;
  z-index: 1;
  -webkit-border-radius: 2.4rem 2.4rem 0rem 0rem;
  -moz-border-radius: 2.4rem 2.4rem 0rem 0rem;
  border-radius: 2.4rem 2.4rem 0rem 0rem;
  overflow: hidden;
}

.niu_danji .dan_gund span {
  width: 0.9rem;
  height: 0.9rem;
}

/*中奖*/
.zonj_zezc {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.zonj_zezc .jpzs {
  width: 4.5rem;
  height: 2.86rem;
  position: relative;
  -webkit-border-radius: 0.1rem;
  -moz-border-radius: 0.1rem;
  border-radius: 0.1rem;
  background: #fff;
  margin: 3rem auto 0rem auto;
  position: relative;
}
.zonj_zezc .jpzs em {
  height: 0.6rem;
  width: 0.6rem;
  /* background: url("../images/close.png") no-repeat center / cover; */
  background: url("../assets/truntable copy/close.png") no-repeat center / cover;
  position: absolute;
  right: 0rem;
  top: -1rem;
  cursor: pointer;
}

.zonj_zezc .jpzs h2 {
  font-size: 0.36rem;
  color: #ff1a4b;
  text-align: center;
  line-height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.86rem;
}

.qiu_1 {
  position: absolute;
  left: 0.55rem;
  top: 2.72rem;
}
.qiu_1:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/canpin_4.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/canpin_4.png") no-repeat
    center/cover;
  animation: zhuan 1s linear forwards;
  -webkit-animation: zhuan 1s linear forwards;
}
.qiu_2 {
  position: absolute;
  left: 0.03rem;
  top: 2rem;
}
.qiu_2:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/canpin_3.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/canpin_3.png") no-repeat
    center/cover;
  animation: zhuan 1s linear forwards;
  -webkit-animation: zhuan 1s linear forwards;
}
.qiu_3 {
  position: absolute;
  left: 0.1rem;
  top: 3.48rem;
}
.qiu_3:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/canpin_1.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/canpin_1.png") no-repeat
    center/cover;
  animation: zhuan 1s linear forwards;
  -webkit-animation: zhuan 1s linear forwards;
}

.qiu_4 {
  position: absolute;
  left: 1.3rem;
  top: 2.27rem;
}
.qiu_4:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/canpin_2.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/canpin_2.png") no-repeat
    center/cover;
  animation: zhuan 1s linear forwards;
  -webkit-animation: zhuan 1s linear forwards;
}
.qiu_5 {
  position: absolute;
  left: 1.74rem;
  top: 3.05rem;
}
.qiu_5:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/canpin_4.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/canpin_4.png") no-repeat
    center/cover;
  animation: zhuan 1s linear forwards;
  -webkit-animation: zhuan 1s linear forwards;
}
.qiu_6 {
  position: absolute;
  left: 1rem;
  top: 3.48rem;
}
.qiu_6:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/canpin_3.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/canpin_3.png") no-repeat
    center/cover;
  animation: zhuan 1s linear forwards;
  -webkit-animation: zhuan 1s linear forwards;
}

.qiu_7 {
  position: absolute;
  left: 2.16rem;
  top: 2.29rem;
}
.qiu_7:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/canpin_1.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/canpin_1.png") no-repeat
    center/cover;
  animation: zhuan 1s linear forwards;
  -webkit-animation: zhuan 1s linear forwards;
}
.qiu_8 {
  position: absolute;
  left: 2.65rem;
  top: 3.06rem;
}
.qiu_8:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/canpin_2.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/canpin_2.png") no-repeat
    center/cover;
  animation: zhuan 1s linear forwards;
  -webkit-animation: zhuan 1s linear forwards;
}

.qiu_9 {
  position: absolute;
  left: 4.1rem;
  top: 2.9rem;
}
.qiu_9:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/canpin_3.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/canpin_3.png") no-repeat
    center/cover;
  animation: zhuan 1s linear forwards;
  -webkit-animation: zhuan 1s linear forwards;
}
.qiu_10 {
  position: absolute;
  left: 3.48rem;
  top: 3.48rem;
}
.qiu_10:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/canpin_1.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/canpin_1.png") no-repeat
    center/cover;
  animation: zhuan 1s linear forwards;
  -webkit-animation: zhuan 1s linear forwards;
}
.qiu_11 {
  position: absolute;
  left: 3.33rem;
  top: 2.48rem;
}
.qiu_11:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/canpin_4.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/canpin_4.png") no-repeat
    center/cover;
  animation: zhuan 1s linear forwards;
  -webkit-animation: zhuan 1s linear forwards;
}

/*掉落动画*/
.diaol_1 {
  animation: dialuodn 1s linear 0.9s backwards;
  -webkit-animation: dialuodn 1s linear 0.9s backwards;
}
.diaol_1:after {
  animation-delay: 0.8s;
  -webkit-animation-delay: 0.8s;
}
.diaol_2 {
  animation: dialuodn 1s linear 0.6s backwards;
  -webkit-animation: dialuodn 1s linear 0.6s backwards;
}
.diaol_2:after {
  animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
}
.diaol_3 {
  animation: dialuodn 1s linear backwards;
  -webkit-animation: dialuodn 1s linear backwards;
}

.diaol_4 {
  animation: dialuodn 1s linear 1.1s backwards;
  -webkit-animation: dialuodn 1s linear 1.1s backwards;
}
.diaol_4:after {
  animation-delay: 1s;
  -webkit-animation-delay: 1s;
}
.diaol_5 {
  animation: dialuodn 1s linear 0.8s backwards;
  -webkit-animation: dialuodn 1s linear 0.8s backwards;
}
.diaol_5:after {
  animation-delay: 0.7s;
  -webkit-animation-delay: 0.7s;
}
.diaol_6 {
  animation: dialuodn 1s linear 0.4s backwards;
  -webkit-animation: dialuodn 1s linear 0.4s backwards;
}
.diaol_6:after {
  animation-delay: 0.3s;
  -webkit-animation-delay: 0.3s;
}

.diaol_7 {
  animation: dialuodn 1s linear 0.9s backwards;
  -webkit-animation: dialuodn 1s linear 0.9s backwards;
}
.diaol_7:after {
  animation-delay: 0.8s;
  -webkit-animation-delay: 0.8s;
}
.diaol_8 {
  animation: dialuodn 1s linear 0.6s backwards;
  -webkit-animation: dialuodn 1s linear 0.6s backwards;
}
.diaol_8:after {
  animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
}

.diaol_9 {
  animation: dialuodn 1s linear 1.1s backwards;
  -webkit-animation: dialuodn 1s linear 1.1s backwards;
}
.diaol_9:after {
  animation-delay: 1s;
  -webkit-animation-delay: 1s;
}
.diaol_10 {
  animation: dialuodn 1s linear 0.2s backwards;
  -webkit-animation: dialuodn 1s linear 0.2s backwards;
}

.diaol_11 {
  animation: dialuodn 1s linear 1.4s backwards;
  -webkit-animation: dialuodn 1s linear 1.4s backwards;
}
.diaol_11:after {
  animation-delay: 1.3s;
  -webkit-animation-delay: 1.3s;
}

.niu_danji .zjdl {
  width: 1.1rem;
  height: 0.9rem;
  padding: 0.32rem 0rem 0rem 0.2rem;
  position: absolute;
  left: 2.53rem;
  top: 7.15rem;
  z-index: 2;
}
.niu_danji .medon {
  width: 1.36rem;
  height: 1.38rem;
  position: absolute;
  left: 2.48rem;
  top: 7.21rem;
  z-index: 1;
}

.niu_danji .medon img {
  width: 1.36rem;
  height: 1.38rem;
}

.niu_danji .dila_Y {
  width: 1.1rem;
  height: 0.9rem;
  animation: cujpin 0.7s ease-out forwards;
  -webkit-animation: cujpin 0.7s ease-out forwards;
}
.niu_danji .diaL_one {
  width: 0.9rem;
  height: 0.9rem;
  position: relative;
}
.niu_danji .diaL_one:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/zj_1.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/zj_1.png") no-repeat center/cover;
  animation: fanda 0.7s ease-out forwards;
  -webkit-animation: fanda 0.7s ease-out forwards;
}

.niu_danji .diaL_two {
  width: 0.9rem;
  height: 0.9rem;
  position: relative;
}
.niu_danji .diaL_two:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/zj_2.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/zj_2.png") no-repeat center/cover;
  animation: fanda 0.7s ease-out forwards;
  -webkit-animation: fanda 0.7s ease-out forwards;
}

.niu_danji .diaL_three {
  width: 0.9rem;
  height: 0.9rem;
  position: relative;
}
.niu_danji .diaL_three:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/zj_3.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/zj_3.png") no-repeat center/cover;
  animation: fanda 0.7s ease-out forwards;
  -webkit-animation: fanda 0.7s ease-out forwards;
}

.niu_danji .diaL_four {
  width: 0.9rem;
  height: 0.9rem;
  position: relative;
}
.niu_danji .diaL_four:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0.9rem;
  height: 0.9rem;
  display: block;
  /* background: url(../images/zj_4.png) no-repeat center/cover; */
  background: url("../assets/truntable copy/zj_4.png") no-repeat center/cover;
  animation: fanda 0.7s ease-out forwards;
  -webkit-animation: fanda 0.7s ease-out forwards;
}

@-webkit-keyframes cujpin {
  0% {
    -webkit-transform: translateY(-1rem);
  }
  100% {
    -webkit-transform: translateY(0);
  }
}
@keyframes cujpin {
  0% {
    transform: translateY(-1rem);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fanda {
  0% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes fanda {
  0% {
    -webkit-transform: scale(0.7);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
.tc_anima {
  animation: title1 0.3s linear;
  -webkit-animation: title1 0.3s linear;
}
@keyframes title1 {
  from {
    opacity: 0;
    transform: scale(0, 0);
  }
  to {
    opacity: 1;
    transform: scale(1, 1);
  }
}
@-webkit-keyframes title1 {
  from {
    opacity: 0;
    -webkit-transform: scale(0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1, 1);
  }
}

.wieyi_1 {
  animation: around1 1.5s linear infinite;
  -webkit-animation: around1 1.5s linear infinite;
}

.wieyi_2 {
  animation: around2 1.5s linear infinite;
  -webkit-animation: around2 1.5s linear infinite;
}

.wieyi_3 {
  animation: around3 1.5s linear infinite;
  -webkit-animation: around3 1.5s linear infinite;
}

.wieyi_4 {
  animation: around4 1.5s linear infinite;
  -webkit-animation: around4 1.5s linear infinite;
}
.wieyi_5 {
  animation: around5 1.5s linear infinite;
  -webkit-animation: around5 1.5s linear infinite;
}

.wieyi_6 {
  animation: around6 1.5s linear infinite;
  -webkit-animation: around6 1.5s linear infinite;
}

.wieyi_7 {
  animation: around7 1.5s linear infinite;
  -webkit-animation: around7 1.5s linear infinite;
}
.wieyi_8 {
  animation: around8 1.5s linear infinite;
  -webkit-animation: around8 1.5s linear infinite;
}

.wieyi_9 {
  animation: around9 1.5s linear infinite;
  -webkit-animation: around9 1.5s linear infinite;
}
.wieyi_10 {
  animation: around10 1.5s linear infinite;
  -webkit-animation: around10 1.5s linear infinite;
}
.wieyi_11 {
  animation: around11 1.5s linear infinite;
  -webkit-animation: around11 1.5s linear infinite;
}

.zuadon_dh {
  animation: around 2s linear backwards;
  -webkit-animation: around 2s linear backwards;
}

@keyframes dialuodn {
  0% {
    transform: translateY(-200%);
    opacity: 0;
  }
  5% {
    transform: translateY(-200%);
  }
  15% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-100%);
  }
  40% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-60%);
  }
  70% {
    transform: translateY(0%);
  }
  80% {
    transform: translateY(-30%);
  }
  90% {
    transform: translateY(0%);
  }
  95% {
    transform: translateY(-14%);
  }
  97% {
    transform: translateY(0%);
  }
  99% {
    transform: translateY(-6%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes dialuodn {
  0% {
    -webkit-transform: translateY(-200%);
    opacity: 0;
  }
  5% {
    -webkit-transform: translateY(-200%);
  }
  15% {
    -webkit-transform: translateY(0);
  }
  30% {
    -webkit-transform: translateY(-100%);
  }
  40% {
    -webkit-transform: translateY(0%);
  }
  50% {
    -webkit-transform: translateY(-60%);
  }
  70% {
    -webkit-transform: translateY(0%);
  }
  80% {
    -webkit-transform: translateY(-30%);
  }
  90% {
    -webkit-transform: translateY(0%);
  }
  95% {
    -webkit-transform: translateY(-14%);
  }
  97% {
    -webkit-transform: translateY(0%);
  }
  99% {
    -webkit-transform: translateY(-6%);
  }
  100% {
    -webkit-transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes zhuan {
  0% {
    -webkit-transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes zhuan {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes around1 {
  0% {
    -webkit-transform: translate(0rem, 0rem);
  }
  20% {
    -webkit-transform: translate(3rem, 2.3rem);
  }
  40% {
    -webkit-transform: translate(2rem, -1rem);
  }
  60% {
    -webkit-transform: translate(0.5rem, 2.3rem);
  }
  80% {
    -webkit-transform: translate(3rem, -0.5rem);
  }
  100% {
    -webkit-transform: translate(2rem, 2.4rem);
  }
}
@keyframes around1 {
  0% {
    transform: translate(0rem, 0rem);
  }
  20% {
    transform: translate(3rem, 2.3rem);
  }
  40% {
    transform: translate(2rem, -1rem);
  }
  60% {
    transform: translate(0.5rem, 2.3rem);
  }
  80% {
    transform: translate(3rem, -0.5rem);
  }
  100% {
    transform: translate(2rem, 2.4rem);
  }
}

@-webkit-keyframes around2 {
  0% {
    -webkit-transform: translate(0rem, 0rem);
  }
  10% {
    -webkit-transform: translate(3rem, -1.2rem);
  }
  30% {
    -webkit-transform: translate(2.5rem, 1.3rem);
  }
  50% {
    -webkit-transform: translate(-0.5rem, -1.2rem);
  }
  80% {
    -webkit-transform: translate(0rem, 1.4rem);
  }
  100% {
    -webkit-transform: translate(3rem, -1.8rem);
  }
}
@keyframes around2 {
  0% {
    transform: translate(0rem, 0rem);
  }
  10% {
    transform: translate(3rem, -1.2rem);
  }
  30% {
    transform: translate(2.5rem, 1.3rem);
  }
  50% {
    transform: translate(-0.5rem, -1.2rem);
  }
  80% {
    transform: translate(0rem, 1.4rem);
  }
  100% {
    transform: translate(3rem, -1.8rem);
  }
}

@-webkit-keyframes around3 {
  0% {
    -webkit-transform: translate(0rem, 0rem);
  }
  25% {
    -webkit-transform: translate(0.7rem, -2.9rem);
  }
  50% {
    -webkit-transform: translate(3.2rem, 0rem);
  }
  80% {
    -webkit-transform: translate(-0.2rem, -2.9rem);
  }
  100% {
    -webkit-transform: translate(2.9rem, 0rem);
  }
}

@keyframes around3 {
  0% {
    transform: translate(0rem, 0rem);
  }
  25% {
    transform: translate(0.7rem, -2.9rem);
  }
  50% {
    transform: translate(3.2rem, 0rem);
  }
  80% {
    transform: translate(-0.2rem, -2.9rem);
  }
  100% {
    transform: translate(2.9rem, 0rem);
  }
}

@-webkit-keyframes around4 {
  0% {
    -webkit-transform: translate(0rem, 0rem);
  }
  12% {
    -webkit-transform: translate(0.5rem, 2.5rem);
  }
  30% {
    -webkit-transform: translate(-1.5rem, -0.3rem);
  }
  60% {
    -webkit-transform: translate(-1.4rem, 2.6rem);
  }
  80% {
    -webkit-transform: translate(-0.1rem, -0.3rem);
  }
  100% {
    -webkit-transform: translate(-0.2rem, 2.6rem);
  }
}
@keyframes around4 {
  0% {
    transform: translate(0rem, 0rem);
  }
  12% {
    transform: translate(0.5rem, 2.5rem);
  }
  30% {
    transform: translate(-1.5rem, -0.3rem);
  }
  60% {
    transform: translate(-1.4rem, 2.6rem);
  }
  80% {
    transform: translate(-0.1rem, -0.3rem);
  }
  100% {
    transform: translate(-0.2rem, 2.6rem);
  }
}

@-webkit-keyframes around5 {
  0% {
    -webkit-transform: translate(0rem, 0rem);
  }
  22% {
    -webkit-transform: translate(-0.5rem, -1.7rem);
  }
  46% {
    -webkit-transform: translate(1.5rem, 1.45rem);
  }
  80% {
    -webkit-transform: translate(2rem, -1.15rem);
  }
  100% {
    -webkit-transform: translate(-1rem, 1.45rem);
  }
}

@keyframes around5 {
  0% {
    transform: translate(0rem, 0rem);
  }
  22% {
    transform: translate(-0.5rem, -1.7rem);
  }
  46% {
    transform: translate(1.5rem, 1.45rem);
  }
  80% {
    transform: translate(2rem, -1.15rem);
  }
  100% {
    transform: translate(-1rem, 1.45rem);
  }
}

@-webkit-keyframes around6 {
  0% {
    -webkit-transform: translate(0rem, 0rem);
  }
  15% {
    -webkit-transform: translate(2.6rem, 0.4rem);
  }
  30% {
    -webkit-transform: translate(-0.8rem, -2.6rem);
  }
  45% {
    -webkit-transform: translate(-0.4rem, 0.4rem);
  }
  60% {
    -webkit-transform: translate(1rem, -2.9rem);
  }
  75% {
    -webkit-transform: translate(-0.8rem, -2.8rem);
  }
  100% {
    -webkit-transform: translate(0.1rem, 0.4rem);
  }
}

@keyframes around6 {
  0% {
    transform: translate(0rem, 0rem);
  }
  15% {
    transform: translate(2.6rem, 0.4rem);
  }
  30% {
    transform: translate(-0.8rem, -2.6rem);
  }
  45% {
    transform: translate(-0.4rem, 0.4rem);
  }
  60% {
    transform: translate(1rem, -2.9rem);
  }
  75% {
    transform: translate(-0.8rem, -2.8rem);
  }
  100% {
    transform: translate(0.1rem, 0.4rem);
  }
}

@-webkit-keyframes around7 {
  0% {
    -webkit-transform: translate(0rem, 0rem);
  }
  20% {
    -webkit-transform: translate(-0.6rem, -1.7rem);
  }
  40% {
    -webkit-transform: translate(0.9rem, 1.6rem);
  }
  60% {
    -webkit-transform: translate(-2.2rem, -1.4rem);
  }
  80% {
    -webkit-transform: translate(1.6rem, -0.6rem);
  }
  100% {
    -webkit-transform: translate(-1rem, -1rem);
  }
}

@keyframes around7 {
  0% {
    transform: translate(0rem, 0rem);
  }
  20% {
    transform: translate(-0.6rem, -1.7rem);
  }
  40% {
    transform: translate(0.9rem, 1.6rem);
  }
  60% {
    transform: translate(-2.2rem, -1.4rem);
  }
  80% {
    transform: translate(1.6rem, -0.6rem);
  }
  100% {
    transform: translate(-1rem, -1rem);
  }
}

@-webkit-keyframes around8 {
  0% {
    -webkit-transform: translate(0rem, 0rem);
  }
  20% {
    -webkit-transform: translate(1.4rem, -1.2rem);
  }
  40% {
    -webkit-transform: translate(-1.4rem, 0.4rem);
  }
  60% {
    -webkit-transform: translate(-1.8rem, -2.4rem);
  }
  80% {
    -webkit-transform: translate(1rem, 0.5rem);
  }
  100% {
    -webkit-transform: translate(-1.8rem, -2.2rem);
  }
}
@keyframes around8 {
  0% {
    transform: translate(0rem, 0rem);
  }
  20% {
    transform: translate(1.4rem, -1.2rem);
  }
  40% {
    transform: translate(-1.4rem, 0.4rem);
  }
  60% {
    transform: translate(-1.8rem, -2.4rem);
  }
  80% {
    transform: translate(1rem, 0.5rem);
  }
  100% {
    transform: translate(-1.8rem, -2.2rem);
  }
}

@-webkit-keyframes around9 {
  0% {
    -webkit-transform: translate(0rem, 0rem);
  }
  30% {
    -webkit-transform: translate(-3rem, -1.8rem);
  }
  60% {
    -webkit-transform: translate(-3.5rem, 1.2rem);
  }
  80% {
    -webkit-transform: translate(-1rem, -2rem);
  }
  100% {
    -webkit-transform: translate(-2rem, 1rem);
  }
}

@keyframes around9 {
  0% {
    transform: translate(0rem, 0rem);
  }
  30% {
    transform: translate(-3rem, -1.8rem);
  }
  60% {
    transform: translate(-3.5rem, 1.2rem);
  }
  80% {
    transform: translate(-1rem, -2rem);
  }
  100% {
    transform: translate(-2rem, 1rem);
  }
}

@-webkit-keyframes around10 {
  0% {
    -webkit-transform: translate(0rem, 0rem);
  }
  15% {
    -webkit-transform: translate(-3rem, -2.7rem);
  }
  30% {
    -webkit-transform: translate(0.2rem, -2.2rem);
  }
  50% {
    -webkit-transform: translate(-3.5rem, 0.1rem);
  }
  75% {
    -webkit-transform: translate(0rem, -1.5rem);
  }
  100% {
    -webkit-transform: translate(-3rem, -3rem);
  }
}

@keyframes around10 {
  0% {
    transform: translate(0rem, 0rem);
  }
  15% {
    transform: translate(-3rem, -2.7rem);
  }
  30% {
    transform: translate(0.2rem, -2.2rem);
  }
  50% {
    transform: translate(-3.5rem, 0.1rem);
  }
  75% {
    transform: translate(0rem, -1.5rem);
  }
  100% {
    transform: translate(-3rem, -3rem);
  }
}

@-webkit-keyframes around11 {
  0% {
    -webkit-transform: translate(0rem, 0rem);
  }
  32% {
    -webkit-transform: translate(-2.7rem, -0.7rem);
  }
  60% {
    -webkit-transform: translate(-3.2rem, 2.2rem);
  }
  80% {
    -webkit-transform: translate(0.1rem, -0.1rem);
  }
  100% {
    -webkit-transform: translate(-2.6rem, 2.2rem);
  }
}

@keyframes around11 {
  0% {
    transform: translate(0rem, 0rem);
  }
  32% {
    transform: translate(-2.7rem, -0.7rem);
  }
  60% {
    transform: translate(-3.2rem, 2.2rem);
  }
  80% {
    transform: translate(0.1rem, -0.1rem);
  }
  100% {
    transform: translate(-2.6rem, 2.2rem);
  }
}
</style>