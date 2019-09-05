<template>
  <div>

    <div class="acceptrejectcard" style=" display: flex;">
        <img style="width: 30%; display: flex; padding: 13px;" :src="user.profile_img"/>
        <div style="width: 60%; display: flex; padding: 13px; flex-wrap: wrap; font-family: 'Pavanam', sans-serif;">
            <p style="width: 100%; margin: 1px">User: {{user.firstname}}</P>
            <p style="width: 100%; margin: 1px">Email: {{user.email}}</P>
            <p style="width: 100%; margin: 1px">Start: {{booking.start_date | date('DD MMMM HH:MM')}}</P>
            <p style="width: 100%; margin: 1px">End: {{booking.start_date| date('DD MMMM HH:MM')}}</P>
        </div>
        <div style="margin-top: 3px; display: flex; flex-direction: column;">
            <vs-button @click="openAlert1" icon-no-border icon="done" color='#07689F' :type="acceptbutton"></vs-button>
            <vs-button @click="openAlert2" icon-no-border icon="clear" color='#ff7e67' :type="rejectbutton"></vs-button>
        </div>
    </div>
  </div>
</template>


<script>
const axios = require("axios");
import { dateFilter } from "vue-date-fns"

export default {

    filters: {
        date: dateFilter
    },
    
    name: 'acceptrejectcard',
    props: {    
        booking: {}
    },
    data() {
        return {
            acceptbutton: 'flat',
            rejectbutton: 'flat',
            name:'123123123',
            speciality:'123123',
            price:'123123',
            user : {}
        }
    },

    computed: {
        userId(id) {
            return id
        }
    },

    methods:{
        openAlert1(){
        this.$vs.dialog({
            color: '#07689F',
            title: 'Note',
            text: 'Once you accept this, you and the opposite will be matched and booking will be completed.',
            accept:this.acceptAlert1
            })
        },
        acceptAlert1(){
            //direct to the matching/confirm page
        },
        openAlert2(){
        this.$vs.dialog({
            color: '#ff7e67',
            title: 'Note',
            text: 'Once you accept it, a declined notification will send to opposite. *You can just accept the one you want and the rest will auto reject.',
            accept:this.acceptAlert2
            })
        },
        acceptAlert2(){
            //that propose post is removed
        },
    },
    mounted() {
        axios.get(`http://127.0.0.1:3333/user/${this.booking.user_id}`).then(response => {
            this.user = response.data
        })
    }
}





</script> 

<style>



</style>