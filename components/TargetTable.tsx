import {Target, TargetsTableProps} from "@/lib/types";

const TargetTable: React.FC<TargetsTableProps> = ({targets}) => {
  return (    
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-bold text-gray-900">ID</th>
            <th className="px-4 py-2 text-left text-sm font-bold text-gray-900">Name</th>
            <th className="px-4 py-2 text-left text-sm font-bold text-gray-900">Description</th>
            <th className="px-4 py-2 text-left text-sm font-bold text-gray-900">Pipeline Status</th>
            <th className="px-4 py-2 text-left text-sm font-bold text-gray-900">Markets</th>
            <th className="px-4 py-2 text-left text-sm font-bold text-gray-900">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {targets.map((target) => (
            <tr key={target.id} className="border-b border-gray-200">
              <td className="px-4 py-2 text-sm text-gray-900">{target.id}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{target.name}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{target.description}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{target.pipelineStatus}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{target.markets.join(', ')}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{target.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TargetTable;
