import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Image, Props } from '../src';

const meta: Meta = {
  title: 'React Image',
  component: Image,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Image {...args} />;

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

export const Default = Template.bind({});
Default.args = CrystallizeImageModelExample;

export const ChildRenderFunction = Template.bind({});
ChildRenderFunction.args = {
  ...CrystallizeImageModelExample,
  children: function(props) {
    return (
      <div>
        <h1>Hey. Roll your own render</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    );
  },
};

export const FallbackAsImage = Template.bind({});
FallbackAsImage.args = {
  src: 'https://media.crystallize.com/demo/19/7/24/2/candy_kid.jpg',
  alt: 'Man eating chips',
};
