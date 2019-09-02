<template>
  <div>
      
        <div style="display: flex;font-size:medium;outline:aliceblue;padding:15px,15px">

            <vs-card><p>Booking {{name}}!</p>       
            </vs-card>
        </div>
     


        <vs-card>
          <datetime v-model="startdatetime" type="datetime" auto='true' placeholder="select a starting time"></datetime>
        
        
        </vs-card>
        <vs-card>
        
         <datetime v-model="enddatetime" type="datetime" auto='true' placeholder="select a ending time"></datetime>

        </vs-card>

         <div slot="ConfirmButtton" style="text-align: center;">
      
        <vs-button type="filled" color="primary">Confirm</vs-button>

        
     
       
      </div>

      
  </div>
</template>


<script>

export default {
    

    methods: {
      successAlert() {

      }
    },
    name: 'mycalendar',
    component: {    },
    data() {
        return {  
            name:"Suang",
            startdatetime:true,
            enddatetime:true
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