import View from "./view.js";
import refreshIcons from "../../assets/desktop/icon-refresh.svg";
import iconSun from "../../assets/desktop/icon-sun.svg";
import iconMoon from "../../assets/desktop/icon-moon.svg";
import iconArrowDown from "../../assets/desktop/icon-arrow-down.svg";
import iconArrowUp from "../../assets/desktop/icon-arrow-up.svg";
import backgroundImageDayTime from "../../assets/desktop/bg-image-daytime.jpg";
import backgroundImageNightTime from "../../assets/desktop/bg-image-nighttime.jpg";
import backgroundImageDayTimeTab from "../../assets/tablet/bg-image-daytime.jpg";
import backgroundImageNightTimeTab from "../../assets/tablet/bg-image-nighttime.jpg";
import backgroundImageDayTimeMobile from "../../assets/mobile/bg-image-daytime.jpg";
import backgroundImageNightTimeMobile from "../../assets/mobile/bg-image-nighttime.jpg";

export class ClockAPPView {
  _parentElement = document.querySelector(".clock-app");
  _data;

  render(data) {
    if (!data) return;
    this._data = data;
    let markup = "";
    markup = this._generateMarkup();
    this._clearMarkup();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _clearMarkup() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner = function () {
    let markup = `<div class="loader-container">
  <div class="loader"></div>
  <div class="loader-text">Loading...</div>
</div>`;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  };

  addLoadHandler(render) {
    window.addEventListener("load", render);
  }

  addResizeHandler(render) {
    window.addEventListener("resize", render);
  }

  addRefreshHandler(render) {
    this._parentElement.addEventListener("click", function (event) {
      const refreshButton = event.target.closest("#quote-refresh");
      if (!refreshButton) return;
      refreshButton.addEventListener("click", render);
    });
  }

  addHandlerMoreLess() {
    this._parentElement.addEventListener("click", function (event) {
      event.preventDefault();
      const moreLessButton = event.target.closest("#more-less");
      if (!moreLessButton) return;

      moreLessButton.addEventListener("click", function (event) {
        let root = document.querySelector(":root");
        root.style.setProperty("--color-primary-other", "#000000");
        const arrowIcon = document.querySelector(".time-container__arrow");
        const timezoneDetails = document.querySelector(
          ".timezone-container-details"
        );
        const quoteSection = document.querySelector(".quote-container");
        const toggleButtonText = document.querySelector(
          ".time-container__button-text"
        );
        const greetingText = document.querySelector(
          ".time-container__greeting"
        );

        if (greetingText.textContent.trim().includes("Evening")) {
          root.style.setProperty("--color-primary-other", "#000000");
          root.style.setProperty("--color-White-other", "#ffffff");
        } else if (greetingText.textContent.trim().includes("Morning")) {
          root.style.setProperty("--color-primary-other", "#ffffff");
          root.style.setProperty("--color-White-other", "#000000");
        }

        quoteSection.classList.toggle("quote-container__hide");
        moreLessButton.classList.toggle("active");
        timezoneDetails.classList.toggle("timezone-container-details__hide");

        if (moreLessButton.classList.contains("active")) {
          arrowIcon.src = iconArrowUp;
          arrowIcon.style.height = "28px";
          arrowIcon.style.width = "28px";
          toggleButtonText.textContent = "Less";
        } else {
          arrowIcon.src = iconArrowDown;
          arrowIcon.style.height = "8px";
          arrowIcon.style.width = "8px";
          toggleButtonText.textContent = "More";
        }
      });
    });
  }

  _generateMarkup() {
    const greeting = this._getGreeting();
    const backgroundImage = this._getBackgroundImage(greeting);
    document.querySelector(
      "body"
    ).style.backgroundImage = `url(${backgroundImage})`;
    const html = `
      <div class="quote-container">
        <div class="quote-container__quote">
          <p>${this._data.quote}</p>
          <div class="quote-container__refresh">
            <img id="quote-refresh"
              class="quote-container__refresh-icon"
              src="${refreshIcons}"
              alt="icon-refresh"
            />
          </div>
        </div>
        <div class="quote-container__author">"${this._data.author}"</div>
      </div>
      <div class="time-container">
        <div class="time-container__details">
          <div class="time-container__header">
            <img
              class="time-container__icon"
              src="${this._getGreetingIcon(greeting)}"
              alt="icon-moon"
            />
            <h4 class="time-container__greeting heading-four">
              Good ${greeting} <span class="time-container__current-time">, IT’S CURRENTLY</span>
            </h4>
          </div>
          <div class="time-container__time">
            <h1 class="time-container__hours heading-One">${
              this._data.time
            }</h1>
            <p class="time-container__ampm">${this._data.ampmStamp}</p>
          </div>
          <div class="time-container__location">
            <h3 class="heading-three">IN ${this._data.location}</h3>
          </div>
        </div>
        <div class="time-container__cta">
          <a id="more-less" class="time-container__button">
            <div class="time-container__button-text">MORE</div>
            <div class="time-container__arrow-container">
              <img
                class="time-container__arrow"
                src="${iconArrowDown}"
                alt="icon-arrow"
              />
            </div>
          </a>
        </div>
      </div>

      <div class="timezone-container-details timezone-container-details__hide">
        <div class="timezone-container-details__row">
          <span>CURRENT TIMEZONE</span>
          <h2 class="heading-two">${this._data.timezone}</h2>
        </div>
        <div class="timezone-container-details__row">
          <span>Day of the week</span>
          <h2 class="heading-two">${this._data.dayOfWeek}</h2>
        </div>
        <div class="timezone-container-details__row">
          <span>Day of the year</span>
          <h2 class="heading-two">${this._data.dayOfYear}</h2>
        </div>
        <div class="timezone-container-details__row">
          <span>Week number</span>
          <h2 class="heading-two">${this._data.weekNumber}</h2>
        </div>
      </div>
    `;
    return html;
  }

  _getGreeting() {
    const [hourString] = this._data.time.split(":");
    const hour = Number(hourString);
    const ampmStamp = this._data.ampmStamp;
    const isMorning =
      ((hour >= 5 || hour < 12) && ampmStamp == "AM") ||
      ((hour >= 12 || hour < 6) && ampmStamp == "PM");

    return isMorning ? "Morning" : "Evening";
  }

  _getGreetingIcon(greeting) {
    return greeting === "Morning" ? iconSun : iconMoon;
  }

  _getBackgroundImage(greeting) {
    const isTablet = window.matchMedia("(max-width: 768px)").matches;
    const isMobile = window.matchMedia("(max-width: 375px)").matches;
    if (isMobile) {
      return greeting === "Morning"
        ? backgroundImageDayTimeMobile
        : backgroundImageNightTimeMobile;
    }

    if (isTablet) {
      return greeting === "Morning"
        ? backgroundImageDayTimeTab
        : backgroundImageNightTimeTab;
    }

    return greeting === "Morning"
      ? backgroundImageDayTime
      : backgroundImageNightTime;
  }
}

export default new ClockAPPView();
