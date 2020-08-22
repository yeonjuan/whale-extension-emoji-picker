/* tslint:disable */
import React, {FC, useState} from 'react';
import {useLocalStorage} from '../hooks';
import {EmojiPicker} from './EmojiPicker';
import {Title} from './Title';
import {Toast} from './Toast';
import {History} from './History';
import '../css/App.css';

const MAX_HISTORY = 10;


const App: FC = () => {
  const [storageValue, setStorageValue] = useLocalStorage<string[]>('history', []);
  const [toast, setToast] = useState({
    message: '',
    show: false,
  });
  const handleClosed = () => setToast({
    ...toast,
    show: false,
  });
  const handlePick = (emoji: string) => {
    setToast({
      message: `${emoji} Copied!`,
      show: true,
    });
    const filterd = storageValue.filter(value => value !== emoji)
    const newStorageValue = [emoji, ...filterd];
    if (newStorageValue.length > MAX_HISTORY) {
      newStorageValue.pop();
    }
    
    setStorageValue(newStorageValue);
  }

  const {show, message} = toast;
  return (
    <div className="App">
      <Title>이모지 피커</Title>
      <History history={storageValue}/>
      <EmojiPicker onPick={handlePick}/>
      <Toast
        show={show}
        message={message}
        onClosed={handleClosed}
      />
    </div>
  )
};

export default App;
