import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  component: Button,
  title: 'UI/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '기본 버튼',
  },
  parameters: {
    layout: 'centered',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '보조 버튼',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '외곽선 버튼',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: '작은 버튼',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: '중간 버튼',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: '큰 버튼',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '비활성화 버튼',
  },
};
