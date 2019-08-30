<template>
  <div>
    <inputP/>
    <googlemapP/>
    <postbutton/>
  </div>
</template>

<script>
import inputP from '@/Post/components/input.vue'
import googlemapP from '@/Post/components/map.vue'
import postbutton from '@/Post/components/postbutton.vue'


export default {
  name: 'Post',
  components:{
      googlemapP,
      inputP,
      postbutton,
  }
}
</script>

<style>

</style>