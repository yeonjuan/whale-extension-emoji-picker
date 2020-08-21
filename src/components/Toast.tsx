import React, {FC, useEffect, useState} from 'react';

const TOAST_TIME_MS = 1000;

interface IProps {
  show?: boolean,
  message?: string;
  onClosed?: () => void;
}

export const Toast: FC<IProps> = ({
  show = false,
  message = '',
  onClosed,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show !== visible) {
      setVisible(show);
    }
    const timer = setTimeout(() => {
      setVisible(false);
      onClosed?.();
    }, TOAST_TIME_MS);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div id='toast'
      className={visible ? "show": ""}>
      {message}
    </div>
  );
}
