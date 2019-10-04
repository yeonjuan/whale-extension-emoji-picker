import * as React from 'react';
import { EmojiType, getEmojisByType } from 'src/emojis';
import {enumToArray} from '../../utils';
import {Tab, TabMenu, TabPanel, Tabs} from '../commons';

const EmojiPicker: React.FunctionComponent = () => {
  const emojiTypes = enumToArray(EmojiType);
  return (
    <TabMenu>
      <Tabs>
        {
          emojiTypes.map(({name}) => (
            <Tab key={name}>
              {name as string}
            </Tab>
            )
          )
        }
      </Tabs>
        {
          emojiTypes.map(({name}) => (
            <TabPanel key={name}>
              {getEmojisByType(EmojiType[name])}
            </TabPanel>
            )
          )
        }
    </TabMenu>
  )
};

export default EmojiPicker;