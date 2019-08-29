<template>
    <div class='filter'>

        <h1 class='filter_titile' style='font-size: 20px; text-align: center; padding-top: 10px;'>
            Find your JOBSKer
        </h1>


        <div class='filter_tab' style="display: flex; flex-wrap: wrap; margin-top: 15px; justify-content: space-around;">
            <vs-button @click="activate" style="margin-bottom: 9px; margin-left: 10px; width:90px" color="primary" type="border">Primary</vs-button>
            <vs-button @click="activate" style="margin-bottom: 9px; margin-left: 10px; width:90px" color="primary" type="border">Primary</vs-button>
            <vs-button @click="activate" style="margin-bottom: 9px; margin-left: 10px; width:90px" color="primary" type="border">Primary</vs-button>
            <vs-button @click="activate" style="margin-bottom: 9px; margin-left: 10px; width:90px" color="primary" type="border">Primary</vs-button>
            <vs-button @click="activate" style="margin-bottom: 9px; margin-left: 10px; width:90px" color="primary" type="border">Primary</vs-button>
            <vs-button @click="activate" style="margin-bottom: 9px; margin-left: 10px; width:90px" color="primary" type="border">Primary</vs-button>

        </div>

    </div>
</template>

<script>


export default {
  name: 'jobfilter',
  components:{
      
  },

    data() {
        return {
            
        }
    },

    methods: {
      activate() {
        this.input = 'pluming'
      }
    }
}
</script>

<style>

.filter{
    width: 100%;
    height: 150px;
    left: 0px;
    background-color: #fafafa;
}




</style>