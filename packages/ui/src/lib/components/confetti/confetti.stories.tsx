import type { Meta, StoryObj } from '@storybook/react';
import Confetti from './confetti';

const meta = {
  title: 'UI/Confetti',
  component: Confetti,
  tags: ['autodocs'],
} satisfies Meta<typeof Confetti>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
