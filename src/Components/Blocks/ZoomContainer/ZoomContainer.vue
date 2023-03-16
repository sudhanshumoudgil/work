<template>
  <div class="animated-img">

  </div>
</template>
<script>
export default {
  name: "ZoomContainer",
  props: {
    uniqId: "",
    pashaTecknik: {
      default: false,
    },
  },
  data() {
    return {
      zoomState: false,
      isActiveOverlay: false,
      debounceField: null,
      panZoom: null,
      scale: false,
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768;
    },
  },
  methods: {
    zoomInit(state) {
      if (state === "close") window.enableScroll();
      if (!this.scale & (this.isMobile || this.pashaTecknik)) {
        const $body = document.querySelector("body");

        if (state === "open") {
          this.zoomState = true;
          document.querySelector("html").style.overflow = "hidden";
          $body.classList.add("popup-open");
        } else if (state === "close") {
          this.zoomState = false;
          document.querySelector("html").style.overflow = "visible";
          $body.classList.remove("popup-open");
        }
      }
    },
    panEnd(e) {
      this.panZoom = e;

      if (visualViewport.scale > 1) {
        this.panZoom.pause();
      }

      clearTimeout(this.debounceField);

      this.debounceField = setTimeout(() => {
        const viewportWidth = window.innerWidth;
        const imageWidth = viewportWidth * e.getTransform().scale;
        const viewportCenter = viewportWidth / 2;
        const imageCenter = viewportCenter * e.getTransform().scale;
        const scrolledFromCenterPx =
          viewportCenter - (e.getTransform().x + imageCenter);
        const scrolledFromCenterAbsPx = Math.abs(scrolledFromCenterPx);
        const scrolledFromCenterPercent = Math.abs(
          (scrolledFromCenterAbsPx * 100) / imageWidth
        );

        if (scrolledFromCenterPercent > 30) {
          e.smoothMoveTo(0, 0);
        }

        this.panZoom.resume();
      }, 500);
    },
  },
  mounted() {
    if (window.innerWidth < 768) {
      visualViewport.addEventListener("resize", (e) => {
        let scale = visualViewport.scale;
        scale > 1.1 ? (this.scale = true) : (this.scale = false);
      });
    }
  },
};
</script>

<style lang="scss" src="./ZoomContainer.scss" >

</style>

