<template>
  <div class="addmenu">
    <van-nav-bar title="商品编辑" left-arrow @click-left="onClickLeft" />

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>

    <van-field v-model="shop.title" label="商品名称" />
    <van-field v-model="shop.price" type="number" label="商品价格" />
    <div class="title">商品详情描述:</div>
    <textarea v-model="shop.detail" class="shopsdetail"></textarea>
    <van-field v-model="shop.num" type="digit" label="商品库存量" />

    <div class="test">
      <van-uploader v-model="fileList" multiple />
    </div>

    <div class="cancellation" @click="submit">确认修改</div>
  </div>
</template>

<script>
export default {
    props: ["id"],
  data() {
    return {
      value1: 0,
      option1: [
        { text: "商品类型", value: 0 },
        { text: "手机", value: 1 },
        { text: "电脑", value: 2 },
        { text: "电子", value: 3 },
        { text: "书籍", value: 4 },
        { text: "配件", value: 5 },
        { text: "代步", value: 6 },
        { text: "娱乐", value: 7 },
        { text: "运动", value: 8 }
      ],
      fileList: [
        // { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // { url: "https://m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg" }
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
      shop: {
        title: "",
        price: null,
        detail: "",
        num: "",
        type:null,
        id:null
      }
    };
  },
  mounted(){
    let shopinfo = localStorage.getItem("shopinfo");
    if (shopinfo) {
      shopinfo = JSON.parse(shopinfo);
      let shop  = shopinfo.filter((item)=>item.id==this.id);
      this.shop=shop[0]
      this.value1=this.shop.type
      this.fileList=this.shop.fileList
    }
      
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    submit() {
      var self = this;

      if (this.shop.price == null || this.shop.price == undefined) {
        this.$toast({
          message: "正在提交商品信息...",
          forbidClick: true,
          onClose() {
            self.$notify({
              type: "danger",
              message: "提交商品信息失败，商品价格不能为空"
            });
          }
        });
      } else if (this.fileList.length == 0) {
        this.$toast({
          message: "正在提交商品信息...",
          forbidClick: true,
          onClose() {
            self.$notify({
              type: "danger",
              message: "提交商品信息失败，商品图片不能为空"
            });
          }
        });
      } else {
        let data = this.shop;
        data.fileList = this.fileList;
        let username =JSON.parse(localStorage.getItem("logininfo")).username ;
        let shopinfo = localStorage.getItem("shopinfo");
        shopinfo = JSON.parse(shopinfo);
        data.username=username
        let arr = shopinfo.filter((item)=>item.id!=this.id)
        arr.push(data)
        localStorage.setItem("shopinfo", JSON.stringify(arr));
        this.$router.push({ path: "/myshops" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner",
        onClose() {
          self.$toast.success({
            message: "提交完成...",
            forbidClick: true,
            onClose() {
              // console.log(self.shop);
              // console.log(self.fileList)
              self.$notify({
                type: "success",
                message: "提交商品信息成功"
              });
              self.shop = {};
              self.value1 = 0;
              self.fileList = [];
            }
          });
        }
      });
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
.addmenu {
  .title {
    text-indent: 16px;
    padding: 15px 0;
    font-size: 14px;
  }
  .shopsdetail {
    resize: none;
    width: calc(80% - 20px);
    height: 100px;
    margin-left: calc(10% - 1px);
    padding: 10px;
    border-color: rgba(7, 17, 27, 0.3);
  }

  .test {
    margin-top: 20px;
    padding-left: 20px;
  }

  .cancellation {
    background-color: #07c160;
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