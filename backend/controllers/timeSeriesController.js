const sql = require("mssql");
const { indexes } = require("../utils/finhub");

exports.getTimeSeries = async function (req, res, next) {
  try {
    const { numDays, ticker } = req.query;
    const query = `SELECT TOP ${numDays} * 
    FROM [dbo].[time_series]
    WHERE ticker='${ticker}' ORDER BY date_val DESC;`;
    const data = await sql.query(query);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const today = new Date();
const curDate = `${today.getFullYear()}-${today.getMonth() + 1}-${
  today.getDate() - 1
}`;
const preDate = `${today.getFullYear()}-${today.getMonth() + 1}-${
  today.getDate() - 2
}`;

exports.getToday = async function (req, res, next) {
  try {
    const query = `SELECT * FROM [dbo].[time_series] JOIN [dbo].[company_tickers] ON [dbo].[company_tickers].ticker=[dbo].[time_series].ticker WHERE  datediff(day,date_val,(SELECT max(date_val) from [dbo].[time_series] where ticker='AMZN'))<=1;`;
    // console.log(query);
    const data = await sql.query(query);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.getIndex = async function (req, res, next) {
  try {
    const data = await indexes();
    res.status(200).send({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.getBarCharts = async function (req, res, next) {
  try {
    const { ticker } = req.query;
    const query = `SELECT YEAR(date_val) AS year,max(high_val) AS high,min(low_val) AS min,avg(close_val) AS avg
    FROM [dbo].[time_series]
    WHERE ticker='${ticker}'
    GROUP BY  YEAR(date_val) ORDER BY year;`;
    const data = await sql.query(query);
    res.status(200).send({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};
