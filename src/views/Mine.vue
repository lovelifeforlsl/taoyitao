<template>
  <div class="mine">
    <TabBar />

    <div class="mine-nav">
      <div class="avator">
        <img
          src="https://wwc.alicdn.com/avatar/getAvatar.do?userNick=&width=50&height=50&type=sns&_input_charset=UTF-8"
          alt
        />
      </div>
      <div class="username">{{logininfo.islogin?logininfo.nickname:'账号未登录'}}</div>
      <div class="operate">
        <div v-if="!logininfo.islogin">
          <div class="btn fr" @click="gotologin">登录</div>
        </div>
        <div v-if="!logininfo.islogin">
          <div class="btn fl" @click="gotoregister">注册</div>
        </div>
        <span class="logoutbtn" v-if="logininfo.islogin" @click="logout">退出登录</span>
      </div>
    </div>

    <ul class="mine-content">
      <li @click="gotomyshops">
        <span class="icon iconfont icon-Group-"></span>我发布的
      </li>
      <li @click="gotocollection">
        <span class="icon iconfont icon-aixin"></span>我想要的
      </li>
      <li>
        <span class="icon iconfont icon-user"></span>个人资料
      </li>
      <li>
        <span class="icon iconfont icon-qiaquan"></span>优惠券
      </li>
      <li>
        <span class="icon iconfont icon-NMStubiao-"></span>设置
      </li>
      <li @click="gotomyorder">
        <span class="icon iconfont icon-NMStubiao-" ></span>我的订单
      </li>
    </ul>
  </div>
</template>
<script>
import TabBar from "../component/TabBar";
export default {
  props: ["nickname"],
  data() {
    return {
      //  avator:require('../../public/icon/user.png')
      logininfo:{}
    };
  },
  components: {
    TabBar
  },
  mounted(){
     let data = localStorage.getItem("logininfo");
     data = JSON.parse(data);
     this.logininfo=data
  },
  methods: {
    gotoregister() {
      this.$router.push({ path: "/register" });
    },
    gotologin() {
      this.$router.push({ path: "/login" });
    },
    gotocollection() {
      this.$router.push({ path: "/collection" });
    },
    gotomyshops() {
      this.$router.push({ path: "/myshops" });
    },
    logout(){
      this.logininfo=[]
           let data = localStorage.getItem("logininfo");
     data = JSON.parse(data);
     data.islogin=false
     localStorage.setItem("logininfo", JSON.stringify(data));
    },
    gotomyorder(){
      console.log(111)
      this.$router.push({ path: "/myorder" });
    }
  },

};
</script>

<style lang="scss" scoped>
.fl {
  float: left;
}

.fr {
  float: right;
}

img {
  display: block;
  width: 100%;
}
.mine {
  .mine-nav {
    padding: 28px 0 16px;
    background-color: rgb(34, 118, 235);

    .avator {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
    }

    .operate {
      display: flex;
      margin-top: 10px;
      width: 100%;

      div {
        flex: 1;
        overflow: hidden;
        color: rgb(236, 228, 228);
        font-size: 15px;

        .btn {
          padding: 5px 7px;
          border: 1px solid rgb(236, 228, 228);
          margin: 10px;
        }
      }

      .logoutbtn {
        display: inline-block;
        padding: 5px 7px;
        color: white;
        border: 1px solid rgb(236, 228, 228);
        margin: 0 auto;
      }
    }

    .username {
      text-align: center;
      font-size: 15px;
      color: rgb(236, 228, 228);
      margin-top: 10px;
    }
  }

  .mine-content {
    padding: 20px 20px 10px;

    li {
      padding: 14px 0;
      border-bottom: 1px solid rgba(7, 17, 27, 0.16);
      font-size: 14px;

      .icon {
        display: inline-block;
        margin-right: 15px;
        font-size: 24px;
      }
    }
  }
}
</style>