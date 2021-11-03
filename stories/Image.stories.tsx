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

const Template: Story<Props> = (args) => <Image {...args} />;

const CrystallizeImageModelExample = {
  url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/developer_comics_reality_check.jpg',
  altText: 'Reality Check comic',
  key: 'crystallize_marketing/21/4/16/1/developer_comics_reality_check.jpg',
  variants: [
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@100/developer_comics_reality_check.avif',
      width: 100,
      key: 'crystallize_marketing/21/4/16/1/@100/developer_comics_reality_check.avif',
      size: 3218,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@100/developer_comics_reality_check.webp',
      width: 100,
      key: 'crystallize_marketing/21/4/16/1/@100/developer_comics_reality_check.webp',
      size: 2620,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@100/developer_comics_reality_check.jpeg',
      width: 100,
      key: 'crystallize_marketing/21/4/16/1/@100/developer_comics_reality_check.jpeg',
      size: 3665,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@200/developer_comics_reality_check.avif',
      width: 200,
      key: 'crystallize_marketing/21/4/16/1/@200/developer_comics_reality_check.avif',
      size: 9026,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@200/developer_comics_reality_check.webp',
      width: 200,
      key: 'crystallize_marketing/21/4/16/1/@200/developer_comics_reality_check.webp',
      size: 7784,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@200/developer_comics_reality_check.jpeg',
      width: 200,
      key: 'crystallize_marketing/21/4/16/1/@200/developer_comics_reality_check.jpeg',
      size: 11340,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@500/developer_comics_reality_check.avif',
      width: 500,
      key: 'crystallize_marketing/21/4/16/1/@500/developer_comics_reality_check.avif',
      size: 29231,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@500/developer_comics_reality_check.webp',
      width: 500,
      key: 'crystallize_marketing/21/4/16/1/@500/developer_comics_reality_check.webp',
      size: 26754,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@500/developer_comics_reality_check.jpeg',
      width: 500,
      key: 'crystallize_marketing/21/4/16/1/@500/developer_comics_reality_check.jpeg',
      size: 44603,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@768/developer_comics_reality_check.avif',
      width: 768,
      key: 'crystallize_marketing/21/4/16/1/@768/developer_comics_reality_check.avif',
      size: 48101,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@768/developer_comics_reality_check.webp',
      width: 768,
      key: 'crystallize_marketing/21/4/16/1/@768/developer_comics_reality_check.webp',
      size: 45512,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@768/developer_comics_reality_check.jpeg',
      width: 768,
      key: 'crystallize_marketing/21/4/16/1/@768/developer_comics_reality_check.jpeg',
      size: 81658,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@1024/developer_comics_reality_check.avif',
      width: 1024,
      key: 'crystallize_marketing/21/4/16/1/@1024/developer_comics_reality_check.avif',
      size: 66665,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@1024/developer_comics_reality_check.webp',
      width: 1024,
      key: 'crystallize_marketing/21/4/16/1/@1024/developer_comics_reality_check.webp',
      size: 64992,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@1024/developer_comics_reality_check.jpeg',
      width: 1024,
      key: 'crystallize_marketing/21/4/16/1/@1024/developer_comics_reality_check.jpeg',
      size: 120695,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@1366/developer_comics_reality_check.avif',
      width: 1366,
      key: 'crystallize_marketing/21/4/16/1/@1366/developer_comics_reality_check.avif',
      size: 94818,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@1366/developer_comics_reality_check.webp',
      width: 1366,
      key: 'crystallize_marketing/21/4/16/1/@1366/developer_comics_reality_check.webp',
      size: 88094,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@1366/developer_comics_reality_check.jpeg',
      width: 1366,
      key: 'crystallize_marketing/21/4/16/1/@1366/developer_comics_reality_check.jpeg',
      size: 187457,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@1600/developer_comics_reality_check.avif',
      width: 1600,
      key: 'crystallize_marketing/21/4/16/1/@1600/developer_comics_reality_check.avif',
      size: 116699,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@1600/developer_comics_reality_check.webp',
      width: 1600,
      key: 'crystallize_marketing/21/4/16/1/@1600/developer_comics_reality_check.webp',
      size: 104302,
    },
    {
      url: 'https://media.crystallize.com/crystallize_marketing/21/4/16/1/@1600/developer_comics_reality_check.jpeg',
      width: 1600,
      key: 'crystallize_marketing/21/4/16/1/@1600/developer_comics_reality_check.jpeg',
      size: 232901,
    },
  ],
};

export const Default = Template.bind({});
Default.args = CrystallizeImageModelExample;

export const DefaultWithLazyLoad = Template.bind({});
DefaultWithLazyLoad.args = {
  ...CrystallizeImageModelExample,
  loading: 'lazy',
};

export const ChildRenderFunction = Template.bind({});
ChildRenderFunction.args = {
  ...CrystallizeImageModelExample,
  children: function (props) {
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

export const NaiveRenderingPOC = Template.bind({});
NaiveRenderingPOC.args = {
  url: 'https://media.crystallize.com/furniture/21/8/2/35/sofa4.jpg',
  _availableSizes: [100, 200, 500, 768, 1024],
  _availableFormats: ['avif', 'webp', 'jpeg'],
};
