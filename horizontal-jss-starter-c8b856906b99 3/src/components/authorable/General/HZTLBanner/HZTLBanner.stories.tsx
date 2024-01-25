// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import HZTLBanner, { HZTLBannerDataProps } from './HZTLBanner';
import defaultData from './HZTLBanner.mock-data';

const meta: Meta<typeof HZTLBanner> = {
  title: 'Authorable/General/HZTLBanner',
  component: HZTLBanner,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HZTLBanner>;

export const Default: Story = {
  render: (args) => {
    return <HZTLBanner {...(expandObj({ ...args }) as HZTLBannerDataProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
