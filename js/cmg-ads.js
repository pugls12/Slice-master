var version = "1.6-rewardads-v0.52";
console.log("cmg-ads.js loaded", version);

// Add styles
const styles = `
.ads-popup, .ad-container {
  display: none;
  position: relative;
  width: 100%;
  z-index: 10;
}

.ads-popup {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  background: #000000;
  height: 100vh;
  width: 100%;
}

.ad-container {
  height: 100%;
  z-index: 10;
}

.ad-container.flex-center {
  display: flex!important;
  justify-content: center;
  align-items: center;
}

#afg_preloader{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top:20px;
}

#container123 {
  width:640px;
  height:480px;
}

.ad-container > div {
  width: 100%;
  height: 100%;
  position: absolute;
}

#timer_div a, .timer-div a, .continue-lnk-container-rsection, .continue-link-yellow {
  color: #f1db00;
    font-family: "Helvetica Neue", "Arial Nova", Helvetica, Arial, sans-serif;
}

.continue-lnk-container-rsection, .continue-link-yellow {
  font-size: 23px;
  text-align: right;
  padding: 5px;
}

.timer-div {
  margin-left: 5px;
}

#continue-container, .continue-container {
  position: absolute;
  right: 50px;
  bottom: 0;
  z-index: 10;
}

#continue-link{
  font-family: "Helvetica Neue", "Arial Nova", Helvetica, Arial, sans-serif;
  color: #f1db00;
}

#img-button-self {
 display:none;
}

.continue-link-yellow {
  position: relative;
  text-decoration: none;
  padding: 5px;
  color: #f1db00;
  font-family: "Helvetica Neue", "Arial Nova", Helvetica, Arial, sans-serif;
}

.continue-link-yellow::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid #f1db00;
  opacity: 0;
  border-radius: 5px;
  transition: opacity 0.3s, box-shadow 0.3s, transform 0.3s;
}

.continue-link-yellow:hover::before {
  opacity: 0.7;
  box-shadow: 0 0 10px rgba(241, 219, 0, 0.7);
}

.continue-link-yellow:active::before {
  opacity: 1;
  transform: translate(2px, 1px);
  box-shadow: none;
}

#afg_container {
  text-align: center;
  width: 100vw;
  height: 100vh;
}

#afg_container .load-wrap {
  width: 100%;
  padding-top: 50px;
  margin-bottom: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:0;
}

#afg_container .load-wrap .loadingText {
  display: block;
  font-size: 20px;
  margin-top: 46px;
  font-family: "Helvetica Neue", "Arial Nova", Helvetica, Arial, sans-serif;
  color: #fff;
  text-align: center;
}
#afg_container .load-wrap .circle:first-child {
  animation-delay: 0.1s;
  background: #f8eb13;
}
#afg_container .load-wrap .circle:nth-child(2) {
  animation-delay: 0.3s;
  background: #29bffd;
}
#afg_container .load-wrap .circle:nth-child(3) {
  animation-delay: 0.5s;
  background: #f3733b;
}
#afg_container .load-wrap .circle:nth-child(4) {
  animation-delay: 0.7s;
  background: #65efbd;
}
#afg_container .load-wrap .circle {
  display: inline-block;
  height: 15px;
  width: 15px;
  margin-left: 20px;
  border-radius: 50%;
  animation: afg_container_loading 1.6s infinite;
  vertical-align: middle;
}

/* Keyframes */
@-webkit-keyframes afg_container_loading {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}
@-moz-keyframes afg_container_loading {
  0%,
  100% {
    -moz-transform: scale(0);
  }
  50% {
    -moz-transform: scale(1);
  }
}
@-o-keyframes afg_container_loading {
  0%,
  100% {
    -o-transform: scale(0);
  }
  50% {
    -o-transform: scale(1);
  }
}
@keyframes afg_container_loading {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}

@keyframes playPulse {
  0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba($white-text, 1);
  }

  50% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba($white-text, 0);
  }

  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba($white-text, 0);
  }
}
.playNow {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left:0;
  top:0;
}
#playAdsNowButton{
  width: 88px;
  height: 88px;
  position:absolute;
  z-index: 10000;
  // left: 50%;
  // top: 50%;
  transform: translate(-50%, -50%)
  text-align: center;
}

#playAdsNowButton h4 {
  font-family: "Helvetica Neue", "Arial Nova", Helvetica, Arial, sans-serif;
  color: #fff;
}

#playAdsNowButton::before {
  animation: playPulse 2s infinite;
  background: #fff;
  border-radius: 50%;
  content: "";
  height: 118%;
  left: -9%;
  position: absolute;
  top: -9%;
  width: 118%;
  z-index: -1;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); /* Add drop shadow */
}

#playAdsNowButton::after {
  background: #56eeb7;
  border-radius: 50%;
  content: "";
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
}

#playAdsNowButton svg{
  height: 34px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: scaleX(1.1) translate(-50%,-50%);
  width: 40px;
  z-index: 2;
}
`;

var styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

// Global variable declarations
var adBreakInterval = 180000; // Change to 180000 for live
var gameInterstitialAdTimerDone = false;
var gameInterstitialAdTimer;
var adLoadedTimer;
// Ad URL Production
var adTagUrl = "https://pubads.g.doubleclick.net/gampad/ads?iu=/137548614/1023174/71134/1023174-71134-video&description_url=https%3A%2F%2Fwww.coolmathgames.com%2F&env=vp&impl=s&correlator=&tfcd=0&npa=0&gdfp_req=1&output=vast&sz=640x480&unviewed_position_start=1";
//Test ad URL Development
//adTagUrl = "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=";

// isRewardAd is set to false default and set to true when cmgRewardAds() is called and set to false once the ad is complete in removeMidrollAndReinit
var isRewardAd = false;
var cmgAInvD = false;
// Declare adsManager at an accessible scope
var adsManager;
//reInitCounter counter is used to call midroll ads multiple times
var reInitCounter = 0;

$.fn.once = function (processed_class) {
  if (typeof processed_class == "undefined") {
    processed_class = "processed";
  }
  return this.not("." + processed_class).addClass(processed_class);
};

gameInterstitialAdTimer = setTimeout(function () {
  currentTime = new Date();
  gameInterstitialAdTimerAction();
}, adBreakInterval);

function getCookie(key) {
  var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  return keyValue ? keyValue[2] : null;
}

function adBreakRequestInit() {
  //request ads immediately - internal function
  adBreakInterval = 1000; //1sec
  gameInterstitialAdTimerDone = true;
}

function adBreakRequest() {
  //request ads immediately - internal function
  adBreakRequestInit();
  cmgAdBreak(); //start the ad call
}
/*
 * Interstitial ad timer functions
 */
function gameInterstitialAdTimerAction() {
  gameInterstitialAdTimerDone = true;
  clearGameInterstitialAdTimer();
}

function clearGameInterstitialAdTimer() {
  console.log("cmgAdBreak: timer completed, ready to display the ad next time");
  clearTimeout(gameInterstitialAdTimer);
  gameInterstitialAdTimer = null;
}

function init() {
  var script = document.createElement("script");
  script.src = "https://cdn.intergi.com/prebid/cmg-prebid.js";
  script.async = false;
  document.head.appendChild(script);
  var script2 = document.createElement("script");
  script2.src = "https://cdn.intergi.com/cmg/cmg-headerbidding.js";
  script2.async = false;
  document.head.appendChild(script2);
  var script3 = document.createElement("script");
  script3.src = "https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js";
  script3.async = false;
  document.head.appendChild(script3);
  console.log("cmgAdBreak initialized");
  window.top.postMessage("midroll initialized", "*"); //for game qa page
}

function createAdsLoadingPopup() {
  console.log("cmg Creating Ads Loading Popup...");
  // Create a div element with the desired content
  var popupContent = $(
    '<div class="ads-popup"><div id="afg_container"><div class="load-wrap">' +
    '<div class="circle"></div><div class="circle"></div>' +
    '<div class="circle"></div><div class="circle"></div>' +
    '<h3 class="loadingText">Just a moment while your content loads</h3>' +
    "</div></div></div>"
  );
  // Return the jQuery object for appending or prepending
  return popupContent;
}

