import * as React from 'react';
import { EMOJI_TITLE_MAP, EmojiType, getEmojisByType } from 'src/emojis';
import {copyToClipboard, enumToArray} from '../../utils';
import {Tab, TabMenu, TabPanel, Tabs} from '../commons';

const EmojiPicker: React.FunctionComponent = () => {
  const emojiTypes = enumToArray(EmojiType);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault();
    copyToClipboard(e.currentTarget ? e.currentTarget.innerText: '');
  }
  return (
    <TabMenu>
      <Tabs>
        {
          emojiTypes.map(({id, name}) => (
            <Tab key={name}>
              <a> {EMOJI_TITLE_MAP[id]} </a>
            </Tab>
            )
          )
        }
      </Tabs>
        {
          emojiTypes.map(({name}) => (
            <TabPanel key={name}>
              {
                <div className="emojis">
                  {
                    getEmojisByType(EmojiType[name])
                    .map(emoji => (
                      <a
                        key={emoji}
                        onClick={handleClick}>
                        {emoji}
                      </a>
                    )
                  )
                  }
                </div>
              }
            </TabPanel>
            )
          )
        }
    </TabMenu>
  )
};

export default EmojiPicker;