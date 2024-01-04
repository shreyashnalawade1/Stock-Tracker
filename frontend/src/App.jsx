import { BrowserRouter, Route, Routes } from "react-router-dom";
import MapBox from "./component/MapBox";
import NavBar from "./component/NavBar";
import News from "./component/News";
import StockBoard from "./component/StockBoard";
import CompanyProfile from "./component/CompanyProfile";
import CompanyNews from "./component/CompanyNews";
import AreaChart from "./component/AreaChart";
import LowHighCharts from "./component/LowHighCharts";
import BarCharts from "./component/BarCharts";
// h-screen w-screen  bg-black text-white  lg:grid md:grid  lg:grid-cols-2 lg:grid-rows-12   font-primary text-2xl   md:text-lg
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-black text-base text-white flex flex-col items-center lg:h-screen lg:w-screen  lg:grid lg:grid-cols-2 lg:grid-rows-12 lg:gap-y-4 overflow-hidden">
              <NavBar span={2}></NavBar>

              <MapBox></MapBox>
              <StockBoard></StockBoard>
              <News></News>
            </div>
          }
        ></Route>

        <Route
          path="/:ticker"
          element={
            <div className="bg-black text-base text-white flex flex-col items-center lg:h-screen lg:w-screen  lg:grid lg:grid-cols-3 lg:grid-rows-12 lg:gap-y-4 lg:gap-x-4 overflow-hidden">
              <NavBar span={3}></NavBar>
              <CompanyProfile></CompanyProfile>
              <AreaChart></AreaChart>
              <CompanyNews></CompanyNews>
              <LowHighCharts></LowHighCharts>
              <BarCharts></BarCharts>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
