// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Marquee, { MarqueeDataProps } from './Marquee';
import defaultData from './Marquee.mock';

const meta: Meta<typeof Marquee> = {
  title: 'Authorable/General/Marquee',
  component: Marquee,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
  render: (args) => {
    return <Marquee {...(expandObj({ ...args }) as MarqueeDataProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
