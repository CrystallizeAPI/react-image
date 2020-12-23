import React from 'react';
import * as ReactDOM from 'react-dom';

import { Image } from '../src/index';

const CrystallizeImageModelExample = {
  url:
    'https://media.crystallize.com/minicars/20/9/3/3/giorgio-trovato-0czwuzhic84-unsplash.jpg',
  altText: 'Mini model car',
  variants: [
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@100/giorgio-trovato-0czwuzhic84-unsplash.webp',
      width: 100,
      height: 100,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@100/giorgio-trovato-0czwuzhic84-unsplash.jpeg',
      width: 100,
      height: 100,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@200/giorgio-trovato-0czwuzhic84-unsplash.webp',
      width: 200,
      height: 200,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@200/giorgio-trovato-0czwuzhic84-unsplash.jpeg',
      width: 200,
      height: 200,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@500/giorgio-trovato-0czwuzhic84-unsplash.webp',
      width: 500,
      height: 500,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@500/giorgio-trovato-0czwuzhic84-unsplash.jpeg',
      width: 500,
      height: 500,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@768/giorgio-trovato-0czwuzhic84-unsplash.webp',
      width: 768,
      height: 768,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@768/giorgio-trovato-0czwuzhic84-unsplash.jpeg',
      width: 768,
      height: 768,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@1024/giorgio-trovato-0czwuzhic84-unsplash.webp',
      width: 1024,
      height: 1024,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@1024/giorgio-trovato-0czwuzhic84-unsplash.jpeg',
      width: 1024,
      height: 1024,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@1366/giorgio-trovato-0czwuzhic84-unsplash.webp',
      width: 1366,
      height: 1366,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@1366/giorgio-trovato-0czwuzhic84-unsplash.jpeg',
      width: 1366,
      height: 1366,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@1600/giorgio-trovato-0czwuzhic84-unsplash.webp',
      width: 1600,
      height: 1600,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@1600/giorgio-trovato-0czwuzhic84-unsplash.jpeg',
      width: 1600,
      height: 1600,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@1920/giorgio-trovato-0czwuzhic84-unsplash.webp',
      width: 1920,
      height: 1920,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@1920/giorgio-trovato-0czwuzhic84-unsplash.jpeg',
      width: 1920,
      height: 1920,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@3200/giorgio-trovato-0czwuzhic84-unsplash.webp',
      width: 3200,
      height: 3200,
    },
    {
      url:
        'https://media.crystallize.com/minicars/20/9/3/3/@3200/giorgio-trovato-0czwuzhic84-unsplash.jpeg',
      width: 3200,
      height: 3200,
    },
  ],
};

describe('Image', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image {...CrystallizeImageModelExample} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
