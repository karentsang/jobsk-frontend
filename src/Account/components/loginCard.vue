<template>
  <vs-row vs-justify="center" style="margin-bottom: 25px; margin-top: 25px">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
      <vs-card class="cardx" style="padding: 10px; margin: 20px 0px;">
        <div slot="header">
          <h3 style="font-family: 'Dosis', sans-serif;">
            Log In to continue
            <!-- <vs-alert active="true">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </vs-alert> -->
          </h3>
        </div>
        <div class="cardBorder">
          <div slot="extra-content" class="googleCard">

                <GoogleLogin :params="params":renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure" ></GoogleLogin>
            
            <br>
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
              color="danger"
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
      userId: null,
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
        title : "Welcome Back!", 
        text : "You are ready to start", 
        icon: "success", 
        button: "Start exploring"
        })
        .then(() => {
          document.location.href="/"
        })
          // { path: '/user', params: { userId } }
          // this.$router.push({ path: '/', query: { loggedIn: true }})
    },

    post() {
        return axios.post("/login", {
          email: this.email,
          password: this.password
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

        this.test()
      } catch(err) {
        this.$vs.notify(
          {
            title:'Login failed',
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
      let response = await axios.post("/oauth",{
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

vs-input {
  margin: 10px;
}

.cardBorder {
  border-bottom: 1px solid grey;
}

.googleCard {
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  padding:20px;
}
.googleCard:hover {
  cursor: pointer;
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