<template>
<div>
  <div style="margin:20px">
    <div style="display: flex;font-size:medium;margin:5px;outline:aliceblue;padding:15px,15px">
        <vs-card><p>Booking {{name}}!</p>       
        </vs-card>
    </div>
  </div>

  <div style="margin:20px">
    <vs-card > 
      <datetime v-model="startdatetime" font-size="small" type="datetime" auto='true' placeholder="select a starting time"></datetime>
    </vs-card>

    <vs-card >
      <datetime v-model="enddatetime"  font-size="small" type="datetime" auto='true' placeholder="select a ending time"></datetime>
    </vs-card >
  </div>


  <div class="ConfirmButtton" style="text-align: center;padding:15px,15px">
    <vs-button type="filled" color="primary" @click="makebooking">Confirm</vs-button>
  </div>

</div>
</template>


<script>

export default {
    

    methods: {
      successAlert() {

      },
      makebooking(){
        console.log("making")
        // axios.post("http://127.0.0.1:3333/post/:id/booking/create")
        //     .then(response => {
        //         this.markers = response.data.map(map => {
        //             return {
        //                 id: map.id,
        //                 model: map.model,
        //                 price: map.price,
        //                 status: map.status,
        //                 lat: parseFloat(map.lat),
        //                 lng: parseFloat(map.long),
        //                 image: map.image,
        //                 availability: map.availability,
        //             }
        //         })
        //     })
      }
    },
    name: 'mycalendar',
    component: {    },
    data() {
        return {  
            name:"Suang",
            startdatetime:'',
            enddatetime:''
        }
    }
}





</script> 

<style>
.datetime {
  font-size: 15px;
  border: none;
  }

.vs-button {
  background-color: blue; 
  border: none;
  color: rgb(50,75,125);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display:inline-flex;
  font-size: 18px;
  
}
</style>