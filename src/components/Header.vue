<template>
  <header class="head">
    <div class="box">
      <router-link class="logo" to="/" placeholder="百姓餐桌">
        <img src="../assets/head/logo.png" />
      </router-link>
      <ul class="nav-box">
        <li class="nav showpc">
          <router-link to="/">首页</router-link>
        </li>
        <li class="nav">
          <router-link to="/intro">公司简介</router-link>
        </li>
        <li class="nav">
          <router-link to="/news">动态</router-link>
        </li>
        <li class="nav">
          <router-link to="/bigHealth">大健康</router-link>
        </li>
        <li class="nav">
          <router-link to="/server">服务支持</router-link>
        </li>
        <li class="nav">
          <router-link to="/contentUs">联系我们</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "head",
  props: {
    msg: String,
  },
};
</script>
<style scoped lang="less">
.head {
  height: 108px;
  width: 100%;
  background-color: #00643d;
  .box {
    width: 1205px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .logo img {
      display: block;
      width: 300px;
    }
  }
  .nav-box {
    display: flex;
    .nav {
      display: flex;
      align-items: center;
    }
    .nav a {
      color: #fff;
      margin: 0 25px;
      padding: 14px 0;
      font-size: 24px;
      text-align: center;
      text-decoration: none;
    }
    .nav {
      cursor: pointer;
      &:last-child {
        padding-right: 11px;
      }
      .router-link-active {
        color: #ffd900;
        border-bottom: 1px solid #ffd900;
      }
    }
    .active a {
      color: #ffd900;
      border-bottom: 1px solid #ffd900;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .head {
    // height: 73px;
  }
  .head .box {
    width: 100%;
    overflow: hidden;

    .logo img {
      display: block;
      // width: 200px;
    }
  }

  .head .box .nav-box .nav a {
    margin: 0 14px;
    padding: 14px 0;
    font-size: 13px;
  }

  .head .nav-box .showpc {
    display: none;
  }
}
</style>
