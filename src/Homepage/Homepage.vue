<template>
  <div id='homepage'>

    <div class="slogan" style="width:100%; background-color:#FAFAFA; font-size: 24px; text-align: center;">
        <img  style="width:100%;" src="https://res.cloudinary.com/suang/image/upload/v1567591072/JOBSK/Screen_Shot_2019-09-04_at_5.57.24_PM_ffw8hu.png"/>
    </div>

    <div class="button" style="width:90%; display: flex; place-content: space-evenly; margin:auto; margin-top:10px; margin-bottom:20px;">
        <vs-button color="rgb(50,75,125)" type="border" style="width: 31%; font-size: 15px; font-weight: bold;"><router-link style="color:rgb(50,75,125)" to="/list?type=Offering"><font-awesome-icon icon="dollar-sign"/> Search Jobs</router-link></vs-button>
        <vs-button color="rgb(50,75,125)" type="border" style="width: 31%; font-size: 15px; font-weight: bold;"><router-link style="color:rgb(50,75,125);" to="/list?type=Providing"><font-awesome-icon icon="magic"/> Search Services</router-link></vs-button>
        <vs-button color="#ff7e67" type="border" style="width: 31%; font-size: 14px; font-weight: bold;"><router-link style="color:#ff7e67;" to="/post"><font-awesome-icon icon="bullhorn"/>  Post Jobs + Services</router-link></vs-button>
        <!-- <vs-button color="#07689F" type="border" style="width: 31%; font-size: 17px"><router-link style="color:#07689F;" to="/list?type=Providing">Look for service</router-link></vs-button> -->
    </div>


    <h3 style="width:90%; margin:auto; margin-bottom: 10px;">Popular Services</h3>
    
    <slide :items="item1"/>

    <h3 style="width:90%; margin:auto; margin-bottom: 10px">JOBSK's team members</h3>

    <slide :items="item2"/>


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
  },
  data(){
    return {
      item1:[
          'https://res.cloudinary.com/suang/image/upload/v1567645187/JOBSK/Screen_Shot_2019-09-05_at_8.58.48_AM_idw6vn.png',
          'https://res.cloudinary.com/suang/image/upload/v1567645187/JOBSK/Screen_Shot_2019-09-05_at_8.58.38_AM_ufwkf2.png',
          'https://res.cloudinary.com/suang/image/upload/v1567645187/JOBSK/Screen_Shot_2019-09-05_at_8.59.27_AM_t63ted.png'
        ],
      item2:[
        'https://res.cloudinary.com/suang/image/upload/v1567603879/JOBSK/Screen_Shot_2562-09-04_at_21.02.48_co2adv.png',
        'https://res.cloudinary.com/suang/image/upload/v1567603879/JOBSK/Screen_Shot_2562-09-04_at_21.03.27_rp96vt.png',
        'https://res.cloudinary.com/suang/image/upload/v1567603879/JOBSK/Screen_Shot_2562-09-04_at_21.03.52_npn253.png',
        'https://res.cloudinary.com/suang/image/upload/v1567603878/JOBSK/Screen_Shot_2562-09-04_at_21.04.15_ajny92.png'
      ],
    }
  }
}
</script>

<style>
#homepage{
  font-family: 'Dosis', sans-serif;
  font-weight: 100;
}
h3{
  font-family: 'Dosis', sans-serif;
  font-weight: 500;
  color:black;
}
vs-button{
  font-family: 'Dosis', sans-serif;
  font-weight: 100;
}
</style>