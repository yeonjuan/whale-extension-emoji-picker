import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-dom/test-utils';
import { act } from 'react-dom/test-utils';
import Tab, {ITabProps} from './Tab';

describe('<Tab />', () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    container = null;
  });

  it('Should render without errors', () => {
    act(() => {
      ReactDOM.render(<Tab />, container);
      ReactDOM.unmountComponentAtNode(container);
    });
  });

  it('Should have a `li` tag', () => {
    // When
    act(() => {
      ReactDOM.render(<Tab />, container);
    })

    // Then
    const liTag = container.querySelector('li');
    expect(liTag).not.toBe(null);
  });

  it('Should have a `a` tag', () => {
    // When
    act(() => {
      ReactDOM.render(<Tab />, container);
    });

    // Then
    const aTag = container.querySelector('a');
    expect(aTag).not.toBe(null);
  });

  it('Should call `onSelect` callback', (done) => {
    // Given
    const props: ITabProps = {
      onSelect: () => done(), // Then
    };

    // When
    act(() => {
      ReactDOM.render(<Tab {...props}/>, container);
    });
    const aTag = container.querySelector('a');
    ReactTestUtils.Simulate.click(aTag);
  });
});
