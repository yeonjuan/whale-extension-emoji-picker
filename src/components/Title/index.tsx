import * as React from 'react';

interface IProps {
  title?: string;
}

export const Title: React.FunctionComponent<IProps> = ({
  title,
}: IProps) => (
  <div className={'title'}>
    <h1>
      {title}
    </h1>
  </div>
);

Title.defaultProps = {
  title: '',
}

