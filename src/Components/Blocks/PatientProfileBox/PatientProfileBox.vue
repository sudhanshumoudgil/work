<template>
    <div>
      <div class="patientProfile">
        <h2>I-O&ndash;based 1L treatment for certain metastatic UGI cancers</h2>
        <div class="contentWrap">
          <div class="patientProfile__boxes">
            <div class="patientProfile__box" v-for="(item, index) in ProfileBox" :key="index">
                <div class="patientProfile__image">
                    <img :src="item.image" />
                    <span>*Not an actual patient.</span>
                </div>
                <div class="patientProfile__info">
                    <h3 v-html="item.name"></h3>
                    <p v-html="item.des"></p>
                    <a href="#">Explore Story</a>
                </div>
            </div>
          </div>
          <div class="patientProfile__footnote">
            <p>1L=first line; I-O=immuno-oncology; UGI=upper gastrointestinal.</p>
            <p>Disclaimer: Sponsored Content. All treatment decisions are at the discretion of the treating physician.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "PatientProfileBox",
      props: {
        ProfileBox: Array
        }
    };
  </script>
  
  <style lang="scss" src="./PatientProfileBox.scss" scoped>
  
  </style>