import * as React from 'react';

export interface IFunctionalComponentWithRole extends React.FunctionComponent {
  role: string,
}