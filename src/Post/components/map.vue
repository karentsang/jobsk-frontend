<template>
  <div>
    <div class="title" style="width:83%; margin: auto; margin-top: 10px; margin-bottom: 10px;">
        <p style="font-size: 1.1rem; margin-bottom: 10px">Location</p>
        <vs-input class="inputx" placeholder="Point it or type in the location" v-model="marker"/>
    </div>
    <GmapMap
        :center="{lat:22.339082, lng:114.1490733}"
        :zoom="12"
        :options="{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            rotateControl: true,
            fullscreenControl: true,
            disableDefaultUi: true
            }"
        map-type-id="terrain"
        style="width: 100%; height: 500px; justify-content: center; margin: auto;"
        >
        <GmapMarker 
            :key="index" 
            v-for="(m, index) in markers"
            :position="m"
            :clickable="true"
            :draggable="true"
        />
    </GmapMap>

  </div>
</template>

<script>

// const axios = require('axios')
export default {
  name: 'googlemapP',
  components:{

  },

    data(){
        return {
                latlong: {lat: '', long: ''},
                marker: '',
            }
    },

    // mounted() {
    //     axios
    //         .get("http://127.0.0.1:3333/index")
    //         .then(response => {
    //             this.markers = response.data.map(map => {
    //                 return {
    //                     id: map.id,
    //                     model: map.model,
    //                     price: map.price,
    //                     status: map.status,
    //                     lat: parseFloat(map.lat),
    //                     lng: parseFloat(map.long),
    //                     image: map.image,
    //                     availability: map.availability,
    //                 }
    //             })
    //         })
    // },

    methods: {
        
      },
}

</script>

<style scoped>

</style>