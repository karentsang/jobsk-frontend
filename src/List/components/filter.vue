<template>
    <div class='filter'>

        <h3 class='filter_titile' style='font-size: 20px; text-align: center; padding-top: 10px;'>
            Find your JOBSKer
        </h3>


        <div class='filter_tab' style="display: flex; flex-wrap: wrap; margin-top: 15px; justify-content: space-evenly;">
            <vs-button @click="getCat('A')" style="margin-bottom: 9px; margin-left: 10px; width:90px; justify-content: center;" color="primary" type="border">A</vs-button>
            <vs-button @click="getCat('B')" style="margin-bottom: 9px; margin-left: 10px; width:90px; justify-content: center;" color="primary" type="border">B</vs-button>
            <vs-button @click="getCat('C')" style="margin-bottom: 9px; margin-left: 10px; width:90px; justify-content: center;" color="primary" type="border">C</vs-button>
        </div>
        <div class='filter_tab' style="display: flex; flex-wrap: wrap; margin-top: 15px; justify-content: space-evenly;">
            <vs-button @click="getCat('D')" style="margin-bottom: 9px; margin-left: 10px; width:90px; justify-content: center;" color="primary" type="border">D</vs-button>
            <vs-button @click="getCat('E')" style="margin-bottom: 9px; margin-left: 10px; width:90px; justify-content: center;" color="primary" type="border">E</vs-button>
            <vs-button @click="getCat('F')" style="margin-bottom: 9px; margin-left: 10px; width:90px; justify-content: center;" color="primary" type="border">F</vs-button>
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




</style>