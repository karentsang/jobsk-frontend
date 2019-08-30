<template>
  <div>
    <jobfilter/>
    <googlemap/>
    <h3><router-link to="/profile/mycalendar">book now</router-link></h3>
  </div>
</template>

<script>
import jobfilter from '@/List/components/filter.vue'
import googlemap from '@/List/components/map.vue'

export default {
  name: 'list',
  components:{
      googlemap,
      jobfilter,
  }
}
</script>

<style>

</style>