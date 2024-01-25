// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Services, { ServicesProps } from './Services';
import defaultData from './Services.mock-data';

const meta: Meta<typeof Services> = {
  title: 'Authorable/General/Services',
  component: Services,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Services>;

export const Default: Story = {
  render: (args) => {
    return <Services {...(expandObj({ ...args }) as ServicesProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
