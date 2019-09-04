<template>
  <div calss="containerP" style="width:93%; margin: auto;">

    <h3 style="padding:30px; font-size: 22px" >Job posts</h3>

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