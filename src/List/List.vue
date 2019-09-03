<template>
  <div>
    <jobfilter/>
    <googlemap/>
    <pending  v-if="bookingConfirmed" :bookingInfo="bookingInfo"/>
    <h3><router-link to="/profile/mycalendar">book now</router-link></h3>
     <div class="centerx">
    <vs-button @click="popupActivo1=true" color="danger" type="border">booking</vs-button>
    <vs-popup fullscreen title="fullscreen" :active.sync="popupActivo1">
      <vs-card>
      <datetime v-model="startdatetime" type="datetime" :auto='true' placeholder="select a starting time"></datetime>
      </vs-card>
      <vs-card>
      <datetime v-model="enddatetime" type="datetime" :auto='true' placeholder="select a ending time"></datetime>
     </vs-card>
      
        <div class="ConfirmButtton" style="text-align: center;">
        <vs-button type="filled" color="primary">Confirm</vs-button>
        </div>
    </vs-popup>
    </div>

  </div>
</template>

<script>
import jobfilter from '@/List/components/filter.vue'
import googlemap from '@/List/components/map.vue'
import datetime from'@/Profile/components/MyCalendar.vue'


export default {
   methods: {
      successAlert() {
      }},
 
  name: 'list',
  components:{
      googlemap,
      jobfilter,
      
      
  }
  ,
  data(){
    return{
       popupActivo1:false,
       startdatetime:'',
       enddatetime:'',
       bookingConfirmed: false
       
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