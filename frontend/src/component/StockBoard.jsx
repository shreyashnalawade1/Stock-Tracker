import { useEffect, useState } from "react";
import { stockHome } from "../utils/stocks";
import StockCard from "./StockCard";

export default function StockBoard() {
  const [stocks, setStocks] = useState();
  useEffect(() => {
    (async () => {
      const data = await stockHome();
      setStocks(data);
    })();
  }, []);
  return (
    <div className="bg-slate-800 w-11/12 rounded-lg flex flex-col h-96 p-2  lg:w-auto lg:h-full lg:row-start-7 lg:row-span-6 mt-4 lg:mt-0">
      <h3 className="border-b-2 border-solid border-white p-2 text-lg">
        Stocks (Click cards below)
      </h3>
      <div className="flex-grow  overflow-y-scroll p-4 no-scrollbar ">
        {stocks?.map((el) => {
          return <StockCard key={el.ticker} data={el}></StockCard>;
        })}
      </div>
    </div>
  );
}
