<template>
  <div>
    <inputP :inputForm.sync="inputForm"/>
    <googlemapP :inputForm.sync="inputForm"/>
      <div class='postbutton' style="width:83%; margin: auto; margin-top: 10px; text-align: center;">
        <vs-button @click="openPostCompleted()" color="danger" type="border" style="width: 80%; height:40px; margin-bottom: 15px; justify-content: center;">Post it</vs-button>
    </div>
    <!-- <postbutton/> -->
  </div>
</template>

<script>
import inputP from '@/Post/components/input.vue'
import googlemapP from '@/Post/components/map.vue'
// import postbutton from '@/Post/components/postbutton.vue'
import axios from 'axios'



export default {
  name: 'Post',
  components:{
      googlemapP,
      inputP,
  },
  data() {
    return {
      inputForm: {
        category: "Thor Ragnarok",
        price: 1500,
        post_img: "http://res.cloudinary.com/suang/image/upload/v1567502216/cuuy1oen8kmpjnni1mhi.jpg",
        lat: 22.323848064172918,
        lng: 114.16139118774026
      }

    }
  },
  methods: {
    async openPostCompleted(){
      console.log("openpost", this.inputForm, this.inputGoogle)
      let data = this.inputForm
      let result = await axios.post(`http://127.0.0.1:3333/post/${this.inputForm.type}/create`, data)
      console.log(result)
      // if(this.inputForm.type && this.inputForm.title) {
      //   this.$vs.notify()
      // } else {

      // }
        this.$vs.dialog({
            type:'alert',
            color: 'danger',
            title: `Confirm`,
            text: 'Your post is created.',
            acceptText:'OK',
            close: this.acceptAlert,
            accept: this.acceptAlert,
        })
    },
    acceptAlert(){

        // return to homepage
    },
  }
  // data() {
  //   return {
  //     posts: []
  //   }
  // },
  // methods: {
  //   handleData(posts) {
  //     // console.log(markers)
  //     this.posts = posts
  //   }
  // }
  // async mounted() {
  //     // console.log(this.$route)
  //   if(this.$route.query.type=='Offering') {
  //     let response = await axios.post("http://127.0.0.1:3333/post/Offering/create")
  //     console.log(response)    
  //     // this.posts = response.data.map(map => {
  //     //     // return {
  //     //     //     id: map.id,
  //     //     //     type: map.type,
  //     //     //     price: map.price,
  //     //     //     category: map.category,
  //     //     //     lat: parseFloat(map.lat),
  //     //     //     lng: parseFloat(map.lng),
  //     //     //     image: map.post_img,
  //     //     // }
  //     // })
  //   } 
  //   // else {
  //   //   let response = await axios.post("http://127.0.0.1:3333/post/Providing/create")
  //   //   console.log(response)    

  //     // this.posts= response.data.map(map => {
  //     //     return {
  //     //         id: map.id,
  //     //         type: map.type,
  //     //         price: map.price,
  //     //         category: map.category,
  //     //         lat: parseFloat(map.lat),
  //     //         lng: parseFloat(map.lng),
  //     //         image: map.post_img,
  //     //     }
  //     // })
  //   // }
  // }
}
</script>

<style>

</style>