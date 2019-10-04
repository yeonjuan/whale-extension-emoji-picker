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

  it('에러 없이 렌더링 한다.', () => {
    act(() => {
      ReactDOM.render(<Title />, container);
      ReactDOM.unmountComponentAtNode(container);
    });
  });

  it('props {title} 을 h1 으로 렌더링 한다.', () => {
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
