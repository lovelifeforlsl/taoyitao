<template>
  <div>
    <Space></Space>
    <ul @click="gotoshopping">
      <li>
        <div class="shops-nav">
          <div class="user">
            <div class="avator">
              <img
                src="https://wwc.alicdn.com/avatar/getAvatar.do?userNick=&width=50&height=50&type=sns&_input_charset=UTF-8"
                alt
              />
            </div>
            <span class="username">{{shopdata.item.username}}</span>
          </div>
          <div class="uploadtime">发布于一个月前</div>
        </div>

        <ul class="shops-showimg">
          <li v-for="(ele,index) in shopdata.item.fileList" :key="index">
            <img
              :src="ele.content"
              alt
            />
          </li>
        </ul>

        <div class="shops-content">
          <span class="shops-content-price">&yen;{{shopdata.item.price}}</span>
          <div class="shops-content-info">
            <div>
              <span class="iconfont icon-aixin shop-info-icon"></span>
              <span>10人想要</span>
            </div>
            <div>
              <span class="iconfont icon-liulan shop-info-icon"></span>
              <span>453次浏览</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Space from "../component/Space";
export default {
  props: ["shopdata"],
  components: {
    Space
  },
  methods: {
    gotoshopping() {
     let shopdata=this.shopdata
      this.$router.push({ path: "/shopping",query:{shopdata} });
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  width: 100%;
}

.shops-nav {
  padding: 10px;
  overflow: hidden;

  .user {
    float: left;
    overflow: hidden;

    .avator {
      float: left;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
    }

    .username {
      line-height: 48px;
      font-size: 16px;
    }
  }

  .uploadtime {
    float: right;
    text-align: right;
    line-height: 48px;
    font-size: 10px;
    color: rgb(160, 153, 153);
  }
}

.shops-showimg {
  padding-left: 10px;
  overflow: hidden;

  li {
    float: left;
    width: 128px;
    margin-right: 10px;

    &:last-child {
      margin: 0;
    }
  }
}

.shops-content {
  padding: 15px 10px;
  overflow: hidden;
  font-size: 15px;

  .shops-content-price {
    font-size: 17px;
    color: red;
    font-weight: bold;
  }

  .shops-content-info {
    float: right;
    color: rgb(141, 135, 135);

    div {
      float: right;
      margin-right: 10px;

      &:first-child {
        margin: 0;
      }
    }

    .shop-info-icon {
      font-size: 19px;
      display: inline-block;
      margin-right: 4px;
      color: rgb(91, 214, 91);
    }
  }
}
</style>