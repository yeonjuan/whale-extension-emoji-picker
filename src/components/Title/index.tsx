import * as React from 'react';

interface IProps {
  title?: string;
}

export const Title: React.FunctionComponent<IProps> = ({
  title,
}: IProps) => (
  <h1>
    {title}
  </h1>
);

Title.defaultProps = {
  title: '',
}

