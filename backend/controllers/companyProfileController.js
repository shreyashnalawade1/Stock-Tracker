const sql = require("mssql");

exports.getOneCompanyProfile = async (req, res, next) => {
  try {
    const { ticker } = req.query;
    const query = `SELECT * FROM [dbo].[company_profile] JOIN [dbo].[company_tickers] ON [dbo].[company_profile].ticker=[dbo].[company_tickers].ticker  WHERE [dbo].[company_tickers].ticker='${ticker}'`;
    const data = await sql.query(query);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllCompanyProfile = async (req, res, next) => {
  try {
    const query = `SELECT * FROM [dbo].[company_profile];`;
    const data = await sql.query(query);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};
