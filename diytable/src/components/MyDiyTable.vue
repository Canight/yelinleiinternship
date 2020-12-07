<template>
  <div id="mydiytable"></div>
</template>

<script>
import mytable from "../js/mytable";
export default {
  name: "MyDiyTable",
  props: {
    msg: String,
  },
  mounted: function () {
    let mt = new mytable(
      "mydiytable",
      [
        {
          title: "test", //列名
          dataName: "testd", //数据源对应prop名
        },
        {
          title: "test1",
          dataName: "test1d",
        },
        {
          title: "test2",
          dataName: "test2d",
        },
      ],
      () => {}
    );
    mt.create();
    mt.refresh(mt.data);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
