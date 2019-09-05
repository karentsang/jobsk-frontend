<template>
  <div>
    <inputP :inputForm.sync="inputForm"/>
    <googlemapP :inputForm.sync="inputForm"/>
      <div class='postbutton' style="width:83%; margin: auto; margin-top: 10px; text-align: center;">
        <vs-button 
            @click="openPostCompleted()" 
            color="danger"
            type="gradient"
            style="width: 80%; height:40px; margin-bottom: 15px; justify-content: center;"
        >Post it</vs-button>
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
        category: null,
        price: null,
        post_img: null,
        lat: null,
        lng: null,
        user_id: null,
      }

    }
  },
  methods: {
    async openPostCompleted(){
      console.log("openpost", this.inputForm, this.inputGoogle)
      let data = this.inputForm
      let result = await axios.post(`/post/${this.inputForm.type}/create`, data)
      console.log(result)
      // return result
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
      this.$router.push({name:"mypost"});
    },
  },
  mounted() {
    console.log(localStorage.getItem("userId"))

    this.inputForm.user_id = localStorage.getItem("userId")
    console.log(this.inputForm.user_id)

  }
}
</script>

<style>

</style>