import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Toast from './index';

describe('<Toast />', () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    container = null;
  });

  it('Should render without errors', () => {
    act(() => {
      ReactDOM.render(<Toast />, container);
      ReactDOM.unmountComponentAtNode(container);
    });
  });

});
