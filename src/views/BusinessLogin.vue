<template>
  <div class="businesslogin">
    <!-- <TabBar /> -->

    <van-nav-bar title="商家登录" left-text="返回" left-arrow @click-left="onClickLeft" />

    <div class="publish-content">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />

        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
      <div class="forgetpwd">忘记密码</div>
      <van-button type="primary" size="large" color="#7232dd" @click="gotobhome">登录</van-button>

      <div class="operate">
        <div>邮箱验证码登录</div>
        <div @click="gotobusinessregister">注册成为商家</div>
      </div>
    </div>
  </div>
</template>
<script>
// import TabBar from "../component/TabBar";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {
    // TabBar
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    gotobusinessregister() {
      this.$router.push({ path: "/businessregistercheck" });
    },
    gotobhome() {

      let data = localStorage.getItem("userregisterinfo");
      data = JSON.parse(data);

      this.$toast({
        message: "正在提交登录信息...",
        forbidClick: true
      });

      for (let i = 0; i < data.length; i++) {
        if (
          data[i].username == this.username &&
          data[i].password == this.password&&data[i].isbusiness==true
        ) {
          this.$notify({
            type: "success",
            message: "查询账户成功,欢迎商家登录",
            onClose: () => {
              this.$router.push({ path: "/businesshome" });
            }
          });
          return;
        } else {
          this.$notify({
            type: "danger",
            message: "您还不是商家用户，请完成商家注册！"
          });
        }
      }

    }
  }
};
</script>

<style lang="scss">
.businesslogin {
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
}

.publish-content {
  padding: 30px 20px;

  .van-button--large {
    margin-top: 50px;
    border-radius: 6px;
    height: 45px;
    line-height: 45px;
  }

  .forgetpwd {
    text-align: right;
    font-size: 14px;
    color: rgb(88, 83, 83);
    margin-top: 20px;
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