import React from 'react';
import * as ReactDOM from 'react-dom';

import { Image } from '../src/index';
import { CrystallizeImageModelExample } from '../stories/Image.stories';

describe('Image', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image {...CrystallizeImageModelExample} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
