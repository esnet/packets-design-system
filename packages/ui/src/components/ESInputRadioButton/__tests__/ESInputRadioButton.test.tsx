import * as React from 'react';
import { render } from '@testing-library/react';
import ESInputRadioButton from '../ESInputRadioButton';

describe('ESInputRadioButton', () => {
  it("renders correctly", () => {
    // add correct props for proper rendering
    const component = render(<ESInputRadioButton />);
    expect(component).toBeTruthy();
  });
  // add more test cases...
});