function createPreloaderAndGameContainer() {
  console.log("cmgAdBreak Creating Preloader and Game Container...");
  // Create a string with the desired HTML
  var html =
    '<!--Start of Preloader call -->' +
    '<div id="afg_preloader" >' +
    '<div id="container123">' +
    '<div id="videoplayer"></div>' +
    '<div id="adcontainer" class="ad-container"></div>' +
    '</div>' +
    '</div>' +
    '<!-- Continue to Game container with timer -->' +
    '<div id="continue-container"  style="display:none">' +
    '<div id="img-button-container">' +
    '<div id="img-button-self" class="img-button"></div>' +
    '<div class="continue-lnk-container-rsection">' +
    '<span id="continue-link">Continue in </span>' +
    '<span id="timer_div" class="timer-div">8</span>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';

  return html;
}

$(document).ready(function () {
  console.log("cmg Document is ready, loading ad window...");
  const adsLoadingPopup = createAdsLoadingPopup();
  const preloaderAndGameContainer = createPreloaderAndGameContainer();
  $("body").prepend(adsLoadingPopup);
  $(".ads-popup").prepend(preloaderAndGameContainer);
});

function reInit() {
  console.log("cmg Re-initializing ad window...");
  const adsLoadingPopup = createAdsLoadingPopup();
  const preloaderAndGameContainer = createPreloaderAndGameContainer();
  $("body").prepend(adsLoadingPopup);
  $(".ads-popup").prepend(preloaderAndGameContainer);
}

init();
var originalWidth = window.innerWidth;
var originalHeight = window.innerHeight;

function sendResizeMessage(width, height) {
    window.parent.postMessage({ action: "resize", width: width, height: height }, "*");
    console.log('cmg Resize message sent.', width, 'x', height);
}

// Reset to original size
function resetToOriginalSize() {
  console.log('Resetting to original size:', originalWidth, 'x', originalHeight);
  sendResizeMessage(originalWidth, originalHeight);
}

//custom Events
const adBreakComplete = new CustomEvent("adBreakComplete");
const adBreakStart = new CustomEvent("adBreakStart");

function removeMidrollAndReinit() {
  console.log("cmgAdBreak removeMidrollAndReinit called");
  $(".ads-popup").remove();
  reInitCounter++;

  document.dispatchEvent(adBreakComplete);

  gameInterstitialAdTimerDone = false;
  gameInterstitialAdTimer = setTimeout(function () {
    currentTime = new Date();
    console.log("cmgAdBreak starting the timer at: " + currentTime);
    gameInterstitialAdTimerAction();
  }, adBreakInterval);

  gameInterstitialAdTimerDone = false;
  if (typeof adsManager != "undefined" && adsManager) {
    adsManager.destroy();
  }

  //add focus back to game if the game is implemented with canvas
  if (document.getElementById("canvas") != null) {
    document.getElementById("canvas").focus();
  }

  window.top.postMessage("midroll completed", "*"); //for game qa page
  //isRewardAd = false;
  resetToOriginalSize();
}

// Callback when AdsManager is loaded
function onAdsManagerLoaded(adsManagerLoadedEvent) {
    adsManager = adsManagerLoadedEvent.getAdsManager(videoContent); // Make sure videoContent is correctly referenced
    adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAllAdsCompleted);
    // Other adsManager setup...
}

window.cmgRewardAds = function() {
  isRewardAd = true;
  gameInterstitialAdTimerAction();
  cmgRewardsAdBreak();
  /*
  if (navigator.userAgent.includes("iPhone")) {
	cmgAdBreak();
  } else {
	  cmgRewardsAdBreak();
  }
  */
};

cmgAInvD = false;

//New desktop midroll Ad
function cmgAdBreak() {
  isRewardAd = false; // Set to false for regular ads
  if (checkSubscriberAndDispatch()) return;
  if (!isAdTimingValid()) return handleEarlyAdInvocation();
  if (shouldReinitialize()) reInit();
  console.log("cmgAdBreak called");
  commonAdBreakLogic();
  adBreakSpecificLogic();
  sendResizeMessage(644, 480);
  setupAdInteraction();
}

function cmgRewardsAdBreak() {
  console.log("cmgAdBreak cmgRewardsAdBreak called");
  if (checkSubscriberAndDispatch()) return;
  if (!isAdTimingValid()) return handleEarlyAdInvocation();
  if (shouldReinitialize()) reInit();
  $(".load-wrap").show();
  adRewardsBreakSpecificLogic()
  startMidRollRewardAd();
  prepareAdDisplayElements();
  sendResizeMessage(644, 480);
  isRewardAd = true; // Set the flag when loading a rewards ad

}

function onAllAdsCompleted() {
  // This will be called when all ads are completed
  removeMidrollAndReinit(); // Call your function to handle the end of the ad
  isRewardAd = false; // Reset the flag
}

function checkSubscriberAndDispatch() {
  var cmatgame_subscriber = getCookie("cmg_premium_play");
  if (cmatgame_subscriber !== null) {
    document.dispatchEvent(adBreakComplete);
    console.log("Premium subscriber");
    return true;
  }
  return false;
}

function commonAdBreakLogic() {
  window.top.postMessage("midroll called", "*"); //for game qa page
  if (
    typeof gameInterstitialAdTimerDone != "undefined" &&
    gameInterstitialAdTimerDone
  ) {
    document.dispatchEvent(adBreakStart);
  } else {
    document.dispatchEvent(adBreakComplete);
    console.log("cmgAdBreak: Too early to invoke midroll ads, wait for " + adBreakInterval + " milliseconds" );
    return true;
  }
  return false;
}

function isPremiumSubscriber() {
  const subscriber = getCookie("cmg_premium_play");
  if (subscriber !== null) {
    console.log("Premium subscriber");
    return true;
  }
  return false;
}


function adBreakSpecificLogic() {
  midRollAdStarted = true;
  midroll_ads_timer = 8; // 8 seconds timer
  cmgAInvD = false;

  $(".ads-popup").show();
  $("#adcontainer").addClass("ad-container flex-center");
  $("#timer_div a").addClass("timer-div");
 // $(".continue-lnk-container-rsection").removeAttr("style");
  $("#continue-container").addClass("continue-container");
  $("#img-button-self").html("&nbsp;");
  $("#timer_div").addClass("continue-button-link");
  $("#afg_container").css({ "z-index": 2 });
  $("#afg_container .load-wrap").html("");
  $("#afg_container").addClass("top-continue-btn");
  $("#afg_preloader").show();
  $("#continue-container").show();
  $("#continue-link").text("Skip Ad in");
  $(".continue-button-link").text(midroll_ads_timer); //8 seconds timer
  var swf_game_url = $("#swfgame").attr("src");
  var auctionCallback = function (displayAds, videoUrl) {
    application = new Application(displayAds, videoUrl);
  };

  // Start the CMG auction using the reusable function
  if (!cmgAInvD) {
      cmgAInvD = true;
      var parentURL = window.location != window.parent.location ? document.referrer : document.location.href;
      var gameURL = parentURL.split("/")[3];
      console.log(new Date() + " CMGAds Midroll Ads inside game: window.PW_CMG.startAuction...." + gameURL);

      if (typeof window.PW_CMG !== "undefined") {
          window.PW_CMG.startAuction(auctionCallback, undefined, gameURL, undefined);
      }
  }

  startAdTimer();
}


function adRewardsBreakSpecificLogic() {
  midRollAdStarted = true;
  midroll_ads_timer = 30; // 30 seconds timer
  //call AdBreakStart so that game developer can mute the sound
  document.dispatchEvent(adBreakStart);
  cmgAInvD = false;

  $(".ads-popup").show();
  $("#adcontainer").addClass("ad-container");

  $("#img-button-self").html("&nbsp;");
  $("#afg_container").css({ "z-index": 2 });
  //$("#afg_container .load-wrap").html("");
  $("#afg_container").addClass("top-continue-btn");

  $("#afg_preloader").show();
  $("#afg_container .load-wrap").show();

  var auctionCallback = function (displayAds, videoUrl) {
      application = new Application(displayAds, videoUrl);
  };

  // Start the CMG auction using the reusable function
  if (!cmgAInvD) {
      cmgAInvD = true;
      var parentURL = window.location != window.parent.location ? document.referrer : document.location.href;
      var gameURL = parentURL.split("/")[3];
      console.log(new Date() + " CMGAds Rewarded Ads inside game: window.PW_CMG.startAuction...." + gameURL);

      if (typeof window.PW_CMG !== "undefined") {
          window.PW_CMG.startAuction(auctionCallback, undefined, gameURL, isRewardAd || undefined);
      }
  }

}


