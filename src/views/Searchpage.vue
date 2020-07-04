<template>
  <div class="searchpage">
    <form action="/">
      <van-search placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
    </form>

    <div>
      <div class="hot">热门搜索</div>
      <ul class="ullist">
        <li>山地自行车</li>
        <li>学生台灯</li>
        <li>电子手表</li>
        <li>iPhoneX</li>
        <li>nike空军</li>
      </ul>
    </div>

    <div>
      <div class="hot"><span>历史搜索</span> <span class="fr deleteicon iconfont icon-lajitong"></span></div>
      <ul class="ullist">
        <li>山地自行车</li>
        <li>学生台灯</li>
        <li>电子手表</li>
        <li>iPhoneX</li>
        <li>nike空军</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch() {},
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.searchpage {
.fr {
    float: right;
}

  .ullist {
    margin: 20px 0 10px;
    padding-left: 20px;
    overflow: hidden;

    li {
      float: left;
      padding: 6px 8px;
      background-color: #f7f8fa;
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }

  .hot {
    padding: 0 20px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.53);

    .deleteicon {
        font-size: 20px;
    }
  }
}
</style>