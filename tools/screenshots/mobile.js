const puppeteer = require("puppeteer");
const ora = require("ora");
const mkdirp = require("mkdirp");
const { rmDir, minTwoDigits } = require("./helper");

const spinner = new ora();

const FOLDER_OUTPUT = "./tools/screenshots/output/";
const FOLDER_NAME = "mobile";
const SCREEN_PATH = `./tools/screenshots/output/${FOLDER_NAME}/`;

const SERVER_PATH =
  "https://www.cancertherapyadvisor.com/custom/fast-facts/keytrudauc/";

const VIEWPORT_WIDTH = 375;
const VIEWPORT_HEIGHT = 553;

const VIEWPORT_OPTS = {
  width: VIEWPORT_WIDTH,
  height: VIEWPORT_HEIGHT,
  deviceScaleFactor: 2,
  hasTouch: true,
};
let viewportOpts = VIEWPORT_OPTS;

rmDir(FOLDER_OUTPUT + FOLDER_NAME); // clean folder with screens

mkdirp(FOLDER_OUTPUT);
mkdirp(FOLDER_OUTPUT + FOLDER_NAME);

(async () => {
  // const browser = await puppeteer.launch({ devtools: false });
  const browser = await puppeteer.launch({
    devtools: false,
    headless: false,
    args: ["--no-sandbox"],
    ignoreHTPPSErrors: true,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    // executablePath: '/usr/bin/google-chrome-stable'
  });
  const page = await browser.newPage();

  /** Run spinner and execute recived Function */
  async function makeScreen(msg, func) {
    spinner.start(`Start - ${msg}`);
    await func();
    spinner.succeed(`Finish - ${msg}`);
  }

  async function screenshot(name, clip) {
    let opts = { path: SCREEN_PATH + name + ".png" };

    if (clip) {
      opts.clip = clip;
    }

    await page.screenshot(opts);
  }

  /**
   * Reset viewport height
   */
  async function resetVH() {
    viewportOpts.height = VIEWPORT_HEIGHT;
    await page.setViewport(viewportOpts);
  }

  /**
   * Screenshot DOM element
   */
  async function screenshotDOMElement(
    selector,
    name = "00_00_00",
    padding = 0
  ) {
    const rect = await page.evaluate((selector) => {
      const element = document.querySelector(selector);
      const { x, y, width, height } = element.getBoundingClientRect();
      return { left: x, top: y, width, height, id: element.id };
    }, selector);

    return await page.screenshot({
      path: `${SCREEN_PATH}${name}.png`,
      clip: {
        x: rect.left - padding,
        y: rect.top - padding,
        width: rect.width + padding * 2,
        height: rect.height + padding * 2,
      },
    });
  }

  /** Set base viewport */
  await page.setViewport(viewportOpts);
  await page.goto(`${SERVER_PATH}?screentest=true`, {
    waitUntil: "networkidle2",
  });
  await page.waitFor(3000 * 4);

  await makeScreen("home", screenHome);
  await makeScreen("section_1", screenSection1);
  await makeScreen("section_1_1", screenSection1_1);
  // await makeScreen("section_2", screenSection2);
  await makeScreen("section_2_1", screenSection2_1);
  await makeScreen("section_3", screenSection3);
  await makeScreen("section_4", screenSection4);
  await makeScreen("references", screenReferences);
  await makeScreen("isi", screenISI);
  await makeScreen("zoomElements", zoomElements);

  /**
   * Screen Home
   */
  async function screenHome() {
    await page.evaluate(() => {
      document.querySelector(".video-wrapper").style.height = "650px";
      document.querySelector(".head-section-scroll").style.top = "-35px";
      document
        .querySelectorAll(".accordion_header")[0]
        .dispatchEvent(new MouseEvent("click"));
      document
        .querySelectorAll(".accordion_header")[1]
        .dispatchEvent(new MouseEvent("click"));
    });
    await page.waitFor(3000);
    await screenshot("00_00_home");
    await page.evaluate(() => {
      return document
        .querySelector(".mobile_menu_toggle")
        .dispatchEvent(new MouseEvent("click"));
    });
    await page.waitFor(3000);
    await screenshot("00_01_home");
    await page.evaluate(() => {
      return document
        .querySelector(".mobile_menu_toggle")
        .dispatchEvent(new MouseEvent("click"));
    });
  }

  /**
   * Screen Section 1
   */
  async function screenSection1() {
    const containerHeight_1 = await page.evaluate(() => {
      document.querySelector(".head-section").style.height = "500px";
      document.querySelector(".video-wrapper").style.height = "500px";
      document.querySelector(".head-section-scroll").style.top = "-5px";
      document.querySelector(".main-title").style.marginBottom = "8px";
      document.querySelector(".main-description").style.marginBottom = "8px";
      return document.querySelector(".section1").scrollHeight + 365 + 400;
    });
    await page.waitFor(200);
    viewportOpts.height = containerHeight_1;
    await page.setViewport(viewportOpts);
    await page.waitFor(500);
    await screenshot("01_00_home");
    await resetVH();
  }

  /**
   * Screen Section 1_1
   */
  async function screenSection1_1() {
    await page.goto(
      `${SERVER_PATH}?screentest=true&disable_interactive_0=true`,
      {
        waitUntil: "networkidle2",
      }
    );
    await page.waitFor(3000 * 4);
    await page.evaluate(() => {
      return window.scrollTo(0, 0);
    });
    await page.waitFor(100);
    const containerHeight_2 = await page.evaluate(() => {
      document.querySelector(".container__header").style.display = "block";
      document
        .querySelector(".container__header")
        .classList.add("container__header-white");
      document.querySelector(".arrow_up").style.display = "block";
      var prevSectionBottom = document
        .querySelector(".section1")
        .getBoundingClientRect().bottom;
      window.scrollTo(0, prevSectionBottom - 126);
      document.querySelector(".header-link--2").classList.add("active");
      return document.querySelector(".section1_1").scrollHeight + 390;
    });
    await page.waitFor(200);
    viewportOpts.height = containerHeight_2;
    await page.setViewport(viewportOpts);
    await page.waitFor(100);

    await screenshot("01_10_00_home");

    await resetVH();
  }

  

  async function screenSection2_1() {
    await page.goto(
      `${SERVER_PATH}?screentest=true&disable_interactive_1=true`,
      {
        waitUntil: "networkidle2",
      }
    );
    await page.waitFor(3000 * 4);

    await page.evaluate(() => {
      return window.scrollTo(0, 0);
    });
    await page.waitFor(100);
    const containerHeight_2 = await page.evaluate(() => {
      document.querySelector(".container__header").style.display = "block";
      document
        .querySelector(".container__header")
        .classList.add("container__header-white");
      document.querySelector(".arrow_up").style.display = "block";
      var prevSectionBottom = document
        .querySelector(".section1_1")
        .getBoundingClientRect().bottom;
      window.scrollTo(0, prevSectionBottom - 126);
      return document.querySelector(".section2").scrollHeight + 400;
    });
    await page.waitFor(200);
    viewportOpts.height = containerHeight_2;
    await page.setViewport(viewportOpts);
    await page.waitFor(1000);
    await screenshot("02_01_home");

    await resetVH();
  }

  /**
   * Screen Section 3
   */
  async function screenSection3() {
    await page.waitFor(100);
    await page.evaluate(() => {
      return window.scrollTo(0, 0);
    });
    await page.waitFor(100);
    const containerHeight_3 = await page.evaluate(() => {
      var prevSectionBottom = document
        .querySelector(".section2")
        .getBoundingClientRect().bottom;
      window.scrollTo(0, prevSectionBottom - 130);
      return document.querySelector(".section3").scrollHeight + 390;
    });
    await page.waitFor(200);
    viewportOpts.height = containerHeight_3;
    await page.setViewport(viewportOpts);
    await page.waitFor(500);
    await screenshot("03_00_home");
    await resetVH();
  }

  /**
   * Screen Section 4
   */
  async function screenSection4() {
    await page.waitFor(100);
    await page.evaluate(() => {
      return window.scrollTo(0, 0);
    });
    await page.waitFor(100);
    const containerHeight_4 = await page.evaluate(() => {
      var prevSectionBottom = document
        .querySelector(".section3")
        .getBoundingClientRect().bottom;
      window.scrollTo(0, prevSectionBottom - 130);
      return document.querySelector(".section4").scrollHeight + 420;
    });
    await page.waitFor(200);
    viewportOpts.height = containerHeight_4;
    await page.setViewport(viewportOpts);
    await page.waitFor(500);
    await screenshot("04_00_home");
    await resetVH();
  }

  /**
   * References
   */
  async function screenReferences() {
    await page.evaluate(() => {
      let elReferences = document.querySelector("#toggleReferences");
      elReferences.click();
    });
    const pageHeight = await page.evaluate(() => {
      document.querySelector(".brand").style.display = "none";
      document.querySelector(".brand-footer").style.display = "none";
      document.querySelector(".isi").style.display = "none";
      document.querySelector(".isi-static").style.display = "none";
      document.querySelector(".container__header").style.display = "none";
      document.querySelector(".head-section").style.display = "none";
      return document.querySelector(".main-wrapp").scrollHeight;
    });
    viewportOpts.height = pageHeight;
    viewportOpts.deviceScaleFactor = 2;
    await page.setViewport(viewportOpts);
    await screenshotDOMElement("#screenReferences", "05_00_references", 10);
  }

  /**
   * Screen ISI
   */
  async function screenISI() {
    await page.goto(`${SERVER_PATH}?screentest=true&tables=true`, {
      waitUntil: "networkidle0",
    });
    await page.waitFor(3000);
    const containerIsi = await page.evaluate(() => {
      let $body = document.querySelector("body");
      $body.style.overflowX = "hidden";

      window.scrollTo(0, 0);
      document.querySelector(".isi-static").style.position = "absolute";
      document.querySelector(".isi-static").style.top = "0";
      document.querySelector(".isi-static").style.zIndex = "1000";
      document.querySelector(".isi-static").style.height = "100%";
      document.querySelector(".brand").style.display = "none";
      document.querySelector(".brand-footer").style.display = "none";
      document.querySelector(".container__header").style.display = "none";
      return document.querySelector(".isi-static").scrollHeight;
    });
    await page.waitFor(200);
    viewportOpts.deviceScaleFactor = 1;
    viewportOpts.height = containerIsi - 20;
    await page.setViewport(viewportOpts);
    await page.waitFor(500);
    await screenshot("isi");
  }

  /**
   * Screen zoomElements
   */
  async function zoomElements() {
    await page.goto(`${SERVER_PATH}?screentest=true&tables=true`, {
      waitUntil: "networkidle0",
    });
    await page.waitFor(3000);
    const pageHeight = await page.evaluate(() => {
      document.querySelector(".brand").style.display = "none";
      document.querySelector(".brand-footer").style.display = "none";
      document.querySelector(".isi").style.display = "none";
      document.querySelector(".isi-static").style.display = "none";
      document.querySelector(".container__header").style.display = "none";
      document.querySelector(".head-section").style.display = "none";
      document.querySelector(".screentest").classList.add("mobile-tables");

      return document.querySelector(".main-wrapp").scrollHeight;
    });
    viewportOpts.height = pageHeight;
    viewportOpts.deviceScaleFactor = 2;
    await page.setViewport(viewportOpts);
    await screenshotDOMElement("#zoom-screen-0", "01_01_home", 10);
    await screenshotDOMElement("#zoom-screen-1", "01_02_home", 10);
    await screenshotDOMElement("#zoom-screen-2", "01_10_02_home", 10);
    await screenshotDOMElement("#zoom-screen-3", "01_10_03_home", 10);
    await screenshotDOMElement("#zoom-screen-4", "01_10_01_home", 10);
  }

  await browser.close();
})();
