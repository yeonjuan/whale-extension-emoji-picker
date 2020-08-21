import * as React from 'react';
import '../css/App.css';
import EmojiPicker from './EmojiPicker';
import Title from './Title';
import Toast from './Toast';

const App: React.FunctionComponent = () => {
  const [toast, setToast] = React.useState({
    message: '',
    show: false,
  });
  const handleClosed = () => setToast({
    ...toast,
    show: false,
  });
  const handlePick = (emoji: string) => setToast({
    message: `${emoji} Copied!`,
    show: true,
  });

  const {show, message} = toast;
  return (
    <div className="App">
      <Title>이모지 피커</Title>
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
