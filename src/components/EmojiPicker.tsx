import React, {FC, MouseEvent} from 'react';
import {EMOJI_TITLE_MAP, EmojiType, getEmojisByType } from 'src/emojis';
import {copyToClipboard, enumToArray} from './../utils';
import {Tab, TabMenu, TabPanel, Tabs} from './Tab';

interface IProps {
  onPick?: (emoji: string) => void;
}

export const EmojiPicker: FC<IProps> = ({
  onPick,
}) => {
  const emojiTypes = enumToArray(EmojiType);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault();
    if (event.currentTarget?.innerText) {
      const emoji = event.currentTarget.innerText;
      copyToClipboard(emoji);
      onPick?.(emoji);
    }
  }
  return (
    <TabMenu>
      <Tabs>
        {
          emojiTypes.map(({id, name}) => (
            <Tab key={name}>
                {EMOJI_TITLE_MAP[id]}
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
