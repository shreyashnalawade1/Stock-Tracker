const express = require("express");
const {
  getGenralNews,
  getCompanyNews,
  getSentinement,
} = require("../controllers/newsController");

const router = express.Router();

router.route("/sentiment").get(getSentinement);

router.route("/genral").get(getGenralNews);

router.route("/company").get(getCompanyNews);

module.exports = router;
