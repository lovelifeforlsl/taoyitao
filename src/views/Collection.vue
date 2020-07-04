<template>
  <div class="collection">
    <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft" />

    <div class="collection-content">
      <div class="user">
        <div class="avator">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3890721751,3900948737&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <span class="username">用户8804</span>
      </div>
      <van-card price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="footer">
          <van-button size="mini" color="red">取消收藏</van-button>
        </div>
      </van-card>
    </div>
    <div class="collection-content">
      <div class="user">
        <div class="avator">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3890721751,3900948737&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <span class="username">用户8804</span>
      </div>
      <van-card price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="footer">
          <van-button size="mini" color="red">取消收藏</van-button>
        </div>
      </van-card>
    </div>

    <van-submit-bar :price="30250" button-text="提交订单">
      <van-checkbox>全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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

.collection-content {
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
</style>