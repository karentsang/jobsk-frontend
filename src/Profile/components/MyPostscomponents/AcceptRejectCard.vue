<template>
  <div>

    <div class="acceptrejectcard" style=" display: flex;">
        <img style="width: 30%; display: flex; padding: 13px;" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"/>
        <div style="width: 60%; display: flex; padding: 13px; flex-wrap: wrap; font-family: 'Pavanam', sans-serif;">
            <p style="width: 100%; margin: 1px">Name: {{name}}</P>
            <p style="width: 100%; margin: 1px">Speciality: {{speciality}}</P>
            <p style="width: 100%; margin: 1px">Price: {{price}}</P>
        </div>
        <div style="margin-top: 3px">
            <vs-button @click="openAlert1" icon-no-border icon="done" color='#07689F' :type="acceptbutton"></vs-button>
            <vs-button @click="openAlert2" icon-no-border icon="clear" color='#ff7e67' :type="rejectbutton"></vs-button>
        </div>
    </div>
  </div>
</template>


<script>

export default {
    
    name: 'acceptrejectcard',
    components: {    
        
    },
    data() {
        return {
            acceptbutton: 'flat',
            rejectbutton: 'flat',
            name:'123123123',
            speciality:'123123',
            price:'123123',
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
            text: 'Once you accept it, a declined notification will send to opposite.',
            accept:this.acceptAlert2
            })
        },
        acceptAlert2(){
            //that propose post is removed
        },
    }
}





</script> 

<style>



</style>