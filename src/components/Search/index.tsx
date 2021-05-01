import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Input } from '../Input';

export interface SearchProps {
  className?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  onSearch?: (query: string) => void;
  onCancel?: () => void;
}

export const Search = ({
  className,
  onSearch,
  onCancel,
  value,
  clearable = true,
  ...other
}: SearchProps) => {
  const [query, setQuery] = useState(value || '');

  function handleChange(val: string) {
    setQuery(val);
  }

  function handleClear() {
    setQuery('');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13) {
      if (onSearch) {
        onSearch(query);
      }
      e.preventDefault();
    }
  }

  return (
    <div className={clsx('Search', className)}>
      <Icon className="Search-icon" type="search" />
      <Input
        className="Search-input"
        type="search"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...other}
      />
      {clearable && query && (
        <IconButton className="Search-clear" icon="close" onClick={handleClear} />
      )}
    </div>
  );
};