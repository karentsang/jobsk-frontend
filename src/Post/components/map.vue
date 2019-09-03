<template>
  <div>
    <div class="title" style="width:83%; margin: auto; margin-top: 10px; margin-bottom: 10px;">
        <p style="font-size: 1.1rem; margin-bottom: 10px">Location</p>
        <div style="display:flex">
            <vs-input style="margin-bottom: 10px" v-on:keydown.enter="getAddressLocation"  class="inputx full-width" placeholder="Point it or type in the location" v-model="address"/>
        </div>
    </div>
    <GmapMap
        :center="currentposition"
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
            :position="currentposition"
            :clickable="true"
            :draggable="true"
            @dragend="onDragEnd"
        />
    </GmapMap>
  </div>
</template>

<script>
import axios from 'axios'
import {gmapApi} from 'vue2-google-maps'
// const axios = require('axios')
export default {
  name: 'googlemapP',
  components:{

  },

    data(){
        return {
                address: '',
                currentposition: {lat:22.339082, lng:114.1490733},
            }
    },

    computed:{
        google: gmapApi,
    },

    created() {
        // for example, you can call it in created hooks
    },

     methods: {
        onDragEnd(position) {
            this.currentposition = {"lat": position.latLng.lat(), "lng": position.latLng.lng()}
            this.geocodedAddress()

        },

        getAddressLocation(input) {
            console.log(input.target.value)
            // console.log(this.google)
            let geocoder = new this.google.maps.Geocoder();
            // let theLocations = this.currentposition ;

            geocoder.geocode({'address': input.target.value }, (results, status) => {
                console.log(results)
                if (status === 'OK') {
                if (results[0]) {
                    console.log(results[0].geometry.location.lat())
                    this.currentposition = {"lat": results[0].geometry.location.lat(), "lng": results[0].geometry.location.lng()};
                } else {
                    console.log(status);
                    window.alert('No results found');
                    return null
                }
                }
            })
            
        },

        geocodedAddress() {
            let geocoder = new this.google.maps.Geocoder();
            let theLocations = this.marker ;

            geocoder.geocode({'location': this.currentposition }, (results, status) => {
                console.log(results)
                if (status === 'OK') {
                if (results[0]) {
                    this.address = results[0].formatted_address
                    // return theLocations.push(results[0].formatted_address);
                } else {
                    console.log(status);
                    window.alert('No results found');
                    return null
                }
                }
            })
        }
        
}

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
}

</script>

<style scoped>

</style>