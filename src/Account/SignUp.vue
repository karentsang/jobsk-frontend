<template>
  <vs-row vs-justify="center" style="margin-bottom: 25px; margin-top: 25px">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
      <vs-card class="cardx" style="padding: 10px; margin: 20px 0px;">
        <div slot="header">
          <h3 style="font-family: 'Dosis', sans-serif;">
            Sign up below
            <!-- <vs-alert active="true">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </vs-alert> -->
          </h3>
        </div>
        <div>
          <div slot="extra-content" class="googleCard2">
          
          <GoogleLogin :params="params":renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure" style="border:none"></GoogleLogin>
            
          </div>
          <div
            class="centerx labelx"
            style="display:flex; flex-direction: column; align-content: space-around; margin: 30px;"
          >
            <vs-input
              size="large"
              v-on:keyup.enter="put"
              v-model="firstname"
              placeholder="Name"
              class="inputbox2"
            />
            <vs-input
              size="large"
              v-on:keyup.enter="put"
              v-model="email"
              placeholder="Email"
              class="inputbox2"
            />
            <vs-input
              size="large"
              v-on:keyup.enter="put"
              v-model="password"
              type="password"
              placeholder="Password"
              class="inputbox2"
            />
            <vs-button
              @click="put"
              color="danger"
              type="gradient"
              class="button2"
            >Sign Up</vs-button>
          </div>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
const axios = require("axios");
import GoogleLogin from "vue-google-login";

export default {
  name: "SignUpCard",
  components: {
    GoogleLogin
  },
  data() {
    return {
      email: null,
      password: null,
      firstname:null,
      token: "",
      colorx: "#c72a75",
      colorx2: "#5252e8",
      params: {
        client_id:
          "1011304475882-egk0vrmfcfsfgvsuhjtq60c2fs5dl4dj.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    };
  },
  props: {
    //params: Object,
    // It gets called if the action (login/logout) is successful.
    // onSuccess: Function,
    // It gets called if the action (login/logout) fails.
    onFailure: Function,
    // It determines if the button is for logging in or for logging out.
    // By default is false so you only need to add it for the logout button
    logoutButton: Boolean
    // Optional, if provided will call gapi.signin2.render with the provided params and render a button with google UI
    // renderParams:
  },
  methods: {
    test() {
      this.$swal({
        title : "Thanks for registering!", 
        text : "You are ready to start", 
        icon: "success", 
        button: "Start exploring"
        })
        .then(() => {
          document.location.href="/"
        })
    },

    post() {
      return axios.post("http://127.0.0.1:3333/register", {
        email: this.email,
        password: this.password,
        firstname: this.firstname
      });
    },

    async put() {
      try {
        let response = await this.post();
        this.token = response.data.access_token.token;
        this.userId = response.data.user.id        

        localStorage.setItem("token", this.token);
        localStorage.setItem("user", this.email);
        localStorage.setItem("userId", this.userId);
        
      } catch(err) {
        this.$vs.notify(
          {
            title:'Signup failed',
            text:'Wrong username/password',
            color:'danger',
            position: 'top-right'
          })
      }
    },

    async onSuccess(googleUser) {
      console.log(googleUser);
      // This only gets the user information: id, name, imageUrl and email
      // console.log(googleUser.getBasicProfile());
      this.email = googleUser.getBasicProfile().getEmail()
      let uid = googleUser.getBasicProfile().getId()
      let firstname = googleUser.getBasicProfile().getName()
      let img = googleUser.getBasicProfile().getImageUrl()
      let response = await axios.post("http://127.0.0.1:3333/oauth",{
        email: this.email,
        uid: uid,
        firstname: firstname,
        img: img
      })
      this.token = response.data.access_token.token
      this.userId = response.data.user.id

      localStorage.setItem("token", this.token);
      localStorage.setItem("user", this.email);
      localStorage.setItem("userId", this.userId);
      
      this.test()
    }
  }
};
</script>

<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  background-color: #42b983;
  cursor: pointer;
  color: #fff;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
}
vs-input {
  margin: 10px;
}

.googleCard2 {
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  padding:20px;
}
.googleCard2:hover {
  cursor: pointer;
}

.googleLogin2 {
  width: 82%;
  margin: 28px 0px;
  display: flex;
  justify-content: center;
  color: white;
}

.inputbox2 {
  margin: 10px 0px 0px;
  width: 100% !important;
}

.button2 {
  margin: 10px auto;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>