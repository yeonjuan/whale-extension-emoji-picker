import * as React from 'react';

export interface ITabProps {
  children?: React.ReactNode;
  onSelect?: () => void;
  className?: string;
  isSelected?: boolean;
  key?: string;
}

const Tab: React.SFC<ITabProps> = ({
  children,
  onSelect,
  isSelected = false,
} : ITabProps) => {
  return (
    <li onClick={onSelect}>
      <a className={isSelected ? 'selected' : 'unselected'}>
        {children}
      </a>
    </li>
  )
};

export default Tab;