// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import HeroGallery, { HeroGalleryProps } from './HeroGallery';
import defaultData from './HeroGallery.mock-data';

const meta: Meta<typeof HeroGallery> = {
  title: 'Authorable/General/HeroGallery',
  component: HeroGallery,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HeroGallery>;

export const Default: Story = {
  render: (args) => {
    return <HeroGallery {...(expandObj({ ...args }) as HeroGalleryProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
