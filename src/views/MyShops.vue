<template>
  <div class="collection">
    <van-nav-bar title="我发布的" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-card v-for="(item,index) in shopsdata" :key="index"  :price="item.price" :desc="item.detail" :title="item.title" :thumb="item.fileList[0].content">
      <div slot="tags">库存量：{{item.num}}</div>
      <div slot="footer">
        <van-button size="mini" color="blue" @click="gotoedit(item.id)">编辑</van-button>
        <van-button size="mini" color="red" @click="deleteshop(item.id)">删除</van-button>
      </div>
    </van-card>

    <!-- <div class="addshops">添加新的商品</div> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      shopsdata:[]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    gotoedit(id){
      this.$router.push({ path: "/shopsmanage", query: { id: id } });
    },
    deleteshop(id){
        let shopinfo = localStorage.getItem("shopinfo");
        shopinfo = JSON.parse(shopinfo);
        let arr = shopinfo.filter((item)=>item.id!=id)
        localStorage.setItem("shopinfo", JSON.stringify(arr));

        let username=JSON.parse(localStorage.getItem("logininfo")).username;
        this.shopsdata = arr.filter((item)=>item.username==username)
    }
  },
  mounted(){
    let shopinfo = localStorage.getItem("shopinfo");
    let username =JSON.parse(localStorage.getItem("logininfo")).username ;
    shopinfo = JSON.parse(shopinfo);
    let arr=shopinfo.filter(item=>item.username==username)
      this.shopsdata = arr;
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