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
      <div style= "align:center" >
      <div>{{name}}</div> 
      <div>{{Location}}</div> 
      <div>Speciality: {{Speciality}}</div> 
      <div>Price:{{Price}}</div> 
      <div>District:{{District}}</div> 
      <div>Availablity:{{Availablity}}</div> 
      </div>
      
         <star-rating
           v-bind:increment="0.5"
             v-bind:max-rating="5"
             inactive-color="slier"
             active-color="yellow"
             border-color="black"
             v-bind:star-size="18">
       </star-rating>
      <p><br><br> </p>
   
   
  <div class="centerx">
    <vs-button @click="popupActivo1=true" color="danger" type="border">Your booking details</vs-button>
    <vs-popup fullscreen title="fullscreen" :active.sync="popupActivo1">
      <p>Sung is a professional plumber and have experience of plumbing for 12years.You have booked Suang for four-days plumbing package!Good choice! </p>
    </vs-popup>
  </div>

      <div slot="footer">
        <vs-row vs-justify="flex-end">
        <div class="center">
        <vs-button @click="openLoading" type="filled" color="primary">{{status}}</vs-button>
    </div>
        
        </vs-row>
      </div>
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
/* element.style {
    justify-content: center;
    display: flex;
    width: 90%;
    margin: auto;
    
} */
.vs-images{
  justify-content: center; 
  width:90%;
  display: block;
  margin: auto;
}

.star-rating{
  align-content: center;
  justify-content: center; 
  width:90%;
  display: flex;
  margin: auto;
}

.center {
  text-align: center;
}

.material-icons.md-18 { font-size: 18px; }

.full-width-image {
    width: 100%;
}



</style>