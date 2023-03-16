<template>
  <div class="popup-wrapper popup-wrapper-ssl" :class="{ active: showSLL }">
    <div class="popupOverlay"></div>
    <div class="popup-container popup-container-ssl">
      <span class="popup-container__close" @click="closeSSL">X</span>
      <div class="safety-information">
        <h3>SELECTED SAFETY INFORMATION</h3>
        <h4>WARNING: EMBRYO-FETAL TOXICITY</h4>
        <ul class="list">
          <li>
            Exposure to WELIREG during pregnancy can cause embryo-fetal harm.
          </li>
          <li>Verify pregnancy status prior to the initiation of WELIREG.</li>
          <li>
            Advise patients of these risks and the need for effective
            non-hormonal contraception as WELIREG can render some hormonal
            contraceptives ineffective.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SSL",
  components: {},
  data() {
    return {
      showSLL: true,
    };
  },
  created() {
    window.addEventListener("load", this.onWindowLoad);
  },
  destroyed() {
    window.addEventListener("load", this.onWindowLoad);
  },
  methods: {
    closeSSL() {
      this.$data.showSLL = false;
      const $body = document.querySelector("body");
      document.querySelector("body").style.overflow = "visible";
      document.querySelector("body").style.paddingRight = "0";
      document.querySelector("body").classList.remove("showPopup");
    },
    onWindowLoad() {
      if (this.$data.showSLL) {
        const $body = document.querySelector("body");
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector("body").style.paddingRight = "17px";
        document.querySelector("body").classList.add("showPopup");
      }
    },
  },
};
</script>