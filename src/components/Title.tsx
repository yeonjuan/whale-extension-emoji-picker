import React, {ReactNode} from 'react';

interface IProps {
  children: ReactNode;
}

export default function Title ({
  children
}: IProps) {
  return (
    <div className='title'>
      <h1>
        {children}
      </h1>
    </div>
  )
}
