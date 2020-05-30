<template>
  <div class="news">
    <div class="news-h">
      <img
        class="img"
        src="@/assets/news/1.png"
        alt=""
      />
    </div>
    <!-- todo 三级新闻页 -->
    <img
      class="img-news"
      src="@/assets/news/news.png"
      alt=""
    />
    <!-- <div class="news-cont">
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div> -->
  </div>
</template>
<style lang="less" scoped>
.news {
  width: 100%;
  .news-h {
    .img {
      display: block;
      width: 100%;
      margin: 0 auto;
    }
  }
  .img-news {
    display: block;
    width: 1174px;
    margin: 0 auto;
    margin-top: 70px;
  }
}
</style>
