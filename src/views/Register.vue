<template>
  <div class="register">
    <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft" />

    <div class="register-content">
      <van-cell-group>
        <van-field center clearable label="邮箱验证" placeholder="请输入邮箱验证码">
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
        <van-field v-model="userregisterinfo.username" placeholder="请输入用户名" />
        <van-field v-model="userregisterinfo.nickname" placeholder="自定义您的昵称" />
        <van-field v-model="userregisterinfo.password" placeholder="请输入密码" type="password" />
      </van-cell-group>

      <van-button type="primary" size="large" color="#2276EB" @click="register">注册</van-button>

      <div class="operate">
        <div @click="gotologin">登录</div>
        <div @click="gotobusinessregister">注册成为商家</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userregisterinfo: {
        username: "",
        nickname: "",
        password: null,
        isbusiness: false
      }
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    gotologin() {
      this.$router.push({ path: "/login" });
    },
    gotobusinessregister() {
      this.$router.push({ path: "/businessregistercheck" });
    },
    register() {
      console.log(111);

      this.$toast({
        message: "正在提交注册信息...",
        forbidClick: true
      });

      this.$notify({
        type: "success",
        message: "注册成功，将调到登录页面",
        onClose: () => {
          let data = localStorage.getItem("userregisterinfo");
          if (data) {
            console.log("data==>", data);
            // console.log(this.userregisterinfo)
            data = JSON.parse(data);
            data.push(this.userregisterinfo);
            console.log("data=>", data);
            localStorage.setItem("userregisterinfo", JSON.stringify(data));
          } else {
            let arr = [];
            arr = [this.userregisterinfo];
            localStorage.setItem("userregisterinfo", JSON.stringify(arr));
          }
          this.$router.push({ path: "/login" });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #2276eb;

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

.register-content {
  padding: 20px 15px;

  .van-button--large {
    margin-top: 50px;
    border-radius: 6px;
    height: 45px;
    line-height: 45px;
  }

  .operate {
    display: flex;
    margin-top: 40px;

    div {
      flex: 1;
      font-size: 14px;
      color: rgb(153, 145, 145);

      &:last-child {
        text-align: right;
      }
    }
  }
}
</style>