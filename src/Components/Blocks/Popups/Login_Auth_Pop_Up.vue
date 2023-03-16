<template>
  <div class="popup-wrapper login-popup-wrapper" :class="{ active: showLogin }">
    <div class="popupOverlay_login"></div>
    <div class="popup-container popup-container-login">
      <div class="login-box">
        <h5>Sign in</h5>
        <p class="link-text">https://prihcs.com/</p>
        <form id="form_id" method="post" name="myform">
          <div class="username-field">
            <label class="label">User Name </label>
            <input type="text" name="username" id="username" /> <br />
          </div>
          <div class="password-field">
            <label class="label">Password </label>
            <input type="password" name="password" id="password" @keyup.enter="validate" />
            <br />
          </div>
          <div class="buttons">
            <input type="button" class="btn btn-submit" value="Sign in" id="submit" v-on:keyup.enter="validate"
              @click="validate" />
            <input type="button" class="btn btn-cancel" value="Cancel" @click="cancelLogin" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Login_Auth_Pop_Up",
  components: {},
  data() {
    return {
      showLogin: true,
    };
  },
  created() {
    window.addEventListener("load", this.onWindowLoad);
  },
  destroyed() {
    window.addEventListener("load", this.onWindowLoad);
  },
  methods: {
    closeLogin() {
      this.$data.showLogin = false;
      const $body = document.querySelector("body");
      document.querySelector("body").style.overflow = "visible";
      document.querySelector("body").style.paddingRight = "0";
      document.querySelector("body").classList.remove("showPopup");
    },
    cancelLogin() {
      document.querySelector(".popup-wrapper-cancel").style.display = "block";
      document.querySelector("body").classList.add("showPopup");
      this.$data.showLogin = false;
    },

    onWindowLoad() {
      if (this.$data.showLogin) {
        const $body = document.querySelector("body");
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".popup-wrapper-cancel").style.display = "none";
        document.querySelector("body").style.paddingRight = "17px";
        document.querySelector("body").classList.add("showPopup");
      }
    },

    // Below function Executes on click of login button.
    validate() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      if (username === "pristage" && password === "Digital2020!") {
        this.$data.showLogin = false;
        const $body = document.querySelector("body");
        document.querySelector("body").style.overflow = "visible";
        document.querySelector("body").style.paddingRight = "0";
        document.querySelector("body").classList.remove("showPopup");
      } else {
        alert("Please enter correct username and password");
      }
    },
  },

};
</script>

<style lang="scss" src="./Login_Auth_Pop_Up.scss" >

</style>
