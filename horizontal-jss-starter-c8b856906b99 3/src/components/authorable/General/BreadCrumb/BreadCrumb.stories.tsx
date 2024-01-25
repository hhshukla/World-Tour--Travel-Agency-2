// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import BreadCrumb, { BreadCrumdDataProps } from './BreadCrumb';
import defaultData from './BreadCrumb.mock-data';

const meta: Meta<typeof BreadCrumb> = {
  title: 'Authorable/General/BreadCrumb',
  component: BreadCrumb,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BreadCrumb>;

export const Default: Story = {
  render: (args) => {
    return <BreadCrumb {...(expandObj({ ...args }) as BreadCrumdDataProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
