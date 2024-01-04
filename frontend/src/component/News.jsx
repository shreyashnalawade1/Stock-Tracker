import { useEffect, useState } from "react";
import { genralNews } from "../utils/news";
import NewsCard from "./NewsCard";

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await genralNews();
      setNews(data?.data);
    })();
  }, []);
  return (
    <div className="bg-slate-800 w-11/12 rounded-lg flex flex-col h-96 p-2 m-3 lg:w-auto lg:h-full lg:col-start-2 lg:row-start-2 lg:row-span-11">
      <h3 className="border-b-2 border-solid border-white p-2 text-lg ">
        Genral News
      </h3>
      <div className="flex-grow  overflow-y-scroll p-4 lg:no-scrollbar ">
        {news?.map((el) => {
          return <NewsCard data={el} key={el.headline}></NewsCard>;
        })}
      </div>
    </div>
  );
}
