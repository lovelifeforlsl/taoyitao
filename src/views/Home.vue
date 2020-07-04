<template>
  <div class="home">
    <!-- <van-tabbar v-model="active" >
      <van-tabbar-item icon="home-o" @click="viewchange(1)">主页</van-tabbar-item>
      <van-tabbar-item icon="setting-o">发布</van-tabbar-item>
            <van-tabbar-item >
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
      </van-tabbar-item>
    </van-tabbar>-->
    <TabBar></TabBar>

    <div class="nav">
      <div class="nav-menu iconfont icon-menu"></div>
      <div class="nav-login">登录</div>
      <div class="searchbox">
        <input class="nav-search" type="text" placeholder="代步自行车" @click="gotosearchpage" />
      </div>
    </div>

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

    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="(ele,index) in menulist" :key="index" @click="gotocategory(ele.title,ele.id)">
        <div class="list-img">
          <van-image :src="ele.url" />
        </div>
        <div class="list-title">{{ele.title}}</div>
      </van-grid-item>
    </van-grid>

    <Space></Space>

    <van-tabs v-model="activeName" color="rgb(98, 62, 216)">
      <van-tab title="推荐" name="a">

        <Shops v-for="(item,index) in shopdata" :key="index" :shopdata="{item}"></Shops>
      </van-tab>
      <van-tab title="最新" name="b">
        <Shops v-for="(item,index) in shopdata" :key="index" :shopdata="{item}"></Shops>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Space from "../component/Space";
import Shops from "../component/Shops";
import TabBar from "../component/TabBar";
export default {
  data() {
    return {
      currentindex: 1,
      value: "",
      activeName: "a",
      menulist: [
        {
          url: require("../../public/icon/1.png"),
          title: "手机",
          id: 1
        },
        {
          url: require("../../public/icon/2.png"),
          title: "电脑",
          id: 2
        },
        {
          url: require("../../public/icon/3.png"),
          title: "电子",
          id: 3
        },
        {
          url: require("../../public/icon/4.png"),
          title: "书籍",
          id: 4
        },
        {
          url: require("../../public/icon/5.png"),
          title: "配件",
          id: 5
        },
        {
          url: require("../../public/icon/6.png"),
          title: "代步",
          id: 6
        },
        {
          url: require("../../public/icon/7.png"),
          title: "娱乐",
          id: 7
        },
        {
          url: require("../../public/icon/8.png"),
          title: "运动",
          id: 8
        }
      ],
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      },
      shopdata: []
    };
  },
  methods: {
    //跳转到分类页面
    gotocategory(title,id) {
      this.$router.push({ path: "/category", query: {title:title, id: id } });
    },



    //跳转到搜索页面
    gotosearchpage() {
      this.$router.push({ path: "/searchpage" });
    }
  },
  components: {
    Space,
    Shops,
    TabBar
  },
  created() {
    let shopinfo = localStorage.getItem("shopinfo");
    if (shopinfo) {
      shopinfo = JSON.parse(shopinfo);
      this.shopdata = shopinfo;
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.auto-img {
  display: block;
  width: 100%;
}

.home {
  padding-bottom: 55px;
}

.nav {
  padding: 0 0.2rem;
  background-color: rgb(98, 62, 216);
  color: white;

  div {
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }

  .nav-menu {
    float: left;
    font-size: 18px;
  }

  .nav-login {
    float: right;
  }

  .searchbox {
    width: auto;
    overflow: hidden;

    .nav-search {
      width: calc(90% - 10px);
      height: 29px;
      margin-top: 7px;
      color: black;
      padding-left: 10px;
      //    margin-left: 10%;
    }
  }
}

.list-img {
  width: 50px;
  height: 50px;
}

.list-title {
  font-size: 14px;
  height: 25px;
  line-height: 25px;
}
</style>