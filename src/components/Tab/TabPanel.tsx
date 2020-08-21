import React from 'react';
import {IFCWithRole} from './types';

const TabPanel: IFCWithRole = ({
  children,
}) => {
  return (
    <div>
      {children}
    </div>
  )
}

TabPanel.role = 'TabPanel';

export default TabPanel;
