import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (filter: string) => void;
  children?: React.ReactNode;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange, children }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <label className="flex items-center">            
      <input type="text" value={filter} onChange={handleFilterChange}
        placeholder="Filter"
        className="w-full p-4 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
      {children}
    </label>
  );
};

export default Filter;