function startAdTimer() {
  var seconds_left = midroll_ads_timer;
  var midrollIntervalId = setInterval(function () {
    seconds_left--;
    $(".continue-button-link").html(seconds_left);
    if (seconds_left <= 0) {
      clearInterval(midrollIntervalId);
      updateAdCompletionUI();
    }
  }, 1000);
}

function updateAdCompletionUI() {
  if ($(".continue-button-link") != null) {
    $("#continue-link").each(function () {
      $(".continue-lnk-container-rsection #continue-link").text("");
      $(this).html("");
    });
    $(".continue-button-link").html(
      '<a href="javascript:removeMidrollAndReinit();" class="continue-link-yellow">Return to Game <span>&#x25BA;</span></a>'
    );
  }
}

function isAdTimingValid() {
  return (
    typeof gameInterstitialAdTimerDone !== "undefined" &&
    gameInterstitialAdTimerDone
  );
}

function handleAdBreakComplete() {
  document.dispatchEvent(adBreakComplete);
}

function handleEarlyAdInvocation() {
  console.log("Too early to invoke midroll ads, wait for " + adBreakInterval + " milliseconds" );
}

function shouldReinitialize() {
  return reInitCounter > 0;
}

function startMidRollAd() {
  midRollAdStarted = true;
  midroll_ads_timer = 8;
  cmgAInvD = false;
  $(".ads-popup").show();
}

function startMidRollRewardAd() {
  midRollAdStarted = true;
  cmgAInvD = false;
  $(".ads-popup").show();
  //addPlayButtonToAdPopup();
}

function prepareAdDisplayElements() {
  $("#img-button-self").html("&nbsp;");
  $("#timer_div").addClass("continue-button-link");
  //$("#afg_container .load-wrap").html("");
  $("#afg_container").addClass("top-continue-btn");
  // Any additional element manipulation logic can go here.
}

function setupAdInteraction() {
  // Show the preloader for the ad
  $("#afg_preloader").show();
  // Remove any unnecessary elements
  $("continue-lnk-container-rsection").remove();

  var swf_game_url = $("#swfgame").attr("src");
  // Setup auction callback for the ad
  setupAuctionCallback();
  // Any additional ad interaction setup can go here
}

function setupAuctionCallback() {
  const auctionCallback = function (displayAds, videoUrl) {
    application = new Application(displayAds, videoUrl);
  };

  // Assuming adsManager is initialized and available
  //adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAllAdsCompleted);

  if (!cmgAInvD) {
    cmgAInvD = true;
    const parentURL = window.location != window.parent.location ? document.referrer : document.location.href;
    const gameURL = parentURL.split("/")[3];
    console.log(new Date() + " cmgRewardsAdBreak Midroll inside game: window.PW_CMG.startAuction...." + gameURL);

    if (typeof window.PW_CMG !== "undefined") {
      window.PW_CMG.startAuction(auctionCallback, undefined, gameURL);
    }
  }
}


function addPlayButtonToAdPopup() {
  const playAdsNowButtonHtml = `

  <a href="/play" class="playNow" >
  <div id="playAdsNowButton">
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M176 480C148.6 480 128 457.6 128 432v-352c0-25.38 20.4-47.98 48.01-47.98c8.686 0 17.35 2.352 25.02 7.031l288 176C503.3 223.8 512 239.3 512 256s-8.703 32.23-22.97 40.95l-288 176C193.4 477.6 184.7 480 176 480z"></path>
    </svg>
    </div>
  </a>

  `;
  $(".load-wrap").remove();
  $(".top-continue-btn").remove();
  $(".ads-popup").prepend(playAdsNowButtonHtml);
  $(".ad-container").addClass("flex-center");
  $("#playAdsNowButton").off('click').on("click", function (e) {
    $(".playNow").remove();
    e.preventDefault();
   // $(this).hide(); // Attempt to hide the play button
    console.log("cmg Play button clicked");
    if (adsManager) {
      adsManager.resume();
      //show the ad container
      $(".ad-container").show();
      console.log("cmg Ad resumed by user");
    }
  });
}


/**
 * Handles user interaction and creates the player and ads controllers.
 */

var pagepreRollType = "";
var Application = function (displayAds, adTagUrl, preRollType) {
  if (typeof preRollType == "undefined") { //desktop
    preRollType = "";
  } else {
    pagepreRollType = preRollType;
  }
  this.playing_ = false;
  this.adsActive_ = false;
  this.adsDone_ = false;
  if (typeof displayAds === 'undefined' || displayAds === null) {
    this.displayAds = true;
  } else {
    this.displayAds = displayAds;
  }
  this.adTagUrl_ = adTagUrl;
  this.videoPlayer_ = new VideoPlayer(preRollType);

  if (jQuery(window).width() < 640) {
    this.videoPlayer_.width = 300;
    // Adjust the height as needed, or keep it proportional
    this.videoPlayer_.height = 250;
  } else {
    this.videoPlayer_.width = 640;
    // Uncomment and adjust the height as needed
    this.videoPlayer_.height = 480;
    //this.videoPlayer_.height = "100%";
  }

      //if displayAds is false, then prebid has no winning bids, check new Ads() to get other ad Demand
      //if (this.displayAds) { // console.log("Preload ads for non subscription time games");
        this.ads_ = new Ads(this, this.videoPlayer_);
        // Adx Preroll Tag with fallback display Ad The user clicked/tapped - inform the ads controller that this code is being run in a user action thread.
        this.ads_.initialUserAction();
        // At the same time, initialize the content player as well. When content is loaded, we'll issue the ad request to prevent it from interfering with the initialization. See
        // https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/ads#iosvideo for more information.

        if (isRewardAd) {
	      //this.videoPlayer_.pause(); // Pause only for rewards ad break
	      //isRewardAd = false;  // Reset the flag
	      console.log("cmg Rewards ad break: Pausing the game");
	    }
        this.videoPlayer_.preloadContent(this.bind_(this, this.loadAds_));
        this.adsDone_ = true;
      //}

};



Application.prototype.bind_ = function (thisObj, fn) {
  return function () {
    fn.apply(thisObj, arguments);
  };
};

Application.prototype.loadAds_ = function () {
  this.ads_.requestAds(this.adTagUrl_);
};

/**
 * Handles video player functionality.
 */
var VideoPlayer = function (preRollType) {
  this.contentPlayer = document.getElementById(preRollType + "content123");
  this.adContainer = document.getElementById(preRollType + "adcontainer");
  this.videoPlayerContainer_ = document.getElementById(
    preRollType + "videoplayer"
  );
  this.width = 644;
  this.height = 480;
};

VideoPlayer.prototype.preloadContent = function (contentLoadedAction) {
  contentLoadedAction();
};
VideoPlayer.prototype.play = function () {
  this.contentPlayer.play();
};

VideoPlayer.prototype.pause = function () {
  console.log("Pausing video. Current contentPlayer:", this.contentPlayer);
  if (this.contentPlayer) {
    this.contentPlayer.pause();
  } else {
    console.error("cmg Cannot pause video. contentPlayer is null.");
  }
};

/**
 * Shows how to use the IMA SDK to request and display ads.
 */
var Ads = function (application, videoPlayer) {
  this.application_ = application;
  this.videoPlayer_ = videoPlayer;
  this.customClickDiv_ = document.getElementById("customClick");
  this.contentCompleteCalled_ = false;
  google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
  // Call setLocale() to localize language text and downloaded swfs google.ima.settings.setLocale('fr');
  this.adDisplayContainer_ = new google.ima.AdDisplayContainer(
    this.videoPlayer_.adContainer,
    this.videoPlayer_.contentPlayer,
    this.customClickDiv_
  );
  this.adsLoader_ = new google.ima.AdsLoader(this.adDisplayContainer_);
  this.adsManager_ = null;

  this.adsLoader_.addEventListener(
    google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
    this.onAdsManagerLoaded_,
    false,
    this
  );
  this.adsLoader_.addEventListener(
    google.ima.AdErrorEvent.Type.AD_ERROR,
    this.onAdError_,
    false,
    this
  );
};

