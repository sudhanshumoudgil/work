<template>
  <div id="app" :class="{ screentest: userAgent.screentest, isIE: isIE }">
    <div :class="{ 'main-wrapp': true, 'static-isi': hideIsi }">
      <header-top />
      <header-block />
      <router-view />
      <Isi :hideElement="hideIsi" />
      <Isi :static="true" />
      <Login_Auth_Pop_Up v-if="showLogin"></Login_Auth_Pop_Up>
      <Login_Cancel_Pop_Up v-if="showLoginCancel"></Login_Cancel_Pop_Up>
      <rotate-lock v-if="userAgent.orientation === 'landscape' && userAgent.device.isPhone"></rotate-lock>
      <brand-footer></brand-footer>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
import lockScroll from "@/mixins/lock-scroll";
import handleResize from "@/mixins/handleResize";
import handleOrientation from "@/mixins/handleOrientation";
import fixSafariOffset from "@/mixins/fixSafariOffset";
import { NoParentScrollMixin } from "@/mixins/NoParentScrollMixin";
import HeaderTop from "@/Components/Layouts/Header/HeaderTop";
import HeaderBlock from "@/Components/Layouts/Header/Header";
import BrandFooter from "@/Components/Layouts/Brand/BrandFooter";
import rotateLock from "@/Components/common-blocks/rotate-lock/rotate-lock";
import Login_Auth_Pop_Up from "@/Components/Blocks/Popups/Login_Auth_Pop_Up";
import Login_Cancel_Pop_Up from "@/Components/Blocks/Popups/Login_Cancel_Pop_Up";
import Isi from "@/Components/Blocks/Isi/Isi";
import ReferenceSection from "@/Components/Blocks/Reference/ReferenceSection";

Vue.mixin(lockScroll);

export default {
  name: "App",
  components: {
    "rotate-lock": rotateLock,
    "header-top": HeaderTop,
    "header-block": HeaderBlock,
    BrandFooter,
    basePath: process.env.BASE_URL,
    Isi,
    Login_Auth_Pop_Up,
    Login_Cancel_Pop_Up,
    ReferenceSection
  },
  beforeMount() {
    this.$store.commit(
      "UPDATE_SCREENTEST",
      this.$route.query.screentest || process.env.VUE_APP_SCREENTEST
    );
  },
  mounted() {

  },
  mixins: [
    handleResize,
    handleOrientation,
    fixSafariOffset,
    NoParentScrollMixin,
  ],
  data() {
    return {
      onBottom: false,
      pageBottomPosition: null,
      hideIsi: false,
      showLoginCancel: true,
      showLogin: true,
      showSLL: true,
      showQuestion: true,
      showQuestionOne: true,
    };
  },

  computed: {
    ...mapState(["userAgent"]),
    isIE() {
      return this.userAgent.browser.name === "ie";
    },
    orientation() {
      return this.userAgent.orientation;
    },
    brandFooterHeight() {
      return this.userAgent.width < 1024 ? 38 : 50;
    },
  },
  methods: {
    closeMenu() {
      this.$store.commit("TOGGLE_MOBILE_MENU", false);
    },
    checkOnBottom() {
      this.hideIsi =
        document.querySelector(".isi").getBoundingClientRect().top >=
        document.querySelector(".isi.isi-static").getBoundingClientRect().top -
        this.brandFooterHeight;
    },
    calcVH() {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
    GTMEvents() {
      const sections = [
        { Overview: document.querySelector("#head-section") },
        { Efficacy: document.querySelector(".section1") },
        { Safety: document.querySelector("#safety") },
        { "Patient Identification": document.querySelector("#identification") },
        { "Patient Profile": document.querySelector("#profile") },
        { References: document.querySelector("#screenReferences") },
      ];

      const isInViewport = (section) => {
        const rect = section.getBoundingClientRect();
        return (
          rect.bottom > 0 &&
          rect.right > 0 &&
          rect.left <
          (window.innerWidth || document.documentElement.clientWidth) &&
          rect.top <
          (window.innerHeight / 2 ||
            document.documentElement.clientHeight / 2)
        );
      };

    /*  const sectionView = () => {
        sections.forEach((section) => {
          const name = Object.keys(section)[0];
          section = Object.values(section)[0];
          if (isInViewport(section) && !section.dataset.viewTrack) {
            section.dataset.viewTrack = "true";
            window.dataLayer.push({
              event: "section-view",
              section: name,
              subsection: "-",
            });
          }
        });
      };
*/
     /* const sectionClick = () => {
        const sections = [
          { Efficacy: ".header-link--1" },
          { "Patient Identification": ".header-link--2" },
          { "Patient Profile": ".header-link--3" },
          { Safety: ".header-link--4" },
        ];
        sections.forEach((section) => {
          const name = Object.keys(section)[0];
          document.querySelectorAll(section[name]).forEach((item) => {
            item.addEventListener("click", () => {
              dataLayer.push({
                event: "section-click",
                section: name,
                subsection: "-",
              });
            });
          });
        });
      };*/
   /*   const buttonClick = () => {
        const buttons = [
          { "Keytruda Logo (header)": ".container__header-left-logo" },
          {
            "Learn more about KEYNOTE-045 Trial Design":
              "#profile .white-horizontal-card-link",
          },
          { '"Move to top"': ".arrow_up" },
          { References: "#toggleReferences" },
        ];
        buttons.forEach((button) => {
          const name = Object.keys(button)[0];
          document.querySelectorAll(button[name]).forEach((item) => {
            item.addEventListener("click", () => {
              dataLayer.push({
                event: "button-click",
                "page-name": "keytruda-ucff",
                "button-name": name,
              });
            });
          });
        });
      };*/

    //  sectionView();
    //  buttonClick();
    //  sectionClick();
    //  window.addEventListener("scroll", sectionView);
     // window.addEventListener("resize", sectionView);
    },
  },
  mounted() {
    document.addEventListener('scroll',() => {    
      this.checkOnBottom();
    });  
  },
  watch: {
    orientation() {
      this.closeMenu();
      this.GTMEvents();
    },
  },
};
</script>

<style lang="scss" src="./Styles/Main.scss">

</style>
