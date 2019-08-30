<template>
    <div class="header" style="width: 100%; display: flex; margin-top: 62px;">

        <div ref="parentSidebar" id="parentx" style="width: 20%; display: flex; place-content: center;">

            <vs-button @click="active=!active"  icon-no-border icon="account_circle" color="black" type="flat" style="align-self: center; padding:0px"></vs-button>
            <vs-sidebar default-index="1"  color="danger" class="sidebarx" spacer v-model="active">

                <div class="header-sidebar" slot="header">
                    <vs-avatar style="margin-left: 10px"  size="70px" :src="profileimg"/>

                    <h4 style="margin-left: 20px">
                    {{name}}
                    </h4>

                </div>

                <vs-sidebar-item  color="#07689F" index="1" icon="question_answer">
                    Post History
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
                    <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
                    <vs-button icon="settings" color="#07689F" type="flat"></vs-button>
                </div>

            </vs-sidebar>
        </div>

        <div calss="logo" style="text-align: center; width: 80%;">
        <img style="width: 200px" src="https://res.cloudinary.com/suang/image/upload/v1567153808/JOBSK/Screen_Shot_2019-08-30_at_4.28.56_PM_ienmcj.png"/>
        </div>

        <vs-button  style="text-align: center; width: 20%; padding:0px" color="#ff7e67" type="flat">Join</vs-button>

    </div>
</template>

<script>
export default {
    name: 'jobskheader',

    data:()=>({
        active:false,
        name:'Suang',
        profileimg:"https://randomuser.me/api/portraits/men/85.jpg"
    })
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