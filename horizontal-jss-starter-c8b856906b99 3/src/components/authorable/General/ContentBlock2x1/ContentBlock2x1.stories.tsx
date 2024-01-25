// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import defaultData from './ContentBlock2x1.mock-data';
import ContentBlock2x1, { ContentBlock2x1Props } from './ContentBlock2x1';

const meta: Meta<typeof ContentBlock2x1> = {
  title: 'Authorable/General/ContentBlock2x1',
  component: ContentBlock2x1,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ContentBlock2x1>;

export const Default: Story = {
  render: (args) => {
    return <ContentBlock2x1 {...(expandObj({ ...args }) as ContentBlock2x1Props)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
