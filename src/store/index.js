import Vue from "vue";
import Vuex from "vuex";
import userAgent from "./modules/userAgent";
import animationsData from "./animationsData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isScrollLock: false,
    mobileMenuState: false,
    activeSection: 0,
    urls: {
      PI: {
        link: "https://www.tukysahcp.com/pdf/TUKYSA_Full_Ltr_Master.pdf",
        text: "Prescribing Information",
      },
      MG: {
        link: "https://www.merck.com/product/usa/pi_circulars/w/welireg/welireg_mg.pdf",
        text: "Medication Guide",
      },
      PP: {
        link: "https://www.haymarketmediaus.com/haymarket-media-medical-privacy-policy/",
        text: "Privacy Policy",
      },
      TC: {
        link: "https://www.haymarketmediaus.com/haymarket-media-inc-us-terms-conditions/",
        text: "Terms & Conditions",
      },
      LN: {
        link: "#",
        text: "Legal Notice",
      },
      CU: {
        link: "#",
        text: "Contact Us",
      },
      HW: {
        link: "https://www.welireghcp.com/",
        text: "WELIREG HCP Website",
      }
    },
    animationsData,
    controllerExist: false,

    el: '#nav',
   
    mainMenu: [
      {
        id: 1,
        title: "Dr. Yarmohammadi, MD: Clinical Considerations",
        anchorRef: "#LandingPage",
      }, 
      {
        id: 2,
        title: "Angelica Boutin, RN: Counseling Points ",
        anchorRef: "#HER2CLIMB",
      },
      {
        id: 3,
        title: "Keith Teasley: Coordinating Care",
        anchorRef: "#Efficacy",
      },
      {
        id: 4,
        title: "Access and Support ",
        anchorRef: "#Safety",
      },      
    ],
  },
  
  modules: {
    userAgent,
  },
  mutations: {
    SET_SCROLL_CONTROLLER_STATE(state, value) {
      state.controllerExist = value;
    },
    TOGGLE_MOBILE_MENU(state, value) {
      state.mobileMenuState = value;
    },
    SET_ACTIVE_SECTION(state, value) {
      state.activeSection = value;
    },
  },
 
});
