<template>
    <div>

            <vs-collapse-item>
                <div slot="header" style="border-bottom: inset; display: flex; background-color: rgba(255,126,103,0.75); border-radius: 9px ">
                    <img style="width: 30%; display: flex; padding: 9px;" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"/>
                    <div style="width: 70%; display: flex; padding: 9px; flex-wrap: wrap; font-family: 'Pavanam', sans-serif;">
                        <p style="width: 100%; margin: 1px">Name: demanding</P>
                        <p style="width: 100%; margin: 1px">Speciality: {{speciality}}</P>
                        <p style="width: 100%; margin: 1px">Price: {{price}}</P>
                    </div>
                </div>
                <p style="width: 100%; margin: 1px; margin-left: 10px">Location: {{location}}</P>
                <acceptrejectcard/>

            </vs-collapse-item>
            
            <vs-collapse-item>
                <div slot="header" style="border-bottom: inset; display: flex; background-color: rgba(7,104,159,0.75); border-radius: 9px  ">
                    <img style="width: 30%; display: flex; padding: 9px;" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"/>
                    <div style="width: 70%; display: flex; padding: 9px; flex-wrap: wrap; font-family: 'Pavanam', sans-serif;">
                        <p style="width: 100%; margin: 1px">Name: offering</P>
                        <p style="width: 100%; margin: 1px">Speciality: {{speciality}}</P>
                        <p style="width: 100%; margin: 1px">Price: {{price}}</P>
                    </div>
                </div>
                <p style="width: 100%; margin: 1px; margin-left: 10px">Status: {{status}}</P>
                <p style="width: 100%; margin: 1px; margin-left: 10px">Location: {{location}}</P>
            </vs-collapse-item>

    </div>
</template>

<script>
import acceptrejectcard from '@/Profile/components/MyPostscomponents/AcceptRejectCard.vue'


export default {
    name:'bothpost',
    components:{
        acceptrejectcard,

    },
    data(){
        return{
            posts: Array,
            name:'',
            speciality:'123123',
            price:'123',
            location: '123',
            status:'pending'
        }
    }

}
</script>

<style scoped>


</style>