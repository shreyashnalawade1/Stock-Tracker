import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  elements: {
    point: {
      radius: 0,
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
};

export default function LowHighCharts() {
  const [numDays, setNumDays] = useState(365);
  const { ticker } = useParams();
  const [cHata, setHData] = useState([]);
  const [cLata, setLData] = useState([]);

  const [labels, setLable] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getTimeSeries(ticker.toUpperCase(), numDays);
      const low_data = [];
      const high_data = [];
      const date_data = [];
      for (const el of data) {
        low_data.push(el?.low_val);
        high_data.push(el?.high_val);
        date_data.push(el?.date_val);
      }
      low_data.reverse();
      date_data.reverse();
      high_data.reverse();
      setLable([...date_data]);
      setHData([...high_data]);
      setLData([...low_data]);
    })();
  }, [ticker, numDays]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Low",
        data: cLata,
        borderColor: "rgb(239 68 68)",
        backgroundColor: "rgb(30 41 59)",
      },
      {
        label: "High",
        data: cHata,
        borderColor: "rgb(34 197 94)",
        backgroundColor: "rgb(30 41 59)",
      },
    ],
  };

  return (
    <div className="bg-slate-800 lg:col-span-1   rounded-2xl flex flex-col m-3 p-4 pt-4 lg:w-full lg:row-start-8 lg:h-full lg:row-span-5">
      <div className="row-span-1 flex">
        <span className="text-lg flex-grow">Low High Chart</span>
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
      <Line options={options} data={data} />
    </div>
  );
}
