import * as React from 'react';

interface IProps {
  children: React.ReactChildren,
  onSelect: () => void,
}

const Tab: React.FunctionComponent = ({
  children,
  onSelect,
}: IProps) => {
  return (
    <li onClick={onSelect}>
      {children}
    </li>
  )
};

export default Tab;