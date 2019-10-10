import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import {Title} from './index';

describe('<Title />', () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    container = null;
  });

  it('Should render without errors', () => {
    act(() => {
      ReactDOM.render(<Title />, container);
      ReactDOM.unmountComponentAtNode(container);
    });
  });

  it('Should have a `h1` tag with props {title}', () => {
    const props = {
      title: 'test',
    }
    act(() => {
      ReactDOM.render(<Title {...props}/>, container);
    })
    const h1 = container.querySelector('h1');
    expect(h1).toBeDefined();
    expect(h1.textContent).toEqual(props.title);
  });
});
