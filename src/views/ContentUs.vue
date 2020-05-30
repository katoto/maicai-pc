<template>
  <div class="contentUs">
    <img
      v-for="(item, index) in list"
      :key="index"
      :alt="item.name"
      :src="item.img"
      class="img"
    />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "contentUs",
  data() {
    return {
      list: [
        {
          img: require("@/assets/contentUs/1.png"),
          name: "contentUs"
        },
        {
          img: require("@/assets/contentUs/2.png"),
          name: "contentUs"
        }
      ]
    };
  },
  components: {},
  created() { }
};
</script>
<style lang="less" scoped>
.contentUs {
  width: 100%;
  .img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
