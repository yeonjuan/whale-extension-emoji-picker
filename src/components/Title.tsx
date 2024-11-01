import React, {FC, ReactNode} from 'react';

interface IProps {
  children: ReactNode;
}

export const Title: FC<IProps> = ({
  children
}) => {
  return (
    <div className='title'>
      <h1>
        {children}
      </h1>
    </div>
  )
}