// On iOS and Android devices, video playback must begin in a user action. AdDisplayContainer provides a initialize() API to be called at appropriate time. This should be called when the user clicks or taps.
Ads.prototype.initialUserAction = function () {
  this.adDisplayContainer_.initialize();
  if (
    typeof this.videoPlayer_ != "undefined" &&
    typeof this.videoPlayer_.contentPlayer != "undefined" &&
    this.videoPlayer_.contentPlayer != null
  ) {
    this.videoPlayer_.contentPlayer.load();
  }
};

Ads.prototype.requestAds = function (adTagUrl) {
  const adsRequest = new google.ima.AdsRequest();
  if (isRewardAd) {
    adsRequest.setAdWillAutoPlay(false);
    adsRequest.setAdWillPlayMuted(false);
  }
  adsRequest.adTagUrl = adTagUrl;
  adsRequest.linearAdSlotWidth = this.videoPlayer_.width;
  adsRequest.linearAdSlotHeight = this.videoPlayer_.height;
  adsRequest.nonLinearAdSlotWidth = this.videoPlayer_.width;
  adsRequest.nonLinearAdSlotHeight = this.videoPlayer_.height;
  this.adsLoader_.requestAds(adsRequest);
};

Ads.prototype.onAdsManagerLoaded_ = function (adsManagerLoadedEvent) {

  console.log('cmg Ads loaded');
  var adsRenderingSettings = new google.ima.AdsRenderingSettings();
  // adsRenderingSettings.loadVideoTimeout = 4000;
  adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;

  this.adsManager_ = adsManagerLoadedEvent.getAdsManager(
    this.videoPlayer_.contentPlayer, adsRenderingSettings);
  adsManager = this.adsManager_;

  this.adsManager_.addEventListener(
      google.ima.AdEvent.Type.STARTED,
      () => {
	    if (!isRewardAd) {
        this.adsManager_.resume();
        //show the Ad
        $(".ad-container").show();
        console.log("cmgAdBreak play on start");
        } else { //rewardAds
	        this.adsManager_.pause();
	        addPlayButtonToAdPopup(); //invoke play button for user to click to start the Ad
        }
      },
      false,
      this
  );

  /*
  // // Conditionally pause if it's a reward ad
  if (!isRewardAd) {
    this.adsManager_.addEventListener(
      google.ima.AdEvent.Type.STARTED,
      () => {

        this.adsManager_.resume();
        console.log("cmg ad break play on start");
      },
      false,
      this
    );
  } else {  //pause the Ad and show the play button for rewarded Ads so user can select it to start
	  //addPlayButtonToAdPopup();
  }
  */

  this.adsManager_.setVolume(0);
  if (isRewardAd) {
    this.adsManager_.setVolume(1);
  }
  this.processAdsManager_(this.adsManager_);
  adsManager = this.adsManager_;


};

Ads.prototype.processAdsManager_ = function (adsManager) {
    // Add logic specific to rewards ads

  if (adsManager.isCustomClickTrackingUsed()) {
    this.customClickDiv_.style.display = "table";
  }
  adsManager.addEventListener(
    google.ima.AdErrorEvent.Type.AD_ERROR,
    this.onAdError_,
    false,
    this
  );

  const events = [
    google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
    google.ima.AdEvent.Type.COMPLETE,
    google.ima.AdEvent.Type.FIRST_QUARTILE,
    google.ima.AdEvent.Type.LOADED,
    google.ima.AdEvent.Type.MIDPOINT,
    google.ima.AdEvent.Type.STARTED,
    google.ima.AdEvent.Type.THIRD_QUARTILE,
    google.ima.AdEvent.Type.USER_CLOSE,
    google.ima.AdEvent.Type.PAUSED,
  ];
  events.forEach((eventType) => {
    adsManager.addEventListener(eventType, this.onAdEvent_, false, this);
  });

  adsManager.init(
    this.videoPlayer_.width,
    this.videoPlayer_.height,
    google.ima.ViewMode.NORMAL
  );

  /*
  if(!isRewardAd) {
	adsManager.start();
  }*/
  adsManager.start();

  console.log("cmg AdsManager started");

  /*
  adsManager.addEventListener(
    google.ima.AdEvent.Type.STARTED,
    function() {
      // Pause the ad as soon as it starts
      adsManager.pause();
      console.log("cmg Ad paused on start");
    },
    false,
    this
  );
  */

};


