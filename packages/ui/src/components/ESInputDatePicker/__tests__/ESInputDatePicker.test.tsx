import * as React from 'react';
import { render } from '@testing-library/react';
import ESInputDatePicker from '../ESInputDatePicker';

describe('ESInputDatePicker', () => {
  it("renders correctly", () => {
    // add correct props for proper rendering
    const component = render(<ESInputDatePicker />);
    expect(component).toBeTruthy();
  });
  // add more test cases...
});
