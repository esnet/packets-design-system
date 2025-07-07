import React from 'react';
import { render } from '@testing-library/react';
import ESInputTypeahead from '../ESInputTypeahead';

describe('ESInputTypeahead', () => {
  it("renders correctly", () => {
    // add correct props for proper rendering
    const component = render(<ESInputTypeahead />);
    expect(component).toBeTruthy();
  });
  // add more test cases...
});
