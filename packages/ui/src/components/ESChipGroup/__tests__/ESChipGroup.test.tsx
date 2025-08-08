import * as React from 'react';
import { render } from '@testing-library/react';
import ESChipGroup from '../ESChipGroup';

describe('ESChipGroup', () => {
  it("renders correctly", () => {
    // add correct props for proper rendering
    const component = render(<ESChipGroup />);
    expect(component).toBeTruthy();
  });
  // add more test cases...
});
