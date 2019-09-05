<template>
  <div style="width:90%; margin:auto; margin-bottom: 10px;" >
    <el-carousel indicator-position="outside" height="230px"  interval=5000>
        <el-carousel-item v-for="item in items" :key="item" style="height: 100%">
          <img style="width: 100%;object-fit: cover;height: 100%;" :src="item">
        </el-carousel-item>
    </el-carousel>  
  </div>
</template>

<script>

export default {
    name: 'slide',
    props: {
        items: Array
    },
    components:{
    
    },

    methods:{
        
    },

}
</script>

<style>

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  

</style>