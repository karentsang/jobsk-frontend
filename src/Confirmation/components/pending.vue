<template>
<div>

  
      <div slot="header">
        <div style="display: flex;blackground-color:yellow;margin:25px;padding:auto">
            <vs-icon icon="send" size="small" color="orange"></vs-icon>
            <vs-card><p>Request Sent!<br>Waiting for the confirmation<br>
            <p>Your booking Information:</p>
          
            <p>{{startdatetime| date('DD MMMM HH:MM')}}</P>
            <p>{{enddatetime| date('DD MMMM HH:MM')}}</P>
            </p>       
            </vs-card>
        </div>
        </div>

      
        <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="9">
      <vs-card class="cardx">
        <div slot="header">
          <p>{{id}}</p> 
          <p>{{location}}</p>
          
        </div>
        <div slot="media">
          <img class="full-width-image" :src="userInfo.profile_img" alt="">
        </div>
        <div>
          <span>
      <p>Speciality: {{speciality}}</p> 
      <p>Price: {{price}} </p> 
      <p>Name:{{userInfo.firstname}}</p>
      <p>Email:{{userInfo.email}}</p>
    
          </span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
              <vs-button @click="put" color="danger" type="gradient" class="button"
            ><router-link style="color: white" :to="{name: 'mypost'}">More Posts</router-link></vs-button>

          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    </vs-row>

        <!--p> <star-rating
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
      </div-->
    
   

    </div> 
</template>

<script>
import datetime from'@/Profile/components/MyCalendar.vue'
import { dateFilter } from "vue-date-fns"
import axios from 'axios'

export default {
  filters: {
        date: dateFilter
    },
  props: {
    bookingInfo: Object
  },  
    data() {
    return{
        status:"" ,
        name: "",
        location:null,
        speciality:null,
        price:null,
        district:null,
       
        popupActivo1:false,
        startdatetime:null,
        enddatetime: null,
        postid: null,
        userInfo: {},

    }
    } ,
    mounted() {
      // console.log(this.$route.query)
      this.startdatetime =this.$route.query.startdatetime
      this.enddatetime =this.$route.query.enddatetime
      // this.name=this.$route.query.name
      this.speciality=this.$route.query.speciality
      this.price=this.$route.query.price
      // this.district=this.$route.query.district
      this.postid = this.$route.query.postid
      console.log('in here',this.postid)
      axios.get(`/getUserFromPost/${this.postid}`)
      .then(response => {
        let id = response.data
        axios.get(`/user/${id}`)
        .then(response => {
          this.userInfo = response.data
          console.log(this.userInfo)
        })
      })
     
      // this.name = "asds"
    },
     methods:{
      openLoading(){
        this.$vs.loading()
        setTimeout( ()=> {
          this.$vs.loading.close()
        }, 2000);
    },
    
      bookingInfo(){
      //  axios
      //       .post('http://127.0.0.1:3333/post/' + selectedPost.id + '/booking/create', {
      //         start_date: this.startdatetime,
      //         end_date: this.enddatetime,
      //         user_id: 1, // Todo: testing only
      //       })
      //       .then(response => {
      //         console.log(response)
      //         this.$route.query.bookingId

      //         this.$router.push({ path: '/confirmation/pending', query: { startdatetime: this.startdatetime, enddatetime:this.enddatetime } })
      //       })
    },
  } 
    
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