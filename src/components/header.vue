<template>
    <div class="header" style="width: 100%; display: flex; margin: 15px 0px;">

        <div ref="parentSidebar" id="parentx" style="width: 20%; display: flex; place-content: center;">

            <vs-button @click="active=!active"  icon-no-border icon="account_circle" color="black" type="flat" style="align-self: center; padding:0px"></vs-button>
            <vs-sidebar default-index="1"  color="danger" class="sidebarx" spacer v-model="active">

                <div class="header-sidebar" slot="header">
                    <vs-avatar style="margin-left: 10px"  size="70px" :src="profileimg"/>

                    <h4>
                    {{name}}
                    </h4>

                </div>

                <vs-sidebar-item  color="#07689F" index="1" icon="question_answer">
                    <router-link to="/profile/mypost">
                        Your Post
                    </router-link>
                </vs-sidebar-item>

                <vs-sidebar-item color="#07689F" index="2" icon="gavel">
                    Service Categories
                </vs-sidebar-item>

                <vs-divider color="#07689F" icon="person" position="left">
                    User
                </vs-divider>

                <vs-sidebar-item color="#07689F" index="3" icon="account_box">
                    Profile
                </vs-sidebar-item>

                <div class="footer-sidebar" slot="footer">
                    <vs-button icon="reply" color="danger" type="flat"><router-link to="/">log out</router-link></vs-button>
                    <vs-button icon="settings" color="#07689F" type="flat"></vs-button>
                </div>

            </vs-sidebar>
        </div>

        <div calss="logo" style="text-align: center; width: 100%;">
            <router-link to="/">
                <img style="width: 200px" src="https://res.cloudinary.com/suang/image/upload/v1567153808/JOBSK/Screen_Shot_2019-08-30_at_4.28.56_PM_ienmcj.png"/>
            </router-link>
        </div>
        <div v-if="isExistingUser" style="width: 20%;" ></div>
        <vs-button v-show="!isExistingUser" style="text-align: center; width: 20%; padding:0px" color="white" type="flat"><router-link style="color: #ff7e67;" to="/account/login">Join</router-link></vs-button>

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
        name:'Suang',
        profileimg:"https://randomuser.me/api/portraits/men/85.jpg",
        isExistingUser: false
    }),
    mounted() {
        if (localStorage.getItem('token') != null) {
            this.isExistingUser = true
        }
        else {this.isExistingUser = false}    
    }
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