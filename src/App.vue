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
  created() {
    // Check if localstorage has access_token
    // If it does, dont show join button
  }
}
</script>

<style>

</style>
