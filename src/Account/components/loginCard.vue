<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
      <vs-card class="cardx" style="padding: 10px; margin: 20px 0px;">
        <div slot="header">
          <h3 style="font-family: Arial;">
            Log In to continue
          </h3>
        </div>

        <div>
          <div slot="extra-content" class="googleCard">
            <vs-button 
            color="#939393" 
            type="border" 
            class="googleLogin">
                <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Log In with Google</GoogleLogin>
            </vs-button>
            
          </div>
          <div
            class="centerx labelx"
            style="display:flex; flex-direction: column; align-content: space-around; margin: 30px;"
          >
            <vs-input
              size="large"
              v-on:keyup.enter="put"
              v-model="email"
              placeholder="Email"
              class="inputbox"
            />
            <vs-input
              size="large"
              v-on:keyup.enter="put"
              v-model="password"
              type="password"
              placeholder="Password"
              class="inputbox"
            />
            <vs-button
              @click="put"
              :color="colorx"
              :gradient-color-secondary="colorx2"
              type="gradient"
              class="button"
            >Log In</vs-button>
          </div>
        </div>

        <div slot="footer" style="margin: 30px 0px;">
          <vs-row vs-justify="center">
            <div style="font-family: Arial;">
              Don't have an account?
              <router-link to="/account/login/signup">Sign Up!</router-link>
            </div>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
const axios = require("axios");
import GoogleLogin from "vue-google-login";

export default {
  name: "logincard",
  components: {
    GoogleLogin
  },
  data() {
    return {
      email: null,
      password: null,
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
    async put() {
      let response = await this.post();
      this.token = response.data.access_token.token;

      localStorage.setItem("token", this.token);
      localStorage.setItem("user", this.email);
    },
    post() {
      return axios.post("http://127.0.0.1:3333/login", {
        email: this.email,
        password: this.password
      });
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

      localStorage.setItem("token", this.token);
      localStorage.setItem("user", this.email);
    }
  }
};
</script>

<style>

vs-input {
  margin: 10px;
}

.vs-card--content {
  border-bottom: 1px solid grey;
}

.googleCard {
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.googleLogin {
  width: 82%;
  margin: 28px 0px;
  display: flex;
  justify-content: center;
  color: white;
}

.inputbox{
  margin: 10px 0px 0px;
  width: 100% !important;
}

.button {
  margin: 10px auto;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>