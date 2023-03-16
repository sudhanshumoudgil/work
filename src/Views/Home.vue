<template src="./Home.html"></template>

<script>
import { mapState } from "vuex";
import ScrollDepthAnalytics from "@/mixins/ScrollDepthAnalytics";
import PatientProfileBox from "@/Components/Blocks/PatientProfileBox/PatientProfileBox";
import Login_Auth_Pop_Up from "@/Components/Blocks/Popups/Login_Auth_Pop_Up";
import Login_Cancel_Pop_Up from "@/Components/Blocks/Popups/Login_Cancel_Pop_Up";

export default {
  name: "HomePage",
  components: {
    PatientProfileBox,
    Login_Auth_Pop_Up,
    Login_Cancel_Pop_Up,
  },
  data() {
    return {
      isActiveOverlay: false,
      deadInteractivity: true,
      currentSection: 0,
      sections: {},
      sectionScene: [],
      options: {
        container: "body",
        easing: "ease-in",
        offset: 0,
      },
      publicPath: process.env.BASE_URL,
      microbeAnimationScene_1: {},
      popupTimer: null,
      backplateTimer: null,
      resizeTimer: null,
      initTileProps: [],
      postFontSize: 1,

      ProfileBox: [
        {
          image: require("../Assets/Img/img-christine.png"),
          name: 'Christine<sup>*</sup>',
          des: '63-year-old female',
        },
        {
          image: require("../Assets/Img/img-thomas.png"),
          name: 'Thomas<sup>*</sup>',
          des: '49-year-old male',
        },
      ],
    };
  },
  computed: {
    ...mapState([
      "userAgent",
      "urls",
      "animationsData",
      "controllerExist",
      "mainMenu",
      "activeSection",
    ]),
    isIE() {
      return this.userAgent.browser.name === "ie";
    },
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {
    clickAnchor(anchor, offset) {
      if (typeof offset !== "undefined") {
        this.$scrollTo(anchor, 750, {
          container: "body",
          easing: "ease-in",
          offset: offset,
        });
      } else {
        this.$scrollTo(anchor, 750, this.options);
      }
    },
  },
  mounted() {
    let checkScreenTest = document
      .getElementById("app")
      .classList.contains("screentest");

    if (!this.$route.query.screentest || !checkScreenTest) {
      var checkExist = setInterval(() => {
        if (document.querySelector(".preloadHide")) {
          this.sections = document.All("section");
          this.initSectionsProgress();
          this.initContentAnimation();
          clearInterval(checkExist);
        }
      }, 100);
    }

    if (window.innerWidth >= 768) {
      this.initCardsAnimation();
    }
  },
  watch: {
    activeSection(newVal) { },
  },
  mixins: [ScrollDepthAnalytics],
};
</script>

<style lang="scss" src="./Home.scss" scoped>

</style>
