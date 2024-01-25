// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Gallery, { GalleryProps } from './Gallery';
import defaultData from './Gallery.mock-data';

const meta: Meta<typeof Gallery> = {
  title: 'Authorable/General/Gallery',
  component: Gallery,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
  render: (args) => {
    return <Gallery {...(expandObj({ ...args }) as GalleryProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
