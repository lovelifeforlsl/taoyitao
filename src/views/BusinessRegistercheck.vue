<template>
  <div class="business-register-check">
    <van-nav-bar title="商家注册检测" left-text="返回" left-arrow @click-left="onClickLeft" />
    <h3 class="title">GZCC淘已有账号检测</h3>
    <h4 class="warnning">
      <span class="iconfont icon-warning warnningicon"></span>注意：商家账户开启前提是用户已经具有GZCC淘的账户，商家账户是在GZCC淘的账户基础上开启商家功能
    </h4>

    <div class="buttondiv">
      <van-cell-group>
        <van-field v-model="username" placeholder="账户" label="用户名" left-icon="contact" />
      </van-cell-group>

      <div class="subbutton">
        <van-button
          type="primary"
          size="large"
          color="#2276EB"
          :disabled="isdisable"
          @click="gotobusinessregister"
        >下一步</van-button>
      </div>
    </div>

    <!-- <van-toast id="van-toast"/> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isdisable: true,
      username: ""
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    gotobusinessregister() {
      this.$toast({
        message: "正在提交...",
        forbidClick: true
      });

      let data = localStorage.getItem("logininfo");
      data = JSON.parse(data);
      if (data.username == this.username) {
        this.$notify({
          type: "success",
          message: "查询账号成功，请继续完成商家注册",
          onClose: () => {
            this.$router.push({ path: "/businessregister" });
          }
        });
      } else {
        this.$notify({
          type: "danger",
          message: "账号不存在，不具有成为商家的资格",
          onClose: () => {
            this.username=null
          }
        });
      }
    }
  },
  watch: {
    username(newval) {
      if (newval.length > 0) {
        this.isdisable = false;
      } else {
        this.isdisable = true;
      }
    }
  }
};
</script>

<style lang="scss">
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

.business-register-check {
  .title {
    padding: 20px 10px;
    color: red;
    font-size: 16px;
  }

  .warnning {
    font-size: 15px;
    color: rgba(255, 0, 0, 0.616);
    padding: 0px 10px 20px;

    .warnningicon {
      color: rgba(255, 0, 0, 0.616);
      font-size: 20px;
      display: inline-block;
      margin-right: 6px;
    }
  }

  .van-cell {
    border-bottom: 1px solid rgba(7, 17, 27, 0.15);
  }

  .buttondiv {
    padding: 20px 20px 10px;

    .subbutton {
      padding: 40px 0px 10px;
    }
  }
}
</style>