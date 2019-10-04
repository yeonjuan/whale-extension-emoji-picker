import * as React from 'react';

interface IProps {
  children: React.ReactElement[],
  onSelect?: (index: number) => void;
}

const Tabs: React.FunctionComponent = ({
  children,
  onSelect,
}: IProps) => {
  return (
    <ul>
      {
        React.Children.map(children, (child, index) => React.cloneElement(
          child,
          {
            onSelect: () => onSelect && onSelect(index),
          })
        )
      }
    </ul>
  )
}

export default Tabs;