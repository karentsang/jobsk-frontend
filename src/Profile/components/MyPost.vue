<template>
  <div calss="containerP" style="width:93%; margin: auto;">

    <h3 style="padding-left: 33px; font-size: 23px" > All the Job post</h3>

    <vs-collapse vs-value="shadow">
        <bothpost/>
    </vs-collapse>
      
  </div>
</template>


<script>
import bothpost from '@/Profile/components/MyPostscomponents/BothPost.vue'


export default {
    
    name: 'mypost',
    components: {    
        bothpost,
    },
    data() {
        return {
            
        }
    }
}





</script> 

<style>



</style>