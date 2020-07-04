<template>
  <div>
<van-nav-bar
  :title="title"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>

        <Shops v-for="(item,index) in shopdata" :key="index" :shopdata="{item}"></Shops>
  </div>
</template>

<script>
import Shops from "../component/Shops";
export default {
  props: {
    title: String,
    id:Number
  },
  components: {
    Shops
  },
  data(){
    return{
      shopdata: []
    }
  },
    methods: {
    onClickLeft() {
            this.$router.go(-1);
    }
  },
    created() {
    let shopinfo = localStorage.getItem("shopinfo");
      shopinfo = JSON.parse(shopinfo);
      this.shopdata = shopinfo.filter(item=>item.type==this.id);
  }
};
</script>

<style lang="scss" scoped>
</style>