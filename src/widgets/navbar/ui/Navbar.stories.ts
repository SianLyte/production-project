import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
  title: 'widget/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;


export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT),StoreDecorator({
      loginForm: { username: "123", password: "123" }
    })]
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK),StoreDecorator({
    loginForm: { username: "123", password: "123" }
  })]
};