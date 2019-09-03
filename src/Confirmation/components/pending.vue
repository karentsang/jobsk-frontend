<template>
<div >
    
   
  <vs-row vs-justify="center" vs-w="12" vs-type="flex" >
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-xs="12" vs-sm="4">
    <vs-card>
       
         
      <div slot="header">
        <div style="display: flex;blackground-color:yellow;padding:15px,15px">
            <vs-icon icon="send" size="small" color="orange"></vs-icon>
            <vs-card><p>Request Sent!<br>Waiting for the confirmation<br></p>       
            </vs-card>
        </div>

        <div slot="media"></div>
        <img class="full-width-image" :src="`https://picsum.photos/400/400?image=1`" alt="">
   
      </div>
      <div class= "profile" align="center" >
      <div>
      <p>{{name}}</p> 
      <p>{{Location}}</p> 
      <p>Speciality: {{Speciality}}</p> 
      <p>Price:{{Price}}</p> 
      <p>District:{{District}}</p> 
      <p>Availablity:{{Availablity}}</p> 
        <p> <star-rating
            class="star"
            align="center"
             v-bind:increment="0.5"
             v-bind:max-rating="5"
             inactive-color="slier"
             active-color="yellow"
             border-color="black"
             v-bind:star-size="18"
             style="margin: auto; justify-content: center;">
       </star-rating>
       </p>
      </div>
      <p><br><br> </p>
   
   
  <div class="centerx" style="margin: auto; justify-content: center;">
    <vs-button @click="popupActivo1=true"  color="danger" type="border">Your booking details</vs-button>
    <vs-popup fullscreen title="fullscreen" :active.sync="popupActivo1">
      <p>Sung is a professional plumber and have experience of plumbing for 12years.You have booked Suang for four-days plumbing package!Good choice! </p>
    </vs-popup>
  </div>
  <br><br> 

      <div class>
        <!--vs-row vs-justify="flex-end"-->
        <!--div class="center"-->
        
     <vs-button @click="openLoading" align="center" margin="auto" type="filled" color="primary"><router-link to="/profile/mypost">{{status}}</router-link></vs-button>
    </div>
    
    </div> 
        
        <!--/vs-row-->
      <!--/div-->
    </vs-card>
  </vs-col>
</vs-row>


    </div>  
</template>

<script>
//new Vue({
  //el: '#app',
  //methods: {
    //setRating: function(rating){
      //this.rating= rating;
    //}
 // },
  //data: {
    //rating: 0
  //}
//})

export default {
  props: {
    bookingInfo: Object
  },  
    data() {
    return{
        status: 'Pending',
        name:"Suang",
        Location:"Lai Chi Kok",
        Speciality:"Plumbing",
        Price:"$40/hour",
        District:"North",
        Availablity:"Monday-Friday",
        popupActivo1:false,
     
    }
    } ,
    mounted() {

    },
     methods:{
      openLoading(){
        this.$vs.loading()
        setTimeout( ()=> {
          this.$vs.loading.close()
        }, 2000);
    },
  },

 
    
    
}


 
</script>

<style>


.vs-images{
  justify-content: center; 
  width:90%;
  display: block;
  margin: auto;
}




.material-icons.md-18 { font-size: 18px; }

.full-width-image {
    width: 100%;
}



</style>