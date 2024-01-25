// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import SubHeader, { SubHeaderProps } from './SubHeader';
import defaultData from './SubHeader.mock';

const meta: Meta<typeof SubHeader> = {
  title: 'Authorable/General/SubHeader',
  component: SubHeader,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SubHeader>;

export const Default: Story = {
  render: (args) => {
    return <SubHeader {...(expandObj({ ...args }) as SubHeaderProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
