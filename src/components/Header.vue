<template>
  <header class="head">
    <div class="box">
      <a
        class="logo"
        placeholder="百姓餐桌"
        href="javascript:;"
      ><img src="../assets/head/logo.png" /></a>
      <ul class="nav-box">
        <li class="nav active">
          <a target="_blank">公司简介</a>
        </li>
        <li class="nav">
          <a target="_blank">动态</a>
        </li>
        <li class="nav">
          <a target="_blank">大健康</a>
        </li>
        <li class="nav">
          <a target="_blank">服务支持</a>
        </li>
        <li class="nav">
          <a target="_blank">联系我们</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "head",
  props: {
    msg: String
  }
};
</script>
<style scoped lang="less">
.head {
  height: 150px;
  width: 100%;
  background-color: #00643d;
  .box {
    width: 1205px;
    margin: 0 auto;
    height: 100%;
    border: 1px solid rebeccapurple;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .logo img {
      display: block;
    }
  }
  .nav-box {
    margin-top: 70px;
    display: flex;
    .nav a {
      color: #fff;
      margin: 0 25px;
      padding: 14px 0;
      font-size: 24px;
      text-align: center;
    }
    .nav {
      cursor: pointer;
      &:last-child {
        padding-right: 11px;
      }
    }
    .active a {
      color: #ffd900;
      border-bottom: 1px solid #ffd900;
    }
  }
}
</style>
