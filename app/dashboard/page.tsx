'use client';
import Filter from "@/components/Filter";
import BarChart from "@/components/BarChart";
import { useEffect, useState } from "react";
import {Target, TargetsTableProps} from "@/lib/types";
import TargetTable from "@/components/TargetTable";
import {getPipelineStatusCounts, filterTargets} from "@/lib/helpers";

export default function Dashboard() {

  const [filter, setFilter] = useState('');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const [data, setData] = useState<Target[]>([] as Target[]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    fetch('/api/targets')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const filteredData = filterTargets(data, filter);
  const pipelineStatusCounts = getPipelineStatusCounts(filteredData);

  const labels = Object.keys(pipelineStatusCounts); //.filter(k=>k!="null"); //TODO: clarify this with business 
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
      <Filter onFilterChange={handleFilterChange} />
      <p className="text-3xl font-bold mb-4">Acquisition Targets</p>
      <BarChart data={transformedData}/>
      <hr/>
      <TargetTable targets={filteredData}/>
    </div>
  );
}
