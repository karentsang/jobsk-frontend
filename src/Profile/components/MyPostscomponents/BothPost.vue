<template>
    <div>

            <vs-collapse-item>
                <div slot="header" style="border-bottom: inset; display: flex; background-color: rgba(255,126,103,0.75); border-radius: 9px ">
                    <img style="width: 30%; height:30%; display: flex; padding: 9px;" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"/>
                    <div style="width: 70%; display: flex; padding: 9px; flex-wrap: wrap; font-family: 'Pavanam', sans-serif;">
                        <p style="width: 100%; margin: 1px">Name: demanding</P>
                        <p style="width: 100%; margin: 1px">Speciality: {{speciality}}</P>
                        <p style="width: 100%; margin: 1px">Price: {{price}}</P>
                    </div>
                </div>
                <p style="width: 100%; margin: 1px; margin-left: 10px">Location: {{location}}</P>
                <acceptrejectcard/>

            </vs-collapse-item>
            <p>{{bookingParents}}</p>
            <vs-collapse-item>
                <div slot="header" style="border-bottom: inset; display: flex; background-color: rgba(7,104,159,0.75); border-radius: 9px ">
                    <img style="width: 30%; height:30%; display: flex; padding: 9px;" :src="bookingParents.post_img"/>
                    <div style="width: 70%; display: flex; padding: 9px; flex-wrap: wrap; font-family: 'Pavanam', sans-serif;">
                        <p style="width: 100%; margin: 1px">Name: {{bookingParents.type}}</P>
                        <p style="width: 100%; margin: 1px">Speciality: {{bookingParents.category}}</P>
                        <p style="width: 100%; margin: 1px">Price: {{bookingParents.price}}</P>
                    </div>
                </div>
                <p style="width: 100%; margin: 1px; margin-left: 10px">Status: {{status}}</P>
                <p style="width: 100%; margin: 1px; margin-left: 10px">Location: {{location}}</P>
            </vs-collapse-item>

    </div>
</template>

<script>
import acceptrejectcard from '@/Profile/components/MyPostscomponents/AcceptRejectCard.vue'
const axios = require("axios");

export default {
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

        bookingByUser() {
            return axios.get(`http://127.0.0.1:3333/user/3/bookingPending`)
        },

        bookingParent(pid) {
            return axios.get(`http://127.0.0.1:3333/onePost/${pid}/`)
        },

        async getPost() {
            let posts = await this.postByUser()
            this.posts = posts

        },

        async getBooking() {
            let response = await this.bookingByUser()
            let bookings = response.data
            for (let i = 0; i < bookings.length; i++) {
                // this.test = bookings[i]
                let pid = bookings[i].post_id
                let bookingParent = await this.bookingParent(pid)
                bookingParent['booking'] = bookings[i]
                console.log(bookingParent)
                this.bookingParents.push(bookingParent)
                //check if bookingparent is in parent array
                // if (parents.includes(bookingParent)) {
                //     //extract the parent and add the booking to the parent
                // }
                // else {
                //     parents.push(bookingParent)
                // }
            } 
        }
    },
    mounted() {
        this.userId = localStorage.getItem('userId')
        this.getBooking()
    }

}
</script>

<style scoped>


</style>