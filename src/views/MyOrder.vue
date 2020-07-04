<template>
  <div class="myorder">
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="onClickLeft" />

    <div class="myorder-content" v-for="(ele,index) in myorderdata" :key="index">
      <div class="user">
        <div class="avator">
          <img
            src="https://wwc.alicdn.com/avatar/getAvatar.do?userNick=&width=50&height=50&type=sns&_input_charset=UTF-8"
            alt
          />
        </div>
        <span class="username">{{ele.item.username}}</span>
      </div>
      <van-card :price="ele.item.price" :desc="ele.item.detail" :title="ele.item.title" :thumb="ele.item.fileList[0].content">
        <div slot="footer" class="colorblack">
          <van-button size="mini" color="red">X{{ele.buynum}}</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myorderdata:null
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    let orderdata = localStorage.getItem("orderdata");
        let username =JSON.parse(localStorage.getItem("logininfo")).username ;
            orderdata = JSON.parse(orderdata);
            let arr=orderdata.filter((item)=>{
                   return item.username==username
            })
            this.myorderdata=arr
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

.myorder-content {
  padding: 10px 0 0px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.12);

  .user {
    overflow: hidden;
    padding: 0 10px;

    .avator {
      float: left;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
    }

    .username {
      line-height: 30px;
      font-size: 14px;
    }
  }
}


.colorblack{
  color: black
}
</style>