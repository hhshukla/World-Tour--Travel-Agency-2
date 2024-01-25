// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import FeedBack, { BlogPostDataProps } from './FeedBack';
import defaultData from './FeedBack.mock-data';

const meta: Meta<typeof FeedBack> = {
  title: 'Authorable/General/FeedBack',
  component: FeedBack,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FeedBack>;

export const Default: Story = {
  render: (args) => {
    return <FeedBack {...(expandObj({ ...args }) as BlogPostDataProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
