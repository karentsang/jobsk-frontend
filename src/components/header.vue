<template>
    <div class="header" style="width: 100%; display: flex; background-color: rgb(50,75,125); height: 83px">

        <div ref="parentSidebar" id="parentx" style="width: 20%; display: flex; place-content: center; ">
            
            <vs-button v-show="isExistingUser" @click="active=!active"  icon-no-border icon="account_circle" color="black" type="flat" style="align-self: center; padding:0px; color: white;"></vs-button>
            <div v-if="!isExistingUser" style="width: 20%;" ></div>
            <vs-sidebar default-index="1"  color="danger" class="sidebarx" spacer v-model="active">

                <div class="header-sidebar" slot="header">
                    <vs-avatar style="margin-left: 10px"  size="70px" :src="profileimg"/>

                    <h4>
                    {{name}}
                    </h4>

                </div>

                <vs-sidebar-item @click="logout" color="#07689F" index="1" icon="account_box">
                    <router-link to="/">
                        Home
                    </router-link>
                </vs-sidebar-item>

                <vs-sidebar-item  color="#07689F" index="2" icon="question_answer">
                    <router-link :to="{ name: 'mypost'}">
                        Your Job Post
                    </router-link>
                </vs-sidebar-item>

                <div class="footer-sidebar" slot="footer">
                    <vs-button @click="out" icon="reply" color="danger" type="flat"><router-link to="/">Log out</router-link></vs-button>
                    <!-- <vs-button icon="settings" color="#07689F" type="flat"></vs-button> -->
                </div>

            </vs-sidebar>
        </div>

        <div calss="logo" style="text-align: center; width: 100%; margin: auto;">
            <router-link to="/">
                <img style="width: 200px; align-self: center; margin: auto;" src="https://res.cloudinary.com/suang/image/upload/v1567573042/JOBSK/Screen_Shot_2019-09-04_at_12.56.46_PM_crpiuv.png"/>
            </router-link>
        </div>
        <div v-if="isExistingUser" style="width: 20%;" ></div>
        <vs-button v-show="!isExistingUser" style="text-align: center; width: 20%; padding:0px" color="rgb(50,75,125)" type="filled"><router-link style="color: #ff7e67;" to="/account/login">Join</router-link></vs-button>

    </div>
</template>

<script>
export default {
    name: 'jobskheader',

    // props: {
    //     isExistingUser: Boolean
    // },

    data:()=>({
        active:false,
        name:localStorage.getItem("user"),
        profileimg:"https://cn.i.cdn.tides.test-ti-platform.com/cnapac/content/438/showpage/teen-titans-go%21/sa/showicon.png?w=100&h=100",
        isExistingUser: false
    }),
    mounted() {
        if (localStorage.getItem('token') != null) {
            this.isExistingUser = true
        }
        else {this.isExistingUser = false}    
    },
    methods:{
        out(){
            localStorage.clear("token", this.token);
            localStorage.clear("user", this.email);
            localStorage.clear("userId", this.userId);

            this.logout()
        },
        
        logout(){
            // this.$router.reload({name:"homepage"})
            // this.active = false
            document.location.href="/"
        },
        gopost(){
            this.$route
        }
    },
}    
</script>

<style scoped>

.header-sidebar{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
h4{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}


.footer-sidebar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

</style>