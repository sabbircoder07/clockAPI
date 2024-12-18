function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,a={},i={},r=t.parcelRequire94c2;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequire94c2=r),(0,r.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>a,set:e=>a=e,enumerable:!0,configurable:!0});var a,i=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)i.set(t[a],{baseUrl:e,path:t[a+1]})}}),r("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["hPeys","index.79b5a3e1.js","90YGo","icon-refresh.964da591.svg","a8hzO","icon-sun.58c08d79.svg","2bpmq","icon-moon.d57590e7.svg","buE2p","icon-arrow-down.6b1a1f49.svg","3EXg9","icon-arrow-up.c61f4ecd.svg","6jAIX","bg-image-daytime.f9ac6e12.jpg","gOKCL","bg-image-nighttime.96b44cd1.jpg","4AMVH","bg-image-daytime.194b9b74.jpg","c2uht","bg-image-nighttime.11a6e0df.jpg","4t01f","bg-image-daytime.1b34b846.jpg","k4cgq","bg-image-nighttime.94b246f9.jpg"]'));const n=async function(e){try{console.log(e);let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(()=>{t(Error("Request took too long! Timeout after 30 second"))},3e4)})]);if(!t.ok)throw Error(`${t.statusText} ${t.status}`);return await t.json()}catch(e){throw console.log(e),e}},o={quote:"",author:"",ip:"",timezones:"Asia/Dhaka",time:"",ampmStamp:"",location:"",timezone:"",dayOfWeek:"",dayOfYear:"",weekNumber:""},s=async function(){try{let e=await n("https://api.ipify.org?format=json");o.ip=e.ip}catch(e){throw console.error(e),e}},c=async function(){try{let{latitude:e,longitude:t}=(await new Promise((e,t)=>{navigator.geolocation.getCurrentPosition(e,t)})).coords,a=await fetch(`https://geocode.xyz/${e},${t}?geoit=json&auth=742721280376254714780x97916`);if(!a.ok)throw Error(`Problem with geocoding ${a.status}`);let i=await a.json();o.location=` ${i.city}, ${i.country}`}catch(e){console.error(`${e.message}`)}},d=async function(e="Asia/Dhaka"){try{let t=await n(`https://worldtimeapi.org/api/timezone/${e}`),a=new Date(t.datetime).toLocaleTimeString(),i=a.split(" ")[1];o.ampmStamp=i;let r=`${a.split(" ")[0].split(":")[0].padStart(2,"0")}:${a.split(" ")[0].split(":")[1].padStart(2,"0")}`;o.time=r,o.timezone=t.timezone,o.dayOfWeek=String(t.day_of_week+1).padStart(2,"0"),o.dayOfYear=String(t.day_of_year).padStart(3,"0"),o.weekNumber=String(t.week_number).padStart(2,"0")}catch(e){throw console.error(e),e}},l=async function(){try{let e=await n("https://api.quotable.io/quotes/random");o.author=e[0].author,o.quote=e[0].content}catch(e){throw console.error(e),e}};new class{};var m={};m=new URL("icon-refresh.964da591.svg",import.meta.url).toString();var g={};g=new URL("icon-sun.58c08d79.svg",import.meta.url).toString();var _={};_=new URL("icon-moon.d57590e7.svg",import.meta.url).toString();var u={};u=new URL("icon-arrow-down.6b1a1f49.svg",import.meta.url).toString();var h={};h=new URL("icon-arrow-up.c61f4ecd.svg",import.meta.url).toString();var p={};p=new URL("bg-image-daytime.f9ac6e12.jpg",import.meta.url).toString();var f={};f=new URL("bg-image-nighttime.96b44cd1.jpg",import.meta.url).toString();var v={};v=new URL("bg-image-daytime.194b9b74.jpg",import.meta.url).toString();var w={};w=new URL("bg-image-nighttime.11a6e0df.jpg",import.meta.url).toString();var y={};y=new URL("bg-image-daytime.1b34b846.jpg",import.meta.url).toString();var S={};S=new URL("bg-image-nighttime.94b246f9.jpg",import.meta.url).toString();class H{_parentElement=document.querySelector(".clock-app");_data;render(e){if(!e)return;this._data=e;let t="";t=this._generateMarkup(),this._clearMarkup(),this._parentElement.insertAdjacentHTML("beforeend",t)}_clearMarkup(){this._parentElement.innerHTML=""}renderSpinner=function(){let e=`<div class="loader-container">
  <div class="loader"></div>
  <div class="loader-text">Loading...</div>
</div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("beforeend",e)};addLoadHandler(e){window.addEventListener("load",e)}addResizeHandler(e){window.addEventListener("resize",e)}addRefreshHandler(e){this._parentElement.addEventListener("click",function(t){let a=t.target.closest("#quote-refresh");a&&a.addEventListener("click",e)})}addHandlerMoreLess(){this._parentElement.addEventListener("click",function(t){t.preventDefault();let a=t.target.closest("#more-less");a&&a.addEventListener("click",function(t){let i=document.querySelector(":root");i.style.setProperty("--color-primary-other","#000000");let r=document.querySelector(".time-container__arrow"),n=document.querySelector(".timezone-container-details"),o=document.querySelector(".quote-container"),s=document.querySelector(".time-container__button-text"),c=document.querySelector(".time-container__greeting");c.textContent.trim().includes("Evening")?(i.style.setProperty("--color-primary-other","#000000"),i.style.setProperty("--color-White-other","#ffffff")):c.textContent.trim().includes("Morning")&&(i.style.setProperty("--color-primary-other","#ffffff"),i.style.setProperty("--color-White-other","#000000")),o.classList.toggle("quote-container__hide"),a.classList.toggle("active"),n.classList.toggle("timezone-container-details__hide"),a.classList.contains("active")?(r.src=e(h),r.style.height="28px",r.style.width="28px",s.textContent="Less"):(r.src=e(u),r.style.height="8px",r.style.width="8px",s.textContent="More")})})}_generateMarkup(){let t=this._getGreeting(),a=this._getBackgroundImage(t);return document.querySelector("body").style.backgroundImage=`url(${a})`,`
      <div class="quote-container">
        <div class="quote-container__quote">
          <p>${this._data.quote}</p>
          <div class="quote-container__refresh">
            <img id="quote-refresh"
              class="quote-container__refresh-icon"
              src="${e(m)}"
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
              src="${this._getGreetingIcon(t)}"
              alt="icon-moon"
            />
            <h4 class="time-container__greeting heading-four">
              Good ${t} <span class="time-container__current-time">, IT\u{2019}S CURRENTLY</span>
            </h4>
          </div>
          <div class="time-container__time">
            <h1 class="time-container__hours heading-One">${this._data.time}</h1>
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
                src="${e(u)}"
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
    `}_getGreeting(){let[e]=this._data.time.split(":"),t=Number(e),a=this._data.ampmStamp;return(t>=5||t<12)&&"AM"==a||(t>=12||t<6)&&"PM"==a?"Morning":"Evening"}_getGreetingIcon(t){return"Morning"===t?e(g):e(_)}_getBackgroundImage(t){let a=window.matchMedia("(max-width: 768px)").matches;return window.matchMedia("(max-width: 375px)").matches?"Morning"===t?e(y):e(S):a?"Morning"===t?e(v):e(w):"Morning"===t?e(p):e(f)}}var b=new H;const E=async function(){try{b.renderSpinner(),await l(),await s(),await d(o.timezones),await c(),setTimeout(function(){b.render(o)},1e3)}catch(e){console.error(e)}};b.addLoadHandler(E),b.addRefreshHandler(E),b.addHandlerMoreLess(),b.addResizeHandler(function(){let e=b._getGreeting(),t=b._getBackgroundImage(e);document.body.style.backgroundImage=`url(${t})`});
//# sourceMappingURL=index.79b5a3e1.js.map
