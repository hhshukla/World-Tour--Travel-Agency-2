// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Cards, { CardListProps } from './Cards';
import defaultData, { Cards4x1Data, HorizontalCardsData } from './Cards.mock-data';

const meta: Meta<typeof Cards> = {
  title: 'Authorable/General/Cards',
  component: Cards,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Cards>;

export const Default: Story = {
  render: (args) => {
    return <Cards {...(expandObj({ ...args }) as CardListProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
export const Cards4x1: Story = {
  render: (args) => {
    return <Cards {...(expandObj({ ...args }) as CardListProps)} />;
  },
  args: {
    ...flattenObj(Cards4x1Data),
  },
};
export const HorizontalCards: Story = {
  render: (args) => {
    return <Cards {...(expandObj({ ...args }) as CardListProps)} />;
  },
  args: {
    ...flattenObj(HorizontalCardsData),
  },
};
