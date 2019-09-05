<template>
    <div class='filter'>

        <h3 class='filter_titile' style='font-size: 20px; text-align: center; padding-top: 10px;'>
            Find your JOBSKer
        </h3>


        <div class='filter_tab' style="display: flex; flex-wrap: wrap; margin-top: 10px; justify-content: space-evenly;">
            <vs-button @click="getCat('Photographers')" style="margin-bottom: 9px; margin-left: 10px; width:110px; font-size: 15px; justify-content: center;" color="rgb(50,75,125)" type="border"
            ><font-awesome-icon icon="camera"/>
            Photographers</vs-button>
            <vs-button @click="getCat('Interior + Designers')" style="margin-bottom: 9px; margin-left: 10px; width:110px; font-size: 15px; justify-content: center;" color="rgb(50,75,125)" type="border"
            ><font-awesome-icon icon="pencil-ruler"/>
            Interior + Designers</vs-button>
            <vs-button @click="getCat('Musicians')" style="margin-bottom: 9px; margin-left: 10px; width:110px; font-size: 15px; justify-content: center;" color="rgb(50,75,125)" type="border"
            ><font-awesome-icon icon="music"/>
            Musicians</vs-button>
        </div>
        <div class='filter_tab' style="display: flex; flex-wrap: wrap; margin-top: 10px; justify-content: space-evenly;  margin-bottom: 10px">
            <vs-button @click="getCat('Painters')" style="margin-bottom: 9px; margin-left: 10px; width:110px; font-size: 15px; justify-content: center;" color="rgb(50,75,125)" type="border"
            ><font-awesome-icon icon="palette"/>
            Painters</vs-button>
            <vs-button @click="getCat('Dancers')" style="margin-bottom: 9px; margin-left: 10px; width:110px; font-size: 15px; justify-content: center;" color="rgb(50,75,125)" type="border"
            ><font-awesome-icon icon="child"/>
            Dancers</vs-button>
            <vs-button @click="getCat('Models')" style="margin-bottom: 9px; margin-left: 10px; width:110px; font-size: 15px; justify-content: center;" color="rgb(50,75,125)" type="border"
            ><font-awesome-icon icon="gem"/>
            Models</vs-button>
        </div>

    </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'jobfilter',
  components:{
      
  },

    data() {
        return {
            
        }
    },

    methods: {
      async getCat(category) {
          // Call api and return data via emit
        let path =this.$route.query.type
        let response = await axios.get(`http://127.0.0.1:3333/post/${path}/${category}`)
        console.log(response)
        
        let markers = response.data.map(map => {
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
        this.$emit('changeFilter', markers)
      }
    },

}
</script>

<style>

.filter{
    width: 100%;
    left: 0px;
    background-color: #fafafa;
}
h3{
    font-family: 'Dosis', sans-serif;
}



</style>