import * as React from 'react';
import {IFunctionalComponentWithRole} from './interfaces';

interface IProps {
  children: React.ReactElement[];
  onSelect?: (index: number) => void;
  selectedIndex: number;
}

const Tabs: IFunctionalComponentWithRole= ({
  children,
  onSelect,
  selectedIndex,
} : IProps) => {
  return (
    <ul>
      {
        React.Children.map(children, (child, index) => React.cloneElement(
          child,
          {
            isSelected: selectedIndex === index,
            onSelect: () => onSelect && onSelect(index),
          })
        )
      }
    </ul>
  )
}

Tabs.role = 'Tabs';

export default Tabs;