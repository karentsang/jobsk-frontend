<template>
  <div>
    <jobfilter @changeFilter="handleData"/>
    <googlemap :markers="markers"/>
    </div>
</template>

<script>
import jobfilter from '@/List/components/filter.vue'
import googlemap from '@/List/components/map.vue'
import datetime from'@/Profile/components/MyCalendar.vue'

import axios from 'axios'

export default {
   methods: {
      successAlert() {
      }},
 
  name: 'list',
  data() {
    return {
      markers: []
    }
  },
  components:{
      googlemap,
      jobfilter,
      
      
  }
  ,
  data(){
    return{
       popupActivo:false,
       startdatetime:'',
       enddatetime:'',
       bookingConfirmed: false,
       markers: []
       
    }
    
  },
  methods: {
    handleData(markers) {
      // console.log(markers)
      this.markers = markers
    }
  },
  async mounted() {
    console.log("mounted")
      // console.log(this.$route)
      if(this.$route.query.type=='Offering') {
        let response = await axios.get("http://127.0.0.1:3333/post/Offering")
            
        this.markers = response.data.map(map => {
            return {
                id: map.id,
                type: map.type,
                price: map.price,
                category: map.category,
                lat: parseFloat(map.lat),
                lng: parseFloat(map.lng),
                image: map.post_img,
            }
        })
      } else {
        let response = await axios.get("http://127.0.0.1:3333/post/Providing")
        this.markers = response.data.map(map => {
            return {
                id: map.id,
                type: map.type,
                price: map.price,
                category: map.category,
                lat: parseFloat(map.lat),
                lng: parseFloat(map.lng),
                image: map.post_img,
            }
        })
      }
    
  }
  
}


</script>

<style>
.vs-button {
  background-color: blue; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display:inline-flex;
  font-size: 18px;
}
</style>