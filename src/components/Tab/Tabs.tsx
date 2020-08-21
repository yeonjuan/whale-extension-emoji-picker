import React, {Children, cloneElement} from 'react';
import {IFCWithRole} from './types';

interface IProps {
  children: React.ReactElement[];
  selectedIndex: number;
  onSelect?: (index: number) => void;
}

const Tabs: IFCWithRole= ({
  children,
  onSelect,
  selectedIndex,
} : IProps) => {
  return (
    <ul>
      {
        Children.map(children, (child, index) => cloneElement(
          child,
          {
            isSelected: selectedIndex === index,
            onSelect: () => onSelect?.(index),
          })
        )
      }
    </ul>
  )
}

Tabs.role = 'Tabs';

export default Tabs;