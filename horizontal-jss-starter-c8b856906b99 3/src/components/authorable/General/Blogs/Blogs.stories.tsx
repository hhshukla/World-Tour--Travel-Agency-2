// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Blogs, { BlogPostDataProps } from './Blogs';
import defaultData from './Blogs.mock-data';

const meta: Meta<typeof Blogs> = {
  title: 'Authorable/General/Blogs',
  component: Blogs,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Blogs>;

export const Default: Story = {
  render: (args) => {
    return <Blogs {...(expandObj({ ...args }) as BlogPostDataProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
