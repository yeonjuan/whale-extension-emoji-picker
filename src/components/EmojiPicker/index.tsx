import * as React from 'react';
import { EMOJI_TITLE_MAP, EmojiType, getEmojisByType } from 'src/emojis';
import {copyToClipboard, enumToArray} from '../../utils';
import {Tab, TabMenu, TabPanel, Tabs} from '../commons';

interface IEmojiPickerProps {
  onPick?: (emoji: string) => void;
}

const EmojiPicker: React.SFC<IEmojiPickerProps> = ({
  onPick,
}) => {
  const emojiTypes = enumToArray(EmojiType);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault();
    if (e.currentTarget && e.currentTarget.innerText) {
      const emoji = e.currentTarget.innerText;
      copyToClipboard(emoji);
      if (typeof onPick === 'function') {
        onPick(emoji);
      }
    }
  }
  return (
    <TabMenu>
      <Tabs>
        {
          emojiTypes.map(({id, name}) => (
            <Tab key={name}>
              <>
                {EMOJI_TITLE_MAP[id]}
              </>
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