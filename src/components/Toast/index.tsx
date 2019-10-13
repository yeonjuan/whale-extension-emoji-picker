import * as React from 'react';

export interface IToastProps {
  show: boolean,
  onClosed?: () => void;
  message: string;
}

const Toast: React.SFC<IToastProps> = ({
  show = false,
  onClosed,
  message,
}: IToastProps) => {

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (show !== visible) {
      setVisible(show);
    }
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClosed) {
        onClosed();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div
      id={'toast'}
      className={visible ? "show": ""}>
      {message}
    </div>
  )
};

export default Toast;
