import { useEffect, useState } from "react";
import { getCompanyNews } from "../utils/news";
import { useParams } from "react-router";
import NewsCard from "./NewsCard";

export default function CompanyNews() {
  const { ticker } = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getCompanyNews(ticker.toUpperCase());
      //   console.log(data);
      setNews([...data]);
    })();
  }, [ticker]);

  return (
    <div className="bg-slate-800 lg:col-span-1   rounded-2xl flex flex-col m-3 p-4 pt-4 lg:w-full lg:row-start-8 lg:h-full lg:row-span-5">
      <h4 className="border-solid border-b pb-1 border-white">Company News</h4>
      <div className="flex-grow overflow-y-scroll p-4 no-scrollbar">
        {news?.map((el) => (
          <NewsCard data={el} key={el?.headline}></NewsCard>
        ))}
      </div>
    </div>
  );
}
