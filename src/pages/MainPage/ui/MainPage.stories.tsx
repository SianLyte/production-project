import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
};

export default meta;
type Story = StoryObj<typeof MainPage>;


export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};