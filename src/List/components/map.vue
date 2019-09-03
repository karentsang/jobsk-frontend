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
            :icon="selected == index ? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' : ''"
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

        <!-- swiper -->
        <swiper :options="swiperOption" @slideChange="handleSlideChange" ref="mySwiper">
          <swiper-slide v-for="marker in markers" v-bind:key="marker.id">
            <div class="card" style="display: flex; flex-direction: row;">
              <div class="card-image" style="float: left;">
                <figure class="image is-4by3" style="display: flex; flex-direction: row; margin: 0 0 0rem;">
                  <img :src="marker.image" class="marker-img" alt="Placeholder image">
                  <div class="card-content" style="display: flex; flex-direction: column; margin:auto; margin-right:5px; margin-left:5px; color:black">
                    <div class="media">
                      <div class="model-content">
                        <p class="title is-4">Type: {{marker.type}}</p>
                      </div>
                    </div>
                    <div class="price-content">
                      Price: {{marker.price}} /hr
                    </div>
                    <div class="status-content">
                      Category: {{marker.category}}
                    </div>
                    <a href="/booking"><button class="el-button el-button--default" style="color:#42b983; background-color:#080024;">Book it!</button></a>
                  </div>
                </figure>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>

  </div>
</template>

<script>

import axios from 'axios'
import list from '@/List/List.vue'

export default {
  name: 'googlemap',
  components:{

  },
  props: {
    markers: Array
  },

    data(){
        return {
          selectedCar: false,
          latlong: {lat: '', long: ''},
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
          swiperOption: {
            slidesPerView: 1.3,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          },
          selected: '0'
        }
    },

    methods: {
        handleSlideChange() {
         console.log('Current Index of slide',this.$refs.mySwiper.swiper ,this.$refs.mySwiper.swiper.realIndex)
         console.log(this.selected)
         this.selected = this.$refs.mySwiper.swiper.realIndex
        //  let currentMarker = this.markers[this.$refs.mySwiper.swiper.realIndex]
        //  console.log(currentMarker)
        //  currentMarker.icon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

        // this.icon[this.$refs.mySwiper.swiper.realIndex] = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          
        //   let marker = new google.maps.Marker({
        //     position: {lat: currentMarker.lat, lng: currentMarker.lng },
        //     icon: {
        //       url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        //     }
        //   });
        },
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

        // getInfoWindowContent: function (marker) {
        //   return `<div class="card" style="display: flex; flex-direction: row;">
        //             <div class="card-image" style="float: left;">
        //               <figure class="image is-4by3" style="display: flex; flex-direction: row; margin: 0 0 0rem;">
        //                 <img src="${marker.image}" class="marker-img" %alt="Placeholder image">
        //                 <div class="card-content" style="display: flex; flex-direction: column; margin:auto; margin-right:5px; margin-left:5px; color:black">
        //                   <div class="media">
        //                     <div class="model-content">
        //                       <p class="title is-4">Type: ${marker.type}</p>
        //                     </div>
        //                   </div>
        //                   <div class="price-content">
        //                     Price: ${marker.price} /hr
        //                   </div>
        //                   <div class="status-content">
        //                     Category: ${marker.category}
        //                   </div>
        //                   <a href="/booking"><button class="el-button el-button--default" style="color:#42b983; background-color:#080024;">Book it!</button></a>
        //                 </div>
        //               </figure>
        //             </div>
        //           </div>`
        //         },
    }
}

</script>

<style >
.marker-img {
  width: 35%;
}
.swiper-slide {
    width: 250px;
  }
</style>