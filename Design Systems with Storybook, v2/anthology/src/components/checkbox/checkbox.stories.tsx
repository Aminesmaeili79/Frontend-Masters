import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
  },
}
