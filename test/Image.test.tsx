import React from 'react';
import * as ReactDOM from 'react-dom';

import { Default as Image } from '../stories/Image.stories';

describe('Image', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
