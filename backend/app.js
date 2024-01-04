const express = require("express");
const cors = require("cors");
const compression = require("compression");
const cookieParser = require("cookie-parser");

const timerSeriesRouter = require("./routes/timeSeriesRoutes");
const companyProfileRouter = require("./routes/companyPRofileRoutes");

const newRouter = require("./routes/newRoutes");

const app = express();
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.use(compression());

app.use("/api/v1/timeSeries", timerSeriesRouter);
app.use("/api/v1/companyProfile", companyProfileRouter);
app.use("/api/v1/news", newRouter);

module.exports = app;
