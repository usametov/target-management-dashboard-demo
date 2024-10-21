'use client';

import BarChart from "@/components/BarChart";
import { useEffect, useState } from "react";
import {Target, TargetsTableProps} from "@/components/target";
import TargetTable from "@/components/TargetTable";

export default function Dashboard() {

  const [data, setData] = useState<Target[]>([] as Target[]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    // fetch data from API or other source
    fetch('/api/targets')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const pipelineStatusCounts = data.reduce((acc: { [key: string]: number }
    , current) => {
    const pipelineStatus = current.pipelineStatus as string;
    acc[pipelineStatus] = (acc[pipelineStatus] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(pipelineStatusCounts).filter(k=>k!="null");
  const targets = Object.values(pipelineStatusCounts);

  const transformedData = {
    labels,
    datasets: [
      {
        label: "Number of Acquisitions by Status",
        data: targets,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Target Management Dashboard</h1>
      <p>Bar chart and target table</p>
      <BarChart data={transformedData}/>
      <hr/>
      <TargetTable targets={data}/>
    </div>
  );
}
