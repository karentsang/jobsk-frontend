<template>
  <div style="width:83%; margin: auto; margin-top: 10px;">
    <vs-card class="container">
        <div slot="header" style="width: 80%">
            <h3 style="font-size: 1.3rem;">
            Hey {{firstname}}
            </h3>
        </div>
        <div style="font-size: 1.1rem;">
            <p>Let's start your first post.</p>
            <p>You want to...</p>
        </div>
    </vs-card>

    <div class="centerx">

        <vs-button  v-on:click="inputForm.type='Providing'" @click="openAlert1('Note');isHidden = true" color="#07689F" :type="offerServiceSelected1" 
        style="width: 100%; height:60px; margin-bottom: 15px; justify-content: center;" >
        Look for service
        </vs-button>

        <vs-button  v-on:click="inputForm.type='Offering'" @click="openAlert2('Note'); isHidden = false" color="#ff7e67" :type="offerServiceSelected2" 
        style="width: 100%; height:60px; margin-bottom: 15px; justify-content: center;">
        Offer a service
        </vs-button>       

        <!-- <vs-upload class="upload" limit=1 automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload"/> -->

    </div>

    <div class="upload">
        <p style="font-size: 1.1rem;">Upload Image</p>
        <file-pond
            name="image" 
            label-idle="Drop files here..."
            allow-multiple="false"
            accepted-file-types="image/jpeg, image/png"
            server="https://trava-backend.whiteboard.academy/upload"
            v-bind:files="file"
            :onprocessfile="upload"

        />
    </div>

    <div class="selection">
        <p style="font-size: 1.1rem;">Speciality</p>
        <div class="con-select-example" >
                <vs-select
                class="selectExample"
                label=""
                v-model="inputForm.category"
                color="#07689F"
                placeholder="Select your speciality"
                width="100%"
                >
                    <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in options1"/>
                </vs-select>
        </div>
        
        <div>
            <p style="font-size: 1.1rem; margin-bottom: 10px">Price HKD/hr</p>
            <vs-input class="inputx full-width" placeholder="Drag it or type in the price" v-model="inputForm.price"/>
            <vs-slider :min="0" :max="1000"  color="#ff7e67" v-model="inputForm.price"/>
        </div>

        <div v-if="isHidden">
            <p style="font-size: 1.1rem; margin-bottom: 10px">Date and Time</p>
            <datetime v-model="bookingdate" type="datetime" :auto='true' placeholder="When you need the service?"
            input-style="border: 1px solid rgba(0, 0, 0, 0.2); width: 100%; height: 33px; border-radius: 5px; font-family: 'Montserrat', sans-serif; font-weight: 100; padding: 6.4px;"
            ></datetime>
        </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
// Import Vue FilePond
import vueFilePond from 'vue-filepond';
 
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
 
// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
 
// Import image preview and file type validation plugins
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
 
// Create component
const FilePond = vueFilePond(FilePondPluginImagePreview);

export default {
  name: 'inputP',
  components:{
      FilePond
  },

    props: ['inputForm'],
    data(){
        return{
            isHidden: true,
            bookingdate: '',
            offerServiceSelected1: 'border',
            offerServiceSelected2: 'border',
            firstname: localStorage.getItem("user"),
            colorAlert:'Note',
            titleAlert:'Alert',
            activeAlert:false,
            valueInput:'',
            select1Normal:'',
            category: '',
            options1:[
                {text:'Photographers',value:'Photographers'},
                {text:'Interior + Designers',value: 'Interior + Designers'},
                {text:'Musicians',value: 'Musicians'},
                {text:'Painters',value: 'Painters'},
                {text:'Dnacers',value: 'Dnacers'},
                {text:'Models',value: 'Models'},
            ],
            price:'',
            widthx:55,
            heightx:55,
            file:[],
            picture:'',
        }
    },

    methods:{
        openAlert1(title){
            // this.colorAlert = color || this.getColorRandom()
            this.$vs.dialog({
                color: '#07689F',
                title: `${title}`,
                text: 'Post a service you are providing',
                accept:this.acceptAlert1,
                // buttonAccept: true,
                type: 'confirm'
            })
        },
        acceptAlert1(){
            this.$vs.notify({
                color:'#07689F',
                title:'Accept Selected',
                text:'Look for service is selected',
            },
            this.offerServiceSelected1='filled',
            this.offerServiceSelected2='border'
            )
            
        },

        openAlert2(title){
            // this.colorAlert = color || this.getColorRandom()
            this.$vs.dialog({
                color: '#ff7e67',
                title: `${title}`,
                text: 'Post a service that you demanding',
                accept:this.acceptAlert2,
                // buttonAccept: true,
                type: 'confirm'
            })
        },
        acceptAlert2(){
            this.$vs.notify({
                color:'#ff7e67',
                title:'Accept Selected',
                text:'Offer a service is selected',
            },
            this.offerServiceSelected2='filled',
            this.offerServiceSelected1='border'
            )
        },
        getColorRandom(){
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
        },

        upload(err, file){
            console.log(file)
            // console.log(image)
            let image = JSON.parse(file.serverId)
            console.log(image)
            this.inputForm.post_img = image.url
        }
    }
}

</script>

<style>

.centerx{
    display: flex;
    flex-wrap: wrap;
}

.selectExample {
  margin: 10px 0;
}
.con-select-example {
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-select .vs-select {
  width: 100%;
}
.vs-con-input-lable{
    width:100%;
}
@media (max-width: 550px) {
  .con-select {
    flex-direction: column;
  }
  .con-select .vs-select {
    width: 100%
  }
}
.full-width{
    width:100% !important;
}


</style>