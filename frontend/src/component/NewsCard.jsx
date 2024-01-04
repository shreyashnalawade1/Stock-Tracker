/* eslint-disable react/prop-types */

export default function NewsCard({ data }) {
  return (
    <a href={data?.url} className="block mt-3" target="_blank" rel="noreferrer">
      <div className=" h-1/6  grid grid-cols-4 lg:text-lg md:text-xs sm:text-xs">
        <img className="col-span-1" src={data?.image}></img>
        <div className="col-span-3 pl-2">
          <h4>{data?.headline}</h4>
        </div>
      </div>
    </a>
  );
}
