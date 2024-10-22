'use client';
import Filter from "@/components/Filter";
import BarChart from "@/components/BarChart";
import { useEffect, useState } from "react";
import {Target, TargetsTableProps} from "@/lib/types";
import TargetTable from "@/components/TargetTable";
import {getPipelineStatusCounts, filterTargets} from "@/lib/helpers";
import { FaFilter } from 'react-icons/fa';
import {MdDashboard} from 'react-icons/md'

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
      <h1 className="text-3xl font-bold mb-4 flex items-center">
      <MdDashboard className="mr-2 text-gray-500" />
      <div className="w-3/4 flex justify-left">
        Acquisition Target Management Dashboard 
      </div>
      
      <div className="w-1/4 flex justify-end"> <Filter onFilterChange={handleFilterChange} >      
        <FaFilter className="mr-2" />
      </Filter></div>   
      
      </h1>
      <BarChart data={transformedData}/>
      <hr/>
      <TargetTable targets={filteredData}/>
    </div>
  );
}
