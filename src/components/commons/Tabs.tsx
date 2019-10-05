import * as React from 'react';
import {IFunctionalComponentWithRole} from './interfaces';

interface IProps {
  children: React.ReactElement[],
  onSelect?: (index: number) => void;
}

const Tabs: IFunctionalComponentWithRole= ({
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

Tabs.role = 'Tabs';

export default Tabs;