import cloudinary from "cloudinary-core";
import windowSize from "get-window-size";

const cl = new cloudinary.Cloudinary({
  cloud_name: "haymarket-pri",
  api_key: "961798978258628",
  api_secret: "hkaw1wxCsGWoALtW2BRvsfwWw5w"
});

const windowWidth = windowSize().width;
const responseForAnim = 1120;

const animationsData = {
  // first graph desktop then mobile and then tablet
  
  2: [
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      src: cl.url("/Merck_Keytruda_FF/2/0.svg"),
      type: "mask",
      maskDirection: "fromLeft"
    },
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      delay: windowWidth > responseForAnim ? 0.2 : 0,
      src: cl.url("/Merck_Keytruda_FF/2/1.svg"),
      type: "mask",
      maskDirection: "fromTop"
    },
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      delay: windowWidth > responseForAnim ? 0.2 : 0,
      src: cl.url("/Merck_Keytruda_FF/2/2.svg"),
      type: "mask",
      maskDirection: "fromTop"
    }
  ],
  "2-mob": [
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      src: cl.url("/Merck_Keytruda_FF/2_mob/2_mob.svg"),
      type: "mask",
      maskDirection: "fromLeft"
    }
  ],
  3: [
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      src: cl.url("/Merck_Keytruda_FF/3/0.svg"),
      type: "mask",
      maskDirection: "fromLeft"
    },
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      delay: windowWidth > responseForAnim ? 0.2 : 0,
      src: cl.url("/Merck_Keytruda_FF/3/1.svg"),
      type: "mask",
      maskDirection: "fromTop"
    },
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      delay: windowWidth > responseForAnim ? 0.2 : 0,
      src: cl.url("/Merck_Keytruda_FF/3/2.svg"),
      type: "mask",
      maskDirection: "fromTop"
    }
  ],
  "3-mob": [
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      src: cl.url("/Merck_Keytruda_FF/3_mob/3_mob.svg"),
      type: "mask",
      maskDirection: "fromLeft"
    }
  ],
  4: [
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      src: cl.url("/Merck_Keytruda_FF/4/0.svg"),
      type: "mask",
      maskDirection: "fromTop"
    }
  ],
  5: [
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      src: cl.url("/Merck_Keytruda_FF/5/0.svg"),
      type: "mask",
      maskDirection: "fromTop"
    }
  ],
  6: [
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      src: cl.url("/Merck_Keytruda_FF/6/0.svg"),
      type: "mask",
      maskDirection: "fromTop"
    }
  ],
  7: [
    {
      direction: "animated",
      duration: windowWidth > responseForAnim ? 0.8 : 0,
      src: cl.url("/Merck_Keytruda_FF/7/7.png"),
      type: "mask",
      maskDirection: "fromTop"
    }
  ]
};

export default animationsData;
