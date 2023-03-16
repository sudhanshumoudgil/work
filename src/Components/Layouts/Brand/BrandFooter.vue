<template>
  <div class="brandFooter">
    <div class="brandFooter__upper">
        <div class="contentWrap">
          <div class="brandFooter__upperContent">
            <div class="brandFooter__sponsored">
              <p>Sponsored & Directed by:</p>
              <img src="@/Assets/Img/BMS-Logo.svg" alt="" />
            </div>
            <div class="brandFooter__upperCopyright">
              <p>&copy; 2023 Bristol-Myers Squibb Company.</p>
              <p>OPDIVO<sup>&reg;</sup> and the related logo are trademarks of Bristol-Myers Squibb Company.</p>
              <p><span>1506-US-22006160</span> <span>3/23</span></p>
            </div>
          </div>
          <div class="brandFooter__disclaimer">
            <i>Cancer Therapy Advisor Patient Journeys</i> is produced as a basic reminder of important information for healthcare professionals. Readers are advised to consult manufacturers and specialists if questions arise about specific products, treatments, or diseases. The publisher and editors do not assume liability for any errors or omissions. Cancer Therapy Advisor and Patient Journeys are registered trademarks of Haymarket Media, Inc.
          </div>
        </div>
    </div>
    <div class="brandFooter__lower">
        <div class="brandFooter__lowerContent">
          <div class="brandFooter__links">
            <a :href="urls.PP.link" target="_blank">{{urls.PP.text}}</a>
            <a :href="urls.TC.link" target="_blank">{{urls.TC.text}}</a>
          </div>
          <div class="brandFooter__copyright">
            &copy; 2023 Haymarket Media, Inc. All rights reserved.
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BrandFooter",
  data: () => ({
    showScrollBtn: false,
  }),
  computed: {
    ...mapState(["urls"]),
  }
};
</script>

<style lang="scss" src="./BrandFooter.scss">

</style>

