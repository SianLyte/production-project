import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;


export const Light: Story = {
  args: {
    children: "text text text text text text text text text text text text text text text text",
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
  args: {
    children: "text text text text text text text text text text text text text text text text",
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};