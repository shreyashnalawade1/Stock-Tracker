const { config } = require("./config");
const csv = require("csv-parser");
const fs = require("fs");
const sql = require("mssql");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendData(ticker) {
  try {
    let curQuery = [];
    fs.createReadStream(ticker.replace(".", "-") + ".csv")
      .pipe(csv())
      .on("data", (data) => {
        let cuQuery = `('${ticker}','${data?.Date}',${data?.Open},${data?.Close},${data?.High},${data?.Low})`;
        curQuery.push(cuQuery);
      })
      .on("end", async () => {
        let i = 0;
        while (i < curQuery.length) {
          let query = "INSERT INTO [dbo].[time_series] VALUES ";
          for (let j = i; j < Math.min(curQuery.length, i + 800); ++j) {
            query = query + curQuery[j] + ",";
          }
          query = query.slice(0, query.length - 1) + ";";
          i += 800;
          await sql.query(query);
          await sleep(2000);
        }
      });
  } catch (err) {
    console.log(err);
  }
}

(async () => {
  try {
    await sql.connect(config);
    const response = await sql.query("SELECT * FROM [dbo].[company_tickers]");
    const rows = response?.recordset;
    let companyQuery = [];

    for (const row of rows) {
      const { company_name, ticker } = row;
      await sendData(ticker);
      console.log("done", ticker);
    }

    // console.log(companyQuery);
  } catch (err) {
    console.log(err);
  }
})();

//
