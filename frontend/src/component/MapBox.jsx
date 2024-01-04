// import { AlbersUsa } from "@visx/geo";

import { useEffect, useState } from "react";
import IndexCard from "./IndexCard";
import { indexHome } from "../utils/stocks";

export default function MapBox() {
  const [index, setIndex] = useState([]);
  useEffect(() => {
    (async () => {
      const { us = [], europe = [], asia = [] } = await indexHome();

      setIndex([...us, ...europe, ...asia]);
      console.log(us, europe, asia);
    })();
  }, []);
  return (
    // bg-slate-800 lg:row-span-6 md:row-span-6 m-3 rounded-2xl p-8 pt-4 flex flex-col
    <div className="bg-slate-800 w-11/12 rounded-lg flex flex-col h-96 p-2  lg:w-full lg:h-full lg:row-span-5 ">
      <h3 className="border-b-2 border-solid border-white p-2 text-lg ">
        Indexes
      </h3>
      {/* grid lg:grid-cols-5 overflow-y-scroll no-scrollbar md:grid-cols-4 */}
      <div className="flex flex-wrap justify-evenly overflow-y-scroll lg:no-scrollbar lg:grid lg:grid-cols-4">
        {index?.map((el) => {
          return <IndexCard data={el} key={el.name}></IndexCard>;
        })}
      </div>
    </div>
  );
}
