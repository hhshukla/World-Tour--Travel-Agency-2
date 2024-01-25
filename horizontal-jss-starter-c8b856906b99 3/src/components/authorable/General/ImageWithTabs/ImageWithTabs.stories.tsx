// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageWithTabs, { ImageWithTabsProps } from './ImageWithTabs';
import defaultData from './ImageWithTabs.mock-data';

const meta: Meta<typeof ImageWithTabs> = {
  title: 'Authorable/General/ImageWithTabs',
  component: ImageWithTabs,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ImageWithTabs>;

export const Default: Story = {
  render: (args) => {
    return <ImageWithTabs {...(expandObj({ ...args }) as ImageWithTabsProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
