<template>
        <div class="tapbarbox">     
      <ul>
        <li>
          <router-link tag="div" to="/" exact>
            <div class="iconfont icon-zhuye menu"></div>
            <span>主页</span>
          </router-link>
        </li>
        <li>
          <router-link tag="div" to="/Businesslogin" exact>
            <div class="iconfont icon-jia menu"></div>
            <span>发布</span>
          </router-link>
        </li>
        <li>
          <router-link tag="div" to="/mine" exact>
            <div class="iconfont icon-yonghu menu"></div>
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<style lang="scss" scoped>
.tapbarbox {
  width: 100%;
  height: 55px;
  background-color: white;
  position: fixed;
  bottom: 0px;
  left: 0px;
  font-size: 0.36rem;
  text-align: center;
  z-index: 10;
}

.tapbarbox > ul {
  display: flex;
  height: 100%;

  li {
    flex: 1;
    padding-top: 0.2rem;
  }

  .menu {
    position: relative;
    font-size: 20px;
  }
}
</style>