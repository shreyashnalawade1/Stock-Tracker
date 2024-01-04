const dotenv = require("dotenv");
const sql = require("mssql");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const { config } = require("./config");

const port = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    await sql.connect(config);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB().then(() => {
  console.log("connection to data base succefull");
  app.listen(port, () => {
    console.log("Listening for requests at port ", port);
  });
});
