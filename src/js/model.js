import {
  API_URL_FOR_IPADDRESS,
  API_URL_FOR_QUOTES,
  API_URL_FOR_TIME,
  API_URL_FOR_GEOLOCATION,
  GEOLOCATION_KEY,
} from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
  quote: "",
  author: "",
  ip: "",
  timezones: "Asia/Dhaka",
  time: "",
  ampmStamp: "",
  location: "",
  timezone: "",
  dayOfWeek: "",
  dayOfYear: "",
  weekNumber: "",
};
export const getIPAddress = async function () {
  try {
    const ipInformation = await getJSON(`${API_URL_FOR_IPADDRESS}`);
    state.ip = ipInformation.ip;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getGeoLocation = async function (ipAddress) {
  try {
    const geoLocation = await getJSON(
      `${API_URL_FOR_GEOLOCATION}?ip=${ipAddress}&apikey=${GEOLOCATION_KEY}`
    );
    state.timezones = geoLocation.data.timezone.id;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getLocation = async function () {
  try {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const { latitude, longitude } = pos.coords;
    const res = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=742721280376254714780x97916`
    );
    if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
    const data = await res.json();
    state.location = ` ${data.city}, ${data.country}`;
  } catch (err) {
    console.error(`${err.message}`);
  }
};

export const getTime = async function (regionName = "Asia/Dhaka") {
  try {
    const time = await getJSON(`${API_URL_FOR_TIME}${regionName}`);
    let currentTimeStamp = new Date(time.datetime).toLocaleTimeString();
    const ampmStamp = currentTimeStamp.split(" ")[1];
    state.ampmStamp = ampmStamp;
    const timeStamp = `${currentTimeStamp
      .split(" ")[0]
      .split(":")[0]
      .padStart(2, "0")}:${currentTimeStamp
      .split(" ")[0]
      .split(":")[1]
      .padStart(2, "0")}`;
    state.time = timeStamp;
    state.timezone = time.timezone;
    state.dayOfWeek = String(time.day_of_week + 1).padStart(2, "0");
    state.dayOfYear = String(time.day_of_year).padStart(3, "0");
    state.weekNumber = String(time.week_number).padStart(2, "0");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getQuote = async function () {
  try {
    const quote = await getJSON(`${API_URL_FOR_QUOTES}random`);
    state.author = quote[0].author;
    state.quote = quote[0].content;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
