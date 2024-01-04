import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getBarSeries } from "../utils/stocks";
import { useParams } from "react-router";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

export default function BarCharts() {
  const { ticker } = useParams();
  const [label, setLabel] = useState([]);
  const [min, setMin] = useState([]);
  const [high, setHigh] = useState([]);
  const [avg, setAvg] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getBarSeries(ticker);
      //   console.log(data);
      const lab = [];
      const minv = [];
      const highv = [];
      const avgv = [];
      for (const el of data) {
        lab.push(el?.year);
        highv.push(el?.high);
        minv.push(el?.min);
        avgv.push(el?.avg);
      }
      setLabel([...lab]);
      setMin([...minv]);
      setHigh([...highv]);
      setAvg([...avgv]);
    })();
  }, [ticker]);

  const data = {
    labels: label,
    datasets: [
      {
        label: "Min Value",
        data: min,
        borderColor: "rgb(239 68 68)",
        backgroundColor: "rgba(239 ,68 ,68, 0.2)",
      },
      {
        label: "Avg Value",
        data: avg,
        borderColor: "rgb(218,165,32)",
        backgroundColor: "rgba(218,165,32, 0.2)",
      },
      {
        label: "Max Value",
        data: high,
        borderColor: "rgb(34 197 94)",
        backgroundColor: "rgba(34,197,94, 0.2)",
      },
    ],
  };

  return (
    <div className="bg-slate-800 lg:col-span-1   rounded-2xl flex flex-col m-3 p-4 pt-4 lg:w-full lg:row-start-8 lg:h-full lg:row-span-5">
      <h3 className="text-lg">Bar Charts</h3>
      <div className="flex-grow">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
