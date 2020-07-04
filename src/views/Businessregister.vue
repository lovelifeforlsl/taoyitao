<template>
  <div class="business-register">
    <van-nav-bar title="商家注册" left-text="返回" left-arrow @click-left="onClickLeft" />

    <div class="buttondiv">
      <h4 class="warnning">
        <span class="iconfont icon-warning warnningicon"></span>请根据以下的输入提示完善个人信息
      </h4>
      <van-cell-group>
        <van-field v-model="user.name" label="姓名" placeholder="请输入用户名" />
        <van-field v-model="user.phone" label="手机号" placeholder="请输入手机号" />
        <van-field v-model="user.idcard" label="居民身份证" placeholder="请输入您的居民身份证" />
      </van-cell-group>

      <div class="subbutton">
        <van-button type="primary" size="large" color="#2276EB" @click="registercomplete">完成注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        phone: "",
        idcard: ""
      }
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    registercomplete() {
      if (
        this.user.name.length > 0 &&
        this.user.phone.length > 0 &&
        this.user.idcard.length > 0
      ) {
        this.$notify({
          type: "success",
          message: "注册成功",
          onClose: () => {
            let data = localStorage.getItem("userregisterinfo");
            data = JSON.parse(data);

            let obj = JSON.parse(localStorage.getItem("logininfo"));
            console.log('obj==>',obj)
            for (let i = 0; i < data.length; i++) {
              if (obj.nickname == data[i].nickname) {
                console.log(data[i].isbusiness)
                data[i].isbusiness = true;
              }
            }

            console.log('data====>',data)
            localStorage.setItem(
              "userregisterinfo",
              JSON.stringify(data)
            );

            this.$router.push({ path: "/businesslogin" });
          }
        });
      } else {
        this.$notify({ type: "danger", message: "注册失败" });
      }
    }
  },
  watch: {}
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

.business-register {
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

    .tips {
      color: #e4393c;
      font-size: 15px;
      margin-bottom: 15px;
    }
  }
}
</style>