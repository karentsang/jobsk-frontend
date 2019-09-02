<template>
  <div id='homepage'>

    <div class="slogan" style="width:100%; height: 200px; background-color:#FAFAFA; font-size: 24px; text-align: center; padding: 51px;">
        Find your local service, earn extra money with your experties, in JOBSK
    </div>

    <div class="button" style="width:90%; display: flex; place-content: space-evenly; margin:auto; margin-top:10px; margin-bottom:20px;">
        <vs-button color="#07689F" type="border" style="width: 30%; font-size: 17px"><router-link style="color:#07689F" to="/list">Look for Job</router-link></vs-button>
        <vs-button color="#ff7e67" type="border" style="width: 30%; font-size: 17px"><router-link style="color:#ff7e67;" to="/post">Post my JOBSK</router-link></vs-button>
        <vs-button color="#07689F" type="border" style="width: 30%; font-size: 17px"><router-link style="color:#07689F;" to="/list">Look for service</router-link></vs-button>
    </div>

    <h3 style="width:90%; margin:auto; margin-bottom: 10px;">Popular services</h3>
    
    <slide :items="[1,2,3]"/>

    <h3 style="width:90%; margin:auto; margin-bottom: 10px">Popular JOBSKer</h3>

    <slide :items="[1,2]"/>


    <h3 style="width:90%; margin:auto; margin-bottom: 10px; text-align: center;">Be part of JOBSK community</h3>

  </div>
</template>

<script>
import slide from '@/Homepage/components/slide.vue'
import jobskheader from '@/components/header.vue'
import jobskfooter from '@/components/footer.vue'


export default {
  name: 'Homepage',
  components:{
      slide,
      jobskheader,
      jobskfooter,
  }
}
</script>

<style>
#homepage{
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
}
h3{
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
}
button{
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
}
</style>