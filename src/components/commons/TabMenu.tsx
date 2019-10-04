import * as React from 'react';

const isTabs = (elem: any) => elem.type.name === 'Tabs';
const isPanel = (elem: any) => elem.type.name === 'TabPanel';

const findTabs = (childElems: React.ReactNode[]) => childElems.filter(isTabs)[0];
const findPanelByIndex = (childElems: React.ReactNode[], index: number) => childElems.filter(isPanel)[index];

const TabMenu: React.FunctionComponent = ({
  children,
}) => {

  const [selectedTabIndex, selectTabIndex] = React.useState(0);
  const handleSelectTab = (index: number): void => selectTabIndex(index);

  const childElems = React.Children.toArray(children);

  const tabs = findTabs(childElems);
  const panel = findPanelByIndex(childElems, selectedTabIndex);

  return (
    <div>
      <div>
        {
          React.cloneElement(
            tabs as React.ReactElement,
            {
              onSelect: handleSelectTab
            }
          )
        }
        {
          React.cloneElement(panel as React.ReactElement)
        }
      </div>
    </div>
  );
};

export default TabMenu;
