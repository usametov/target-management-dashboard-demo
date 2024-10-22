import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div>
      <label>Filter:</label>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
