import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Loader } from './Loader';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;


export const PrimaryLight: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]

};

