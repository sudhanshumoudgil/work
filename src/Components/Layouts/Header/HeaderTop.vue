<template>
  <div class="headerTopWrap">
    <div :class="{ headerTop: true, '': this.isScrolled }">
      <img src="@/Assets/Img/Cancer-Therapy-Advisor-Logo.svg" alt="Cancer Therapy Advisor" />
      <img src="@/Assets/Img/Patient-Journeys-Logo.svg" alt="Patient Journey" />      
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderTop",
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
    ...mapState(["userAgent", "urls"]),
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss" src="./HeaderTop.scss" scoped>
</style>
