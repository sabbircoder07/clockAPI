import * as model from "./model.js";
import * as config from "./config.js";
import clockAPPView from "./views/clockAPPView.js";

/**
 * Fetches the information of all countries from the Rest Countries API
 * and renders them onto the page with pagination.
 * @async
 * @function
 * @returns {Promise<void>}
 * @description
 * This function retrieves all countries from the API and displays them
 * on the page. It also includes pagination functionality to manage the
 * display of countries across different pages. A loading spinner is shown
 * while the data is being fetched. In case of an error, an error message
 * is displayed to the user.
 */
const controlClockAPP = async function () {
  try {
    clockAPPView.renderSpinner();

    /*
    const quotePromise = model.getQuote();
    const ipAddressPromise = model.getIPAddress();
    const geoLocationPromise = model.getGeoLocation(model.state.ip);
    const timePromise = model.getTime(model.state.timezones);
    const locationPromise = model.getLocation();
    */

    /*
    await Promise.all([
      quotePromise,
      ipAddressPromise,
      geoLocationPromise,
      timePromise,
      locationPromise,
    ]);
    */
    await model.getQuote();
    await model.getIPAddress();
    //await model.getGeoLocation(model.state.ip);
    await model.getTime(model.state.timezones);
    await model.getLocation();

    setTimeout(function () {
      const data = model.state;
      clockAPPView.render(data);
    }, config.SHOW_COUNTRIES_SEC * 1000);
  } catch (err) {
    // Handle any errors that occur during the execution of the function
    console.error(err);
  }
};

const controlBackGroundImageAPP = function () {
  const greeting = clockAPPView._getGreeting();
  const backgroundImage = clockAPPView._getBackgroundImage(greeting);
  document.body.style.backgroundImage = `url(${backgroundImage})`;
};

const init = function () {
  clockAPPView.addLoadHandler(controlClockAPP);
  clockAPPView.addRefreshHandler(controlClockAPP);
  clockAPPView.addHandlerMoreLess();
  clockAPPView.addResizeHandler(controlBackGroundImageAPP);
};

init();
