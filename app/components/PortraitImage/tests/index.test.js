/**
 *
 * Tests for PortraitImage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import PortraitImage from '../index';

describe('<PortraitImage />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<PortraitImage />);
    expect(spy).not.toHaveBeenCalled();
  });

  /**
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<PortraitImage />);
    expect(firstChild).toMatchSnapshot();
  });
});
