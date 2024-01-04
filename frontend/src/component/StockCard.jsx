/* eslint-disable react/prop-types */

import { useNavigate } from "react-router";

export default function StockCard({ data }) {
  //   console.log(data);
  const navigate = useNavigate();
  let color;
  if (data?.diff < 0) {
    color = "border-green-500";
  } else if (data?.diff == 0) {
    color = "border-white";
  } else {
    color = "border-red-500";
  }
  return (
    <div
      className=" grid grid-cols-9 grid-rows-1 text-lg p-3 border-solid border-white border-2 my-2 lg:border-0"
      onClick={() => {
        navigate(`/${data?.ticker[0]}`);
      }}
    >
      <h4 className=" col-span-6 lg:col-span-3">{data?.company}</h4>
      <h4 className="hidden lg:block lg:col-span-2">{data?.open.toFixed(2)}</h4>
      <h4 className="hidden lg:block lg:col-span-2">
        {data?.close.toFixed(2)}
      </h4>
      <h4
        className={`border-solid border-2 flex items-center justify-center col-span-3 ${color}  col-span-3 lg:col-span-2 `}
      >
        {data?.diff.toFixed(2)}
      </h4>
    </div>
  );
}
