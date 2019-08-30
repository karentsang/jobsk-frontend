<template>
  <div>

    <div class='postbutton' style="width:83%; margin: auto; margin-top: 10px; text-align: center;">
        <vs-button @click="openPostCompleted()" color="danger" type="border" style="width: 80%; height:40px; margin-bottom: 15px;">Post it</vs-button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'postbutton',
  components:{
    
  },

    methods:{
        openPostCompleted(){
            this.$vs.dialog({
                type:'alert',
                color: 'danger',
                title: `Confirm`,
                text: 'Your post is created.',
                accept:this.acceptAlert,
            })
        },
        acceptAlert(){
            // return to homepage
        },
    },

}
</script>

<style>

</style>