import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router";
import { getTimeSeries } from "../utils/stocks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "hide",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
};

export default function AreaChart() {
  const [numDays, setNumDays] = useState(365);
  const { ticker } = useParams();
  const [cData, setCData] = useState([]);
  const [labels, setLable] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getTimeSeries(ticker.toUpperCase(), numDays);
      const close_data = [];
      const date_data = [];
      for (const el of data) {
        close_data.push(el?.close_val);
        date_data.push(el?.date_val);
      }
      close_data.reverse();
      date_data.reverse();
      setLable([...date_data]);
      setCData([...close_data]);
    })();
  }, [ticker, numDays]);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Closing Value",
        data: cData,
        borderColor: "rgb(218,165,32)",
        backgroundColor: "rgb(238,232,170,.3)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div
      className=" lg:col-span-2 bg-slate-800 m-3 rounded-2xl p-4 grid grid-rows-6 grid-cols-1 w-11/12 lg:w-full lg:row-span-6 lg:h-full"
      id="largeChart"
    >
      <div className="row-span-1 flex">
        <span className="text-2xl flex-grow">{ticker.toUpperCase()}</span>
        <span
          className="mx-2"
          onClick={() => {
            setNumDays(5);
          }}
        >
          5D
        </span>
        <span className="mx-2" onClick={() => setNumDays(365)}>
          1Y
        </span>
        <span className="mx-2" onClick={() => setNumDays(1825)}>
          5Y
        </span>
      </div>
      <div className="row-span-5">
        {" "}
        <Line options={options} data={data} width={"100%"} />
      </div>
    </div>
  );
}
