import { Target } from "./types";

export function filterTargets(data: Target[], filter: string) : Target[] {

    return (filter == 'null' || filter=='') 
    ? data 
    : data.filter
        (d=>d.pipelineStatus?.toLowerCase()==filter.toLowerCase());
}

export function getPipelineStatusCounts(data: Target[]) 
   : { [key: string]: number } {    

    const pipelineStatusCounts = data.reduce((acc: { [key: string]: number }
        , current) => {
        const pipelineStatus = current.pipelineStatus as string;
        acc[pipelineStatus] = (acc[pipelineStatus] || 0) + 1;
        return acc;
      }, {});
    
    return pipelineStatusCounts;  
}