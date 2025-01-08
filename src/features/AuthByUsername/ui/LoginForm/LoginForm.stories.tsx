import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
  title: 'widget/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;


export const Primary: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    loginForm: { username: "123", password: "123" }
  })]
};

export const withError: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    loginForm: { username: "123", password: "123", error: "чел ошибка" }
  })]
};

export const Loading: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    loginForm: { username: "123", password: "123", isLoading: true }
  })]
};

