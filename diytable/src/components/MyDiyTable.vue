<template>
<div>
  <div id="mydiytable">
    
  </div>
  <!-- <div class="loader-container" id="loader" >
    <div class="loader"></div>
  </div> -->
</div>
  
  
</template>

<script>
import mytable from "../js/mytable";
export default {
  name: "MyDiyTable",
  props: {
    msg: String,
  },
  data:()=>{
   return {
    // onLoad:true,
  }
  }
    
  
  
  ,
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
    // mt.refresh(mt.data);
    // mt.refresh(mt.data);
    mt.createLoader({
      method:"GET",
      url:'https://getman.cn/mock/testdt/diydata',
    },(res)=>{
      console.log("myres:",res);
    },
    (err)=>{
      console.error("myerr",err);
    }
    );
    // dataLoader().then((res)=>{
    //   console.log("test",res);
    // });
    // dataLoader().then((res)=>{
    //   console.log("test2",res);
    // });
    

    
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mytb{
  display: flex;
  justify-content: center;
  
}
.loader-container {
   background:#4ea980;
   /* margin:150px; */
   height: 50px;
   display: flex;
   justify-content: center;
}
.loader {
   font-size: 10px;
   width: 1em;
   height: 1em;
   border-radius: 50%;
   position: relative;
   /* text-indent: -9999em; */
   animation: load-effect 1.5s infinite linear;
}
@keyframes load-effect {
   0% {
      /*

      -3em:左移3em

       2em:下移2em

       0:模糊距离0，即纯色

       .5em:外扩.5em

       #000:白色

      */
      box-shadow: -3em 2em 0 .5em #000, 0 2em 0 0 #000, 3em 2em 0 -.5em #000;
   }
   25% {
      box-shadow: -3em 2em 0 0 #000, 0 2em 0 -.5em #000, 3em 2em 0 0 #000;
   }
   50% {
      box-shadow: -3em 2em 0 -0.5em #000, 0 2em 0 0 #000, 3em 2em 0 .5em #000;
   }
   75% {
      box-shadow: -3em 2em 0 0 #000, 0 2em 0 .5em #000, 3em 2em 0 0 #000;
   }
   100% {
      box-shadow: -3em 2em 0 .5em #000, 0 2em 0 0 #000, 3em 2em 0 -.5em #000;
   }
}
</style>
