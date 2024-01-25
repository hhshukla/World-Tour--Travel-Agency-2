// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ContentBlockTestimonial, {
  ContentBlockTestimonialDataProps,
} from './ContentBlockTestimonial';
import defaultData from './ContentBlockTestimonial.mock-data';

const meta: Meta<typeof ContentBlockTestimonial> = {
  title: 'Authorable/General/ContentBlockTestimonial',
  component: ContentBlockTestimonial,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ContentBlockTestimonial>;

export const Default: Story = {
  render: (args) => {
    return (
      <ContentBlockTestimonial {...(expandObj({ ...args }) as ContentBlockTestimonialDataProps)} />
    );
  },
  args: {
    ...flattenObj(defaultData),
  },
};
export const SecondaryContentBlockTestimonialData: Story = {
  render: (args) => {
    return (
      <ContentBlockTestimonial {...(expandObj({ ...args }) as ContentBlockTestimonialDataProps)} />
    );
  },
  args: {
    ...flattenObj(defaultData),
  },
};
