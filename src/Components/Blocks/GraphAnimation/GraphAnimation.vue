<template>
  <div class="animations-wrapper">
    <ul class="animations-list">
      <li class="animations-item" v-for="(item, key) in data" :class="[
        { relative: key === 0 },
        startAnimation ? item.direction : '',
        item.type && item.type === 'mask' ? 'animations-item-mask' : '',
        item.maskDirection ? item.maskDirection : '',
      ]" :style="`${'transition-duration:' +
item.duration +
's; ' +
'transition-delay:' +
item.delay +
's;'
}`" :key="key">
        <img class="animations-img" :class="{ 'animations-img--ie': isIE }" :src="item.src" :style="`${'transition-duration:' +
        item.duration +
        's; ' +
        'transition-delay:' +
        item.delay +
        's;'
        }`" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ScrollMagic from "scrollmagic";
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

export default {
  name: "GraphAnimation",
  props: {
    data: {
      type: [Array, Object],
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      startAnimation: false,
    };
  },
  computed: {
    ...mapState(["userAgent"]),
    isIE() {
      return this.userAgent.browser.name === "ie";
    },
  },
  methods: {
    initScene() {
      this.scene = new ScrollMagic.Scene({
        triggerElement: this.$el,
        triggerHook: 0.8,
      })
        .addTo(window.animationsScrollController)
        .on("enter", (event) => {
          this.startAnimation = true;
        });

      if (this.$route.query.screentest) {
        this.startAnimation = true;
      }
    },
  },
  created() {
    window.animationsScrollController = new ScrollMagic.Controller();
  },
  mounted() {
    this.initScene();
    //Safety profile animation
    window.addEventListener("scroll", function () {
      var white_horizontal_element = document.querySelector(
        ".white-horizontal-card-columns-left-list"
      );
      var position = white_horizontal_element.getBoundingClientRect();
      // checking for partial visibility
      if (position.top < window.innerHeight && position.bottom >= 0) {
        document.querySelectorAll(".list-item").forEach((el) => {
          el.classList.add("list-of-patient-animation");
        });
        document
          .querySelector(".white-horizontal-card-columns-right-box")
          .classList.add("white-horizontal-card-columns-right-box-animation");
      }
    });
  },
};
</script>

<style lang="scss" src="./GraphAnimation.scss">

</style>
