// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import defaultData from './ContentBlock3x1.mock-data';
import ContentBlock3x1, { ContentBlock3x1Props } from './ContentBlock3x1';

const meta: Meta<typeof ContentBlock3x1> = {
  title: 'Authorable/General/ContentBlock3x1',
  component: ContentBlock3x1,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ContentBlock3x1>;

export const Default: Story = {
  render: (args) => {
    return <ContentBlock3x1 {...(expandObj({ ...args }) as ContentBlock3x1Props)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
