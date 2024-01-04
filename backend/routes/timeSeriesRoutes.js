const express = require("express");

const {
  getTimeSeries,
  getToday,
  getIndex,
  getBarCharts,
} = require("../controllers/timeSeriesController");

const router = express.Router();

router.route("/").get(getTimeSeries);
router.route("/home").get(getToday);
router.route("/index").get(getIndex);
router.route("/bar").get(getBarCharts);
module.exports = router;
