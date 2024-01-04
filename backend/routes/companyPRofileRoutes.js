const express = require("express");

const {
  getOneCompanyProfile,
  getAllCompanyProfile,
} = require("../controllers/companyProfileController");

const router = express.Router();

router.route("/").get(getAllCompanyProfile);

router.route("/one").get(getOneCompanyProfile);

module.exports = router;
