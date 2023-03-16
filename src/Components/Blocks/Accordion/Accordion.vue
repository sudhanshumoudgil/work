<template>
  <div :class="{ 'accordion references': true, 'accordion-opened': show }" :id="screenId">
    <div class="accordion_header" :id="toggleId" @click="toggleAccordion">
      <div class="references-top-title">
        <slot name="title"> References </slot>
      </div>
      <div class="references-top-icon" v-if="titleIcon">
        <slot name="titleIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
            <g fill="none" fill-rule="evenodd">
              <g>
                <g transform="translate(-228 -464) translate(228 464)">
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#3C61AD" />
                  <path stroke="#FFF" d="M5.561 7.116L9.561 11.116 13.561 7.116"
                    transform="matrix(1 0 0 -1 0 18.232)" />
                </g>
              </g>
            </g>
          </svg>
        </slot>
      </div>
    </div>

    <transition name="accordion" :css="!this.$route.query.screentest" v-on:before-enter="beforeEnter" v-on:enter="enter"
      v-on:before-leave="beforeLeave" v-on:leave="leave">
      <div class="accordion_body padding_mobile" v-if="show">
        <div class="accordion_body_inner">
          <slot name="innerContent"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      show: false,
    };
  },
  props: {
    defaultOpened: {
      type: Boolean,
      default: true,
    },
    toTopOnOpen: {
      type: Boolean,
      default: true,
    },
    titleIcon: {
      type: Boolean,
      default: true,
    },
    toggleId: {
      type: String,
      default: "",
    },
    screenId: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.show = this.defaultOpened;
    window.addEventListener(
      "resize",
      self.checkAccordionHeightAfterWindowResize
    );
  },
  destroyed() {
    window.removeEventListener(
      "resize",
      self.checkAccordionHeightAfterWindowResize
    );
  },
  methods: {
    toggleAccordion() {
      this.show = !this.show;
      this.$emit("changeState", this.show);
      if (this.show && this.toTopOnOpen && !this.$route.query.screentest) {
        this.scrollToTopPage();
      }
    },
    beforeEnter: function (el) {
      el.style.height = "0";
      el.style.minHeight = "0";
    },
    enter: function (el) {
      let shift = 16;
      if (window.innerWidth < 768) {
        shift = 16;
      }
      el.style.height = el.scrollHeight + shift + "px";
      setTimeout(() => {
        el.style.minHeight = el.scrollHeight + "px";
      }, 1000);
    },
    beforeLeave: function (el) {
      let shift = 16;
      if (window.innerWidth < 768) {
        shift = 16;
      }
      el.style.height = el.scrollHeight + shift + "px";
    },
    leave: function (el) {
      el.style.height = "0";
      el.style.minHeight = "0";
    },
    checkAccordionHeightAfterWindowResize() {
      if (this.show) {
        this.$el.querySelector(".accordion_body").style.height = "auto";
        this.$el.querySelector(".accordion_body").style.minHeight = "0";
        let that = this;
        setTimeout(function () {
          console.log(
            that.$el.querySelector(".accordion_body").clientHeight - 80
          );
          that.$el.querySelector(".accordion_body").style.height =
            that.$el.querySelector(".accordion_body").clientHeight - 80 + "px";
          that.$el.querySelector(".accordion_body").style.minHeight =
            that.$el.querySelector(".accordion_body").clientHeight - 80 + "px";
        });
      }
    },
    scrollToTopPage() {
      let y = this.$el.getBoundingClientRect().top + window.pageYOffset - 150;
      setTimeout(() => {
        const supportsNativeSmoothScroll =
          "scrollBehavior" in document.documentElement.style;
        supportsNativeSmoothScroll
          ? window.scrollTo({ top: y, behavior: "smooth" })
          : window.scrollTo(0, y);
      }, 300);
    },
  },
};
</script>

<style lang="scss" src="./Accordion.scss" >

</style>

