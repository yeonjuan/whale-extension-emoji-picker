import * as React from 'react';
import {IFunctionalComponentWithRole} from './interfaces';

const TabPanel: IFunctionalComponentWithRole = ({
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
