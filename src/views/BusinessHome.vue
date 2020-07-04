<template>
  <div class="bhome">
    <van-nav-bar title="商家后台" />

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          class="auto-img"
          src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/93558/20/8209/139455/5e032eebE2063e27d/e28d2248c7c5c3f7.jpg!cr_1125x445_0_171!q70.jpg.dpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="auto-img"
          src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/24046/10/6380/94217/5c511b9dEcc9ba39c/7913173ae5ed0617.jpg!cr_1125x445_0_171!q70.jpg.dpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="auto-img"
          src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/102873/24/6941/196089/5df83332E52d90ff0/4496c9fb61fc4f6a.jpg!cr_1125x445_0_171!q70.jpg.dpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="auto-img"
          src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/100040/37/7870/152152/5e006952E3e9dab63/d02aaf2fdb526acf.jpg!cr_1125x445_0_171!q70.jpg.dpg"
          alt
        />
      </van-swipe-item>
    </van-swipe>

    <div class="content">
      <div class="menu">
        <van-grid :border="false" :column-num="4">
          <van-grid-item v-for="(ele,index) in menulist" :key="index">
            <div class="list-img">
              <van-image :src="ele.url" />
            </div>
            <div class="list-title">{{ele.title}}</div>
          </van-grid-item>
        </van-grid>
      </div>

      <div class="manage">
        <div @click="gotoaddmenu">
          <span class="iconfont mr-10 icon-xingxing icon"></span>商品添加
          <span class="fr iconfont icon-right icon"></span>
        </div>
        <div @click="gotomyshops">
          <span class="iconfont mr-10 icon-NMStubiao- icon"></span>商品管理
          <span class="fr iconfont icon-right icon"></span>
        </div>
      </div>
    </div>

    <div class="cancellation" @click="gotohome">退出后台</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menulist: [
        {
          url: require("../../public/bhome/huowu.png"),
          title: "待完成",
          id: 1
        },
        {
          url: require("../../public/bhome/wancheng.png"),
          title: "已完成",
          id: 2
        },
        {
          url: require("../../public/bhome/pinglun.png"),
          title: "评论",
          id: 3
        },
        {
          url: require("../../public/bhome/shouhou.png"),
          title: "售后/退款",
          id: 4
        }
      ]
    };
  },
  methods: {
    gotohome() {
      this.$router.push({ path: "/" });
    },
    gotoaddmenu(){
      this.$router.push({ path: "/addmenu" });  
    },
    gotomyshops(){
      this.$router.push({ path: "/myshops" }); 
    }
  }
};
</script>

<style lang="scss">
.van-nav-bar {
  background-color: rgb(98, 62, 216);

  .van-nav-bar__title {
    color: rgb(228, 222, 222);
  }

  .van-icon {
    color: rgb(228, 222, 222);
  }

  .van-nav-bar__text {
    color: rgb(228, 222, 222);
  }
}

.auto-img {
  width: 100%;
  display: block;
}

.mr-10 {
  margin-right: 10px;
}

.bhome {
  .fr {
    float: right;
  }

  height: 100vh;
  background-color: rgba(151, 155, 158, 0.2);

  .content {
    padding: 8px 8px 0;
  }
  .menu {
    border-bottom: 1px solid rgba(7, 17, 27, 0.12);

    .list-img {
      width: 22px;
      height: 22px;
    }

    .list-title {
      font-size: 12px;
      height: 30px;
      line-height: 30px;
    }
  }

  .manage {
    background-color: white;

    div {
      padding: 10px 20px;
      line-height: 26px;
      font-size: 13px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.08);

      .icon {
        font-size: 18px;
      }
    }
  }

  .cancellation {
    background-color: red;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 0px;
    padding: 15px 0;
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
