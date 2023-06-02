import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components';

const meta = {
  title: 'Components/Select',
  component: Select
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    id: 'empty',
    name: 'empty',
    placeholder: 'Empty',
    options: []
  }
};

export const Full: Story = {
  args: {
    id: 'full',
    name: 'full',
    placeholder: 'Full',
    options: [
      {
        text: 'Sansa Stark',
        value: '1'
      },
      {
        text: 'Jon Snow',
        value: '2'
      },
      {
        text: 'Daenerys Targaryen',
        value: '3'
      },
      {
        text: 'Tyrion Lannister',
        value: '4'
      }
    ]
  }
};
