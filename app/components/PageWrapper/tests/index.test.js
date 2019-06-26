/**
 *
 * Tests for PageWrapper
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
// import { render } from 'react-testing-library';
import render from 'utils/testRenderWithContext';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import PageWrapper from '../index';

describe('<PageWrapper />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <PageWrapper>
        <span>Some Test Text Content</span>
      </PageWrapper>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <PageWrapper>
        <div />
      </PageWrapper>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
