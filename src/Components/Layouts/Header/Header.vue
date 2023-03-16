<template>
  <div class="headerWrap">
    <div class="header">
      <div class="header__logo">
        <router-link :to="{ name: 'home' }"><img src="@/Assets/Img/Opdivo-Logo.svg" alt="Patient Journey"
        /></router-link>
      </div>
      <div class="header__right">
        <div class="header__prescribing"><img src="@/Assets/Img/PDF-Icon.svg" alt=""
        /> <a :href="urls.PI.link" target="_blank">{{urls.PI.text}}</a></div>
        <div
          class="header__menuToggle"
          :class="{ active_menu: this.mobileMenuState }"
          @click="toggleMenu"
        >
        </div>
        <div id="headerNav"
          class="header__collapseWrapper"
          :class="{
            'header__collapseWrapper  header__collapseWrapper--open':
              this.mobileMenuState,
          }"
        >
          <ul class="header__dropdown" :class="{ isOpen }">
            <li><a href="#"><img src="@/Assets/Img/img-meet-thomas.png" alt="Thomas"
        /> Meet Christine</a></li>
            <li><a href="#"><img src="@/Assets/Img/img-meet-christine.png" alt="Christine"
        /> Meet Thomas</a></li>
            <li><a :href="urls.PI.link" target="_blank"><img src="@/Assets/Img/PDF-Icon-White.svg" alt=""
        /> {{urls.PI.text}}</a></li>
          </ul>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  components: {},
  data() {
    return {
      isOpen: false,
      isScrolled: false,
      options: {
        container: "body",
        easing: "ease-in",
        offset: -150,
      },
    };
  },
  computed: {
    ...mapState([
      "userAgent",
      "urls",
      "mobileMenuState",
      "activeSection",
      "mainMenu",
    ]),
    routes() {
      return this.$router.options.routes;
    },
    prevpageid() {
      if (this.$route.meta.id == 1) {
        return this.$router.options.routes.length - 1;
      } else {
        return this.$route.meta.id - 1;
      }
    },
    nextpageid() {
      if (this.$route.meta.id == this.$router.options.routes.length - 1) {
        return "1";
      } else {
        return this.$route.meta.id + 1;
      }
    },
  },
  methods: {
    scrollToTop() {
      this.$scrollTo("#head-section", 500);
    },
    scrollToAnchor(anchor) {
      if (this.userAgent.window.width < 1024 && anchor !== "#head-section") {
        this.toggleMenu();
      }
      this.$scrollTo(anchor, 750, this.options);
    },
    toggleMenu() {
      this.$store.commit("TOGGLE_MOBILE_MENU", !this.mobileMenuState);
    },
    detectScrollYPosition() {
      this.isScrolled = window.pageYOffset > 0;

      if(this.mobileMenuState == true){
        this.$store.commit("TOGGLE_MOBILE_MENU", !this.mobileMenuState);
      }
    },
    mouseover: function () {
      this.isOpen = true;
      document.getElementById("dropdownNav").style.top = "64px";
    },

    mouseleave: function () {
      this.isOpen = false;
      document.getElementById("dropdownNav").style.top = "-64px";
    },
    scrollFunction() {
      if (document.body.scrollTop > 0 ||  document.documentElement.scrollTop > 0 ) {
        document.getElementsByClassName('headerTopWrap')[0].classList.add("topSticky");
        document.getElementsByClassName('headerWrap')[0].classList.add("sticky");
      } else {
        document.getElementsByClassName('headerTopWrap')[0].classList.remove("topSticky");
        document.getElementsByClassName('headerWrap')[0].classList.remove("sticky");
      }
    },
  },
  watch: {
    mobileMenuState() {
      const $body = document.querySelector("body");

      if (this.mobileMenuState) {
        $body.classList.add("popup-open");
      } else {
        $body.classList.remove("popup-open");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.detectScrollYPosition);
    window.addEventListener("scroll", this.scrollFunction);

    document
      .querySelector(".header__collapseWrapper ul li")
      .addEventListener("click", function () {
        document.querySelector(".header__menuToggle").click();
      });
  },
};
</script>

<style lang="scss" src="./Header.scss" scoped>
</style>
