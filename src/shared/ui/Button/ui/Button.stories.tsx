import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ThemeButton } from './Button';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: { onClick: fn(), },
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  args: {
    children: "TEST"
  },
};

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: "TEST"
  }, 
};

export const Outline:Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: "TEST"
  }
}