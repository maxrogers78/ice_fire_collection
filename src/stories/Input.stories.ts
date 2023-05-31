import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../components';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default',
    name: 'default',
    value: '',
    placeholder: 'Default'
  }
};

export const Required: Story = {
  args: {
    id: 'required',
    name: 'required',
    value: '',
    placeholder: 'Required',
    required: true
  }
};
