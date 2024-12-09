import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: "/"
  }
};

export default meta;
type Story = StoryObj<typeof AppLink>;


export const Primary: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: "text"
  }
};

export const Secondary: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: "text"

  }
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: "text"
  },
};

export const SecondaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: "text"

  }
};

