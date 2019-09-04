<template>
  <div>
    <login/>
  </div>
</template>

<script>
import login from '@/Account/components/loginCard.vue'
import signup from '@/Account/components/signUpCard.vue'

export default {
  name: 'Login',
  components:{
      login,
      signup
  }
}
</script>

<style>

</style>