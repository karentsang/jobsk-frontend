<template>
  <div>
        <div slot="header">
        <div style="display: flex;blackground-color:green;padding:15px,15px">

            <vs-card><p>Booking {{name}}</p>       
            </vs-card>
        </div>
        </div>
        <vs-card>
        <VueCtkDateTimePicker v-model="time"/>
        </vs-card>
        <vs-card>
        
        <p>{{time}}</p>

        </vs-card>

         <div slot="footer">
       
  
        <vs-button @click="successAlert" type="filled" color="primary"><router-link to="/confirmation/pending">Confirm</router-link></vs-button>

        
       
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
            timeSelectForm: true,
            dateSelectForm: false,
            time: '',    
            name:"Suang"
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