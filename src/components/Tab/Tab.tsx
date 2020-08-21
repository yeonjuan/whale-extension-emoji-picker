import React, {FC} from 'react';

interface IProps {
  children?: React.ReactNode;
  onSelect?: () => void;
  className?: string;
  isSelected?: boolean;
  key?: string;
}

const Tab: FC<IProps> = ({
  children,
  onSelect,
  isSelected = false,
} : IProps) => {
  return (
    <li onClick={onSelect}>
      <a className={isSelected ? 'selected' : 'unselected'}>
        {children}
      </a>
    </li>
  )
};

export default Tab;