import React, {Children, cloneElement, FC, ReactElement, ReactNode, useState} from 'react';

const isTabs = (elem: any) => elem.type.role === 'Tabs';
const isPanel = (elem: any) => elem.type.role === 'TabPanel';

const findTabs = (childElems: ReactNode[]) => childElems.filter(isTabs)[0];
const findPanelByIndex = (childElems: ReactNode[], index: number) => childElems.filter(isPanel)[index];

interface IProps {
  children: React.ReactNode;
}

const TabMenu: FC<IProps> = ({
  children,
}) => {

  const [selectedTabIndex, selectTabIndex] = useState(0);
  const handleSelectTab = (index: number): void => selectTabIndex(index);

  const childElems = Children.toArray(children);

  const tabs = findTabs(childElems);
  const panel = findPanelByIndex(childElems, selectedTabIndex);

  return (
    <div>
      <div>
        {
           tabs && cloneElement(
            tabs as ReactElement,
            {
              onSelect: handleSelectTab,
              selectedIndex: selectedTabIndex,
            }
          )
        }
        {
          panel && cloneElement(panel as ReactElement)
        }
      </div>
    </div>
  );
};

export default TabMenu;
