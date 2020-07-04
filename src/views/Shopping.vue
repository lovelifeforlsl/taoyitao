<template>
  <div class="shopping">
    <div class="shopping-nav">
      <van-nav-bar
        :title="shopdata.item.title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        fixed
      />
    </div>

    <div class="tabbar">
      <div class="like">
        <span class="iconfont icon-aixin icon"></span>
        加入收藏
      </div>
      <div class="buy-btn" @click="buyshop">买买买</div>
    </div>

    <div class="main">
      <div>
        <div class="avator">
          <img
            src="https://wwc.alicdn.com/avatar/getAvatar.do?userNick=&width=50&height=50&type=sns&_input_charset=UTF-8"
            alt
          />
        </div>
        <span class="username">{{shopdata.item.username}}</span>
      </div>
      <div class="price">&yen;&nbsp;&nbsp;{{shopdata.item.price}}</div>
    </div>

    <div class="content">
      <div class="detail">{{shopdata.item.detail}}</div>

      <ul class="shops">
        <li v-for="(ele,index) in shopdata.item.fileList" :key="index">
          <img :src="ele.content" alt />
        </li>
      </ul>
    </div>

    <van-action-sheet v-model="show" title="标题">
      <div class="sheet">
        <div class="topcontent">
          <div class="topconent-img fl">
            <img :src="shopdata.item.fileList[0].content" alt />
          </div>
          <div class="topconent-info fl">
            <div class="sheet-price-box">
              &yen;
              <span class="sheet-price">{{shopdata.item.price}}</span>
            </div>
            <div class="lastnumber">剩余{{shopdata.item.num}}件</div>
            <div class="lastnumber">已选 默认规格：1</div>
          </div>
        </div>

        <div class="size">
          <div>规格</div>
          <div class="sizelist">
            <span class="defaultsize">默认</span>
          </div>
        </div>

        <div class="buycontrol">
          <div class="fl">购买数量</div>
          <div class="fr">
            <span class="cal">
              <span class="iconfont icon-jian" @click="delshop"></span>
            </span>
            <span class="buynum">{{buynum}}</span>
            <span class="cal">
              <span class="iconfont icon-jia1" @click="addshop"></span>
            </span>
          </div>
        </div>

        <div class="buy-btn" @click="buyshops">立即购买</div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      buynum: 1
    };
  },
  props: ["shopdata"],
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    buyshop() {
      this.show = true;
    },
    delshop() {
      this.buynum = this.buynum - 1;
    },
    addshop() {
      this.buynum = this.buynum + 1;
    },
    buyshops() {
      var self = this;
      let orderdata = localStorage.getItem("orderdata");
      let username = JSON.parse(localStorage.getItem("logininfo"))
        .username;
      if (orderdata) {
        orderdata = JSON.parse(orderdata);
        let obj=this.shopdata
        obj.buynum=this.buynum
        obj.username=username
         orderdata.push(obj)
      } else {
        orderdata = [];
        let obj=this.shopdata
        obj.buynum=this.buynum
        obj.username=username
         orderdata.push(obj)
        // orderdata.push(...this.shopdata, {
        //   username,
        //   buynum: this.buynum
        // });
        localStorage.setItem(
          "orderdata",
          JSON.stringify(orderdata)
        );
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner",
        onClose() {
          self.$toast({
            message: "提交完成...",
            forbidClick: true,
            onClose() {
              self.$notify({
                type: "success",
                message: "购买商品成功，继续去浏览宝贝吧！",
                onClose() {
                  self.$router.push({ path: "/" });
                }
              });
            }
          });
        }
      });
    }
  },
  mounted() {
    console.log("111", this.shopdata);
  }
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  width: 100%;
}
.fl {
  float: left;
}
.fr {
  float: right;
}

.tabbar {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  height: 45px;

  div {
    float: left;

    &:last-child {
      float: right;
      background-color: red;
      height: 100%;
      padding: 0 10px;
      line-height: 45px;
      color: white;
      font-size: 16px;
    }
  }

  .like {
    padding: 10px 0px 0 14px;
    font-size: 14px;
    line-height: 26px;

    .icon {
      font-size: 22px;
      display: inline-block;
      color: rgb(94, 87, 87);
      margin-right: 8px;
    }
  }
}

.shopping {
  padding: 50px 0px 30px;

  .shopping-nav {
    .user {
      float: left;
      overflow: hidden;
    }

    .uploadtime {
      float: right;
      text-align: right;
      line-height: 48px;
      font-size: 10px;
      color: rgb(160, 153, 153);
    }

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

  .main {
    padding: 10px 14px;
    overflow: hidden;
    border-bottom: 1px solid rgba(7, 17, 27, 0.18);

    div {
      float: left;
      color: red;
      font-size: 15px;
      line-height: 44px;
      font-size: 17px;
      font-weight: bold;

      &:last-child {
        float: right;
      }

      .avator {
        float: left;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
      }

      .username {
        color: black;
        font-size: 15px;
        font-weight: normal;
      }
    }
  }

  .content {
    padding: 20px 14px;

    .detail {
      font-size: 15px;
      text-align: justify;
    }

    .shops {
      padding-top: 15px;

      li {
        padding-bottom: 10px;
      }
    }
  }

  .sheet {
    padding: 15px;

    .topcontent {
      overflow: hidden;

      .topconent-img {
        width: 90px;
      }
    }

    .topconent-info {
      padding-top: 14px;
      margin-left: 20px;

      .sheet-price-box {
        color: red;
        font-size: 13px;

        .sheet-price {
          font-size: 16px;
        }
      }

      .lastnumber {
        font-size: 13px;
        color: rgba(7, 17, 27, 0.47);
        margin-top: 6px;
      }
    }

    .size {
      margin-top: 10px;
      font-size: 13px;

      .sizelist {
        margin-top: 14px;
      }

      .defaultsize {
        display: inline-block;
        padding: 7px 10px;
        background-color: #fde7ea;
        color: #ee0a24;
        border-radius: 4px;
      }
    }

    .buycontrol {
      margin-top: 20px;
      font-size: 13px;
      overflow: hidden;

      div {
        &:first-child {
          margin-top: 5px;
        }
      }

      .cal {
        padding: 4px 9px;
        font-size: 15px;
        background-color: rgba(7, 17, 27, 0.1);
        color: black;
        margin: 0 5px;
      }

      .buynum {
        display: inline-block;
        width: 28px;
        height: 28px;
        line-height: 30px;
        text-align: center;
        background-color: rgba(7, 17, 27, 0.1);
        font-size: 14px;
      }
    }

    .buy-btn {
      width: 85%;
      height: 40px;
      background-color: red;
      color: rgba(255, 255, 255, 0.881);
      text-align: center;
      line-height: 40px;
      border-radius: 6px;
      font-size: 17px;
      margin: 0 auto;
      margin-top: 30px;
    }
  }
}
</style>