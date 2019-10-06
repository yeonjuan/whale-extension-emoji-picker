import * as React from 'react';
import '../css/App.css';
import EmojiPicker from './EmojiPicker';
import {Title} from './Title';
import Toast from './Toast';

const App: React.FunctionComponent = () => {
  const [toast, setToast] = React.useState({
    message: '',
    show: false,
  });
  const handleClosed = () => setToast({
    message: '',
    show: false,
  });
  const handlePick = (emoji: string) => setToast({
    message: `${emoji} Copied!`,
    show: true,
  });

  const {show, message} = toast;
  return (
    <div className="App">
      <Title title="Emoji Picker"/>
      <EmojiPicker onPick={handlePick}/>
      <Toast show={show} message={message} onClosed={handleClosed}/>
    </div>
  )
};

export default App;
