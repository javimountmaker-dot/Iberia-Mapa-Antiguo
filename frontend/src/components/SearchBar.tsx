import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar lugar..."
      style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
    />
  );
};

export default SearchBar;
