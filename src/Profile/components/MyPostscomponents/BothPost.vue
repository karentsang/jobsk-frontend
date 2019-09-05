<template>
    <div>

            <vs-collapse-item v-for="(post, index) in posts" :key="index">
                <div slot="header" style="border-bottom: inset; display: flex; background-color: rgba(255,126,103,0.75); border-radius: 9px ">
                    <img style="width: 30%; height:30%; display: flex; padding: 9px;" :src="post[0].post_img"/>
                    <div style="width: 70%; display: flex; padding: 9px; flex-wrap: wrap; font-family: 'Pavanam', sans-serif;">
                        <p style="width: 100%; margin: 1px">Type: {{post[0].type}}</P>
                        <p style="width: 100%; margin: 1px">Category: {{post[0].category}}</P>
                        <p style="width: 100%; margin: 1px">Price: {{post[0].price}}</P>
                    </div>
                </div>
                <p style="width: 100%; margin: 1px; margin-left: 10px">Location: {{location}}</P>
                <acceptrejectcard v-for="booking in post[0].booking" :booking="booking"/>
            </vs-collapse-item>

            <vs-collapse-item v-for="(bookingParent,index) in bookingParents" :key="index" >
                <div slot="header" style="border-bottom: inset; display: flex; background-color: rgba(7,104,159,0.75); border-radius: 9px ">
                    <img style="width: 30%; height:30%; display: flex; padding: 9px;" :src="bookingParent.post_img"/>
                    <div style="width: 70%; display: flex; padding: 9px; flex-wrap: wrap; font-family: 'Pavanam', sans-serif;">
                        <p style="width: 100%; margin: 1px">Name: {{bookingParent.type}}</P>
                        <p style="width: 100%; margin: 1px">Speciality: {{bookingParent.category}}</P>
                        <p style="width: 100%; margin: 1px">Price: {{bookingParent.price}}</P>
                    </div>
                </div>
                <p style="width: 100%; margin: 1px; margin-left: 10px">Status: {{bookingParent.booking.status}}</P>
                <p style="width: 100%; margin: 1px; margin-left: 10px">Start at: {{bookingParent.booking.start_date| date('DD MMMM HH:MM')}}</P>
                <p style="width: 100%; margin: 1px; margin-left: 10px">End at: {{bookingParent.booking.end_date| date('DD MMMM HH:MM')}}</P>
            </vs-collapse-item>

    </div>
</template>

<script>
import acceptrejectcard from '@/Profile/components/MyPostscomponents/AcceptRejectCard.vue'
import { dateFilter } from "vue-date-fns"
const axios = require("axios");

export default {

    filters: {
        date: dateFilter
    },
    name:'bothpost',
    components:{
        acceptrejectcard,

    },
    data(){
        return{
            posts: [],
            bookingParents: [],
            test: {},
            name:'',
            speciality:'123123',
            price:'123',
            location: '123',
            status:'pending',
            userId: null
        }
    },
    methods: {
        postByUser() {
            return axios.get(`http://127.0.0.1:3333/user/${this.userId}/post`)
        },

        postChild(pid) {
            return axios.get(`http://127.0.0.1:3333/allBooking/${pid}`)
        },

        bookingByUser() {
            return axios.get(`http://127.0.0.1:3333/user/${this.userId}/bookingPending`)
        },

        bookingParent(pid) {
            return axios.get(`http://127.0.0.1:3333/onePost/${pid}`)
        },

        async getPost() {
            let response = await this.postByUser()
            let post = response.data
            for (let i = 0; i < post.length; i++) {
                let pid = post[i].id
                let childResponse = await this.postChild(1)
                let child = childResponse.data
                post[i]['booking'] = child
                console.log(post[i])
                this.posts.push(post)
            }

        },

        async getBooking() {
            let response = await this.bookingByUser()
            let bookings = response.data
            for (let i = 0; i < bookings.length; i++) {
                // this.test = bookings[i]
                let pid = bookings[i].post_id
                let parentResponse = await this.bookingParent(pid)
                let bookingParent = parentResponse.data

                bookingParent['booking'] = bookings[i]
                this.bookingParents.push(bookingParent)
                // console.log(this.bookingParents)           
            } 
        }
    },
    mounted() {
        this.userId = localStorage.getItem('userId')
        this.getBooking()
        this.getPost()
    }

}
</script>

<style scoped>


</style>