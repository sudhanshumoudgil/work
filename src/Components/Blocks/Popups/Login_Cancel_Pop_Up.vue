<template>
  <div class="popup-wrapper popup-wrapper-cancel" :class="{ active: showLoginCancel }">
    <div class=" popupOverlay_loginCancel"></div>
    <div class="popup-container-loginCancel">
      <div class="loginCancel-box">
        <h4 class="info-heading">ERROR 401 - Unauthorized!</h4>
        <p class="info"><strong>The following error occurred:</strong></p>
        <p class="info info-text">The URL requested requires authorisation.</p>
        <p class="info info-text">Please contact the webmaster with any queries.</p>
      </div>
    </div>
  </div>
</template>
    
<script>

export default {
  name: "Login_Cancel_Pop_Up",
  components: {},
  data() {
    return {
      showLoginCancel: true,
    };
  },

};
</script>

<style lang="scss" src="./Login_Cancel_Pop_Up.scss" >

</style>
  