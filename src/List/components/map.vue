<template>
  <div>
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
        style="width: 100%; height: 506px; justify-content: center; margin: auto;"
        >
        <GmapMarker 
            :key="index" 
            v-for="(m, index) in markers"
            :position="m"
            :clickable="true"
            :draggable="true"
            @click="toggleInfoWindow(m,index)"
        />

        <gmap-info-window
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen=false"
        >
            <div v-html="infoContent"></div>
        </gmap-info-window>
    </GmapMap>

  </div>
</template>

<script>

const axios = require('axios')
export default {
  name: 'googlemap',
  components:{

  },

    data(){
        return {
                selectedCar: false,
                latlong: {lat: '', long: ''},
                markers: [],
                // markersPosition: [],
                infoContent: '',
                infoWindowPos: {
                lat: 0,
                lng: 0
                },
                infoWinOpen: false,
                currentMidx: null,
                infoOptions: {
                pixelOffset: {
                    width: 0,
                    height: -35
                    },
                },
        mapStyle: {styles: [
        ]
                },
            }
        // map = null
    },

    mounted() {
        axios
            .get("http://127.0.0.1:3333/index")
            .then(response => {
                this.markers = response.data.map(map => {
                    return {
                        id: map.id,
                        model: map.model,
                        price: map.price,
                        status: map.status,
                        lat: parseFloat(map.lat),
                        lng: parseFloat(map.long),
                        image: map.image,
                        availability: map.availability,
                    }
                })
            })
    },

    methods: {
        toggleInfoWindow: function (marker, idx) {

        //   console.log(marker)
        this.infoWindowPos = { lat: marker.lat, lng: marker.lng };
        this.infoContent = this.getInfoWindowContent(marker);
        

        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      },

        getInfoWindowContent: function (marker) {
          return `<div class="card" style="display: flex; flex-direction: row;">
                    <div class="card-image" style="float: left;">
                      <figure class="image is-4by3" style="display: flex; flex-direction: row; margin: 0 0 0rem;">
                        <img src="${marker.image}" style="width:270px; %alt="Placeholder image">
                        <div class="card-content" style="display: flex; flex-direction: column; margin:auto; margin-right:5px; margin-left:5px; color:black">
                          <div class="media">
                            <div class="model-content">
                              <p class="title is-4">Model: ${marker.model}</p>
                            </div>
                          </div>
                          <div class="price-content">
                            Price: ${marker.price}
                          </div>
                          <div class="status-content">
                            Status: ${marker.status}
                          </div>
                          <div class="availability-content">
                            <p>Availability: ${marker.availability}</p>
                          </div>
                          <a href="/booking"><button class="el-button el-button--default" style="color:#42b983; background-color:#080024;">Book it!</button></a>
                        </div>
                      </figure>
                    </div>
                  </div>`
                },
    }
}

</script>

<style scoped>

</style>