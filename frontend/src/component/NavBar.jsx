/* eslint-disable react/prop-types */
export default function NavBar({ span }) {
  return (
    <div
      // border-solid border-b-2 border-white  lg:row-span-1  border-spacing-2  lg:col-span-3 flex items-center p-4
      className={`border-solid border-b-2 border-white p-3 text-center lg:h-full lg:w-auto lg:col-span-${span} lg:row-span-1 lg:text-left`}
    >
      {/* text-4xl font-heading flex-grow */}
      <h1 className="font-heading text-3xl">Stocks Tracker</h1>
    </div>
  );
}