window.is_ad_loaded = false;
window.is_ad_started = false;


Ads.prototype.onAdEvent_ = function (adEvent) {
  console.log(`cmg Preroll adEvent type: ${adEvent.type} --> ${new Date()}`);

  // Resize the parent window to fit the ad
  if (adEvent.type === google.ima.AdEvent.Type.STARTED) {
    console.log("cmg Ad started. Preparing to resize to 640x480.");

    // Log right before sending the resize message
    console.log('cmg Ad STARTED event triggered. Calling sendResizeMessage...');
    sendResizeMessage(644, 480);

    window.parent.postMessage("adBreakStart", "*");
  } else if (
    adEvent.type === google.ima.AdEvent.Type.COMPLETE ||
    adEvent.type === google.ima.AdEvent.Type.ALL_ADS_COMPLETED ||
    adEvent.type === google.ima.AdEvent.Type.USER_CLOSE
  ) {
    console.log('cmg Ad completed or user closed. Preparing to resize back to original dimensions: ' + originalWidth + 'x' + originalHeight + '.');

    // Log right before sending the resize message
    console.log('Ad COMPLETED event triggered. Calling sendResizeMessage...');
    sendResizeMessage(originalWidth, originalHeight);

    window.parent.postMessage("adBreakComplete", "*");
  }

  switch (adEvent.type) {
    case google.ima.AdEvent.Type.LOADED:
       console.log("cmgAdBreak AdEvent type Loaded fired - starting 8 second timer to kill the Ad if it is not started");
       is_ad_loaded = true;
       //create a 8 second timer to see if the ad is started otherwise destroy the Ad and load the game.
       adLoadedTimer = setTimeout(() => {
	     if(typeof is_ad_started != "undefined" && !is_ad_started) {
		 	console.log("cmgAdBreak Ad did not start in 8 seconds so removing it...");
		 	removeMidrollAndReinit(); //remove  midroll or rewarded ads
	     }
	   }, 8000);
      ["#content123", "#m-content123", "#r-content123"].forEach((selector) => {
        const element = $(selector);
        if (element.length && element.is(":visible")) {
          element.hide();
        }
      });
      break;
    case google.ima.AdEvent.Type.STARTED:
      console.log("cmgAdBreak AdEvent type Started fired - clearing Loader Timer");
      is_ad_started = true;
      clearTimeout(adLoadedTimer);
      break;
    case google.ima.AdEvent.Type.COMPLETE:
    case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
    case google.ima.AdEvent.Type.USER_CLOSE:
      if (typeof midRollAdStarted !== "undefined" && midRollAdStarted) {
        removeMidrollAndReinit();
        window.is_ad_loaded = false; window.is_ad_started = false;
      }
      break;
  }
};

Ads.prototype.onAdError_ = function (adErrorEvent) {
  console.log("cmg Ad error: " + adErrorEvent.getError());
  if (this.adsManager_) {
    this.adsManager_.destroy();
  }
  if (typeof midRollAdStarted !== "undefined" && midRollAdStarted) {
    removeMidrollAndReinit();
  }
  // TODO remove the ad slot and display the game this.application_.resumeAfterAd();
  // TODO UNCOMMENT BELOW removePrerollAndDisplayGame();
};

//Local
function setCookie(key, value, exptime) {
    const d = new Date();
    d.setTime(d.getTime() + exptime);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = key + '=' + value + '; ' + expires + '; path=/; domain=.' + window.location.host;
}
//iframe based games
function isSubscriber(evt) {
  var message;
  if (
    /https:\/\/(d9-local-dev|dev|dev2|dev3|stage|stage-edit|stage2|stage2-edit|www|edit)\.coolmathgames\.com/.test(evt.origin)) {
    if (evt.data == "valid-subscriber" && typeof setCookie === "function") {
      setCookie("cmg_premium_play", "cmgpremium");
    } else if (
      evt.data == "not-subscriber" &&
      typeof setCookie === "function"
    ) {
      setCookie("cmg_premium_play", "cmgpremium", -10000);
    }
  }
  if (window.addEventListener) {
    window.addEventListener("message", isSubscriber, false);
  } else {
    window.attachEvent("onmessage", isSubscriber);
  }
}