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
            :draggable="false"
            :icon="selected == index ? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' : ''"
            
        />

        <!-- <gmap-info-window
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen=false"
        >
            <div v-html="infoContent"></div>
            
        </gmap-info-window> -->
        
    </GmapMap>

        <!-- swiper -->
        <swiper :options="swiperOption" @slideChange="handleSlideChange" ref="mySwiper">
          <swiper-slide v-for="(marker, index) in markers" v-bind:key="index">
            <vs-card class="swipercard" style="display: flex; flex-direction: row; width:80%; border-right-style: ridge; color: black;">
                <figure class="image is-4by3" style="display: flex; flex-direction: row;">
                  <img :src="marker.image" class="marker-img" alt="Placeholder image" style="width:120px; height:100px; border-radius: 5px;">
                  <div class="card-content">
                    <div class="type-content">
                      <p class="title is-4">Type: {{marker.type}}</p>
                    </div>
                    <div class="price-content">
                      Price: {{marker.price}} /hr
                    </div>
                    <div class="status-content">
                      Category: {{marker.category}}
                    </div>
                    <vs-button color="danger" style="margin-top: 6px;"  type="gradient" @click="goToPage(marker.id, marker.type)">Book the date!</vs-button>
                  </div>
                </figure>
            </vs-card>
          </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>

      <!-- <vs-button @click="popupActive=true" color="danger" type="border">booking</vs-button> -->
      <vs-popup  title="Date Booking" :active.sync="popupActive">
        <vs-card>
        <datetime v-model="startdatetime" type="datetime" :auto='true' placeholder="select a starting time"></datetime>
        </vs-card>
        <vs-card>
        <datetime v-model="enddatetime" type="datetime" :auto='true' placeholder="select a ending time"></datetime>
      </vs-card>
      <vs-button
              @click="createBooking()"
              color="danger"
              type="gradient"
              class="button"
              style="text-align: center"
            >Confirm</vs-button>
        
          <!--div class="ConfirmButtton" style="text-align: center">
          <vs-button type="filled" color="primary" @click="createBooking">Confirm</vs-button>
          </div-->
      </vs-popup>
  </div>
</template>

<script>

import axios from 'axios'
import list from '@/List/List.vue'
import datetime from'@/Profile/components/MyCalendar.vue'

export default {
  name: 'googlemap',
  components:{

  },
  props: {
    markers: Array
  },

    data(){
        return {
       startdatetime:'',
       enddatetime:'',
       popupActive:false,
         bookingConfirmed: false,
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
            slidesPerView: 1,
            spaceBetween: -30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          },
          selected: '0'
        }
    },

    methods: {
      goToPage(id, type) {
        this.activeMarker = this.markers.filter(item => item.id == id)[0]
       
        // console.log("go")
        // this.$router.push({ path: 'register', query: { id: id, type: type } })
        this.popupActive=true

      },

      createBooking() {
        let selectedPost = this.markers[this.$refs.mySwiper.swiper.realIndex]
        // console.log("createBooking")
        console.log(selectedPost)
        console.log(this.startdatetime)
        console.log(this.enddatetime)
        let price = this.activeMarker.price
        let speciality=this.activeMarker.category
        console.log("price", this.activeMarker.price)
        console.log("speciality",this.activeMarker.category)
        this.popupActive=false

        axios
          .post('/post/' + selectedPost.id + '/booking/create', {
            start_date: this.startdatetime,
            end_date: this.enddatetime,
            user_id: 1, // Todo: testing only
            price: price,
            category:speciality,
            post_img:this.post_img
          })
          .then(response => {
            console.log(response)
            this.popupActive=false

            this.$router.push({ path: '/confirmation/pending', query: { startdatetime: this.startdatetime, enddatetime:this.enddatetime,name: this.name, marker: this.markers, price,speciality } })
            //this.$router.push({ path: '/confirmation/pending', query: { name: this.name, location:this.location,spciality:this.speciality,price:this.price,district:this.district,availablity:this.availablity} })
         })

      },
      handleSlideChange() {
         console.log('Current Index of slide',this.$refs.mySwiper.swiper ,this.$refs.mySwiper.swiper.realIndex)
         console.log(this.selected)
         this.selected = this.$refs.mySwiper.swiper.realIndex
         let currentMarker = this.markers[this.$refs.mySwiper.swiper.realIndex]
         console.log(currentMarker)
         currentMarker.icon = "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"

        this.icon[this.$refs.mySwiper.swiper.realIndex] = "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          
          let marker = new google.maps.Marker({
            position: {lat: currentMarker.lat, lng: currentMarker.lng },
            icon: {
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }
          });
        },
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
  .card-content{
    margin-left: 36px;
    align-self: center;
  }

  .vs-card--content {
   margin-bottom: 0 !important;
  }

  .vs-popup{
  width: 90%;
  height: 40%;
  text-align: center;
  font-size:16px;
  border-radius: 6px;
  padding: 10px;
  margin:10px 10px; 
}
</style>