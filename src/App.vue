<template>
  <div id="app">

    <jobskheader/>

    <router-view/>

    
    <jobskfooter/>
    

  </div>
</template>

<script>
import jobskheader from '@/components/header.vue'
import jobskfooter from '@/components/footer.vue'

export default {
  name: 'app',
  components:{
    jobskheader,
    jobskfooter,
  },
  data(){
    return{
      
    }
  }
}
</script>

<style>

</style>
