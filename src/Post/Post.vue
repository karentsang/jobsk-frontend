<template>
  <div>
    <inputP/>
    <googlemapP/>
  </div>
</template>

<script>
import inputP from '@/Post/components/input.vue'
import googlemapP from '@/Post/components/map.vue'

export default {
  name: 'Post',
  components:{
      googlemapP,
      inputP,
  }
}
</script>

<style>

</style>