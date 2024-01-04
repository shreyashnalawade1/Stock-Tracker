const finnhub = require("finnhub");
const { getJson } = require("serpapi");
const { resource } = require("../app");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINHUB_API_KEY;

const finnhubClient = new finnhub.DefaultApi();

const today = new Date();
today.setDate(today.getDate() - 1);
const date = `${today.getFullYear()}-${
  today.getMonth() + 1 < 10
    ? "0" + (today.getMonth() + 1)
    : today.getMonth() + 1
}-${today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`;
exports.marketNews = async () => {
  return new Promise((resolve, reject) => {
    finnhubClient.marketNews("general", {}, (error, data, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

exports.companyNews = async (ticker) => {
  console.log(date);
  return new Promise((resolve, reject) => {
    finnhubClient.companyNews(ticker, date, date, (error, data, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

exports.indexes = async () => {
  return new Promise((resolve, reject) => {
    try {
      getJson(
        {
          engine: "google_finance_markets",
          trend: "indexes",
          api_key: process.env.SERPAPI_KEY,
        },
        (json) => {
          resolve(json);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
