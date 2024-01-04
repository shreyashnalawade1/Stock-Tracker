const {
  marketNews,
  companyNews,
  companySentiments,
} = require("../utils/finhub");

exports.getGenralNews = async (req, res, next) => {
  try {
    const data = await marketNews();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.getCompanyNews = async (req, res, next) => {
  try {
    const { ticker } = req.query;
    const data = await companyNews(ticker);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getSentinement = async (req, res, next) => {
  try {
    const { ticker } = req.query;
    const data = await companySentiments(ticker);

    res.status(200).send({
      status: "success",
      data,
    });
  } catch (err) {
    next(err);
  }
};
