import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components';

const meta = {
  title: 'Components/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Primary'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    text: 'Secondary'
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    text: 'Outlined'
  }
};
