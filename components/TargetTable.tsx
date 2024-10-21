import {Target, TargetsTableProps} from "./target";

const TargetTable: React.FC<TargetsTableProps> = ({targets}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Pipeline Status</th>
          <th>Markets</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {targets.map((target) => (
          <tr key={target.id}>
            <td>{target.id}</td>
            <td>{target.name}</td>
            <td>{target.description}</td>
            <td>{target.pipelineStatus}</td>
            <td>{target.markets.join(', ')}</td>
            <td>{target.lastUpdated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TargetTable;
