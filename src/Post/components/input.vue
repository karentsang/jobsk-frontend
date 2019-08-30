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
        <vs-button @click="openAlert1('Note')" color="#07689F" :type="offerServiceSelected1" style="width: 100%; height:60px; margin-bottom: 15px; justify-content: center;">Look for service</vs-button>
        <vs-button @click="openAlert2('Note')" color="#ff7e67" :type="offerServiceSelected2" style="width: 100%; height:60px; margin-bottom: 15px; justify-content: center;">Offer a service</vs-button>        
    </div>

    <div class="selection">
        <p style="font-size: 1.1rem;">Speciality</p>
        <div class="con-select-example" >
                <vs-select
                class="selectExample"
                label=""
                v-model="speciality"
                color="#07689F"
                placeholder="Select your speciality"
                width="100%"
                >
                    <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in options1"/>
                </vs-select>
        </div>
        
        <div>
            <p style="font-size: 1.1rem; margin-bottom: 10px">Price HKD/hr</p>
            <vs-input class="inputx full-width" placeholder="Drag it or type in the price" v-model="price"/>
            <vs-slider :min="0" :max="1000"  color="#ff7e67" v-model="price"/>
        </div>

    </div>

  </div>
</template>

<script>


export default {
  name: 'inputP',
  components:{
      
  },

    data(){
        return{
            offerServiceSelected1: 'border',
            offerServiceSelected2: 'border',
            firstname:'suang',
            colorAlert:'Note',
            titleAlert:'Alert',
            activeAlert:false,
            valueInput:'',
            select1Normal:'',
            speciality: '',
            options1:[
                {text:'',value:0},
                {text:'Blade Runner',value:2},
                {text:'Thor Ragnarok',value:3},
            ],
            price:'',
            widthx:55,
            heightx:55,
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