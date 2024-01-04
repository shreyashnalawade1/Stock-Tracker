/* eslint-disable react/prop-types */
export default function IndexCard({ data }) {
  const movement = data?.price_movement?.movement;
  let color;
  console.log(movement);
  if (movement === "Down") {
    color = "border-red-500";
  } else {
    color = "border-green-500";
  }
  return (
    <div
      className={` border-solid border-2 m-1 p-3 ${color}  w-2/5 lg:w-auto `}
    >
      <h3>{data?.name}</h3>
      <h3>{data?.price}$</h3>
      <h3>{data?.price_movement?.percentage}%</h3>
    </div>
  );
}
