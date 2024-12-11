import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonSize, ButtonTheme } from './Button';
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
    theme: ButtonTheme.CLEAR,
    children: "TEST"
  }, 
};

export const Outline:Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: "TEST"
  }
}

export const OutlineSizeL:Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: "TEST",
    size: ButtonSize.L
  }
}

export const OutlineSizeXL:Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: "TEST",
    size: ButtonSize.XL
  }
}

export const Background:Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    children: "TEST"
  }
}

export const BackgroundInverted:Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED ,
    children: "TEST"
  }
}

export const SquareSizeM:Story = {
  args: {
    square: true,
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED ,
    children: ">"
  }
}

export const SquareSizeL:Story = {
  args: {
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED ,
    children: ">"
  }
}

export const SquareSizeXL:Story = {
  args: {
    square: true,
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED ,
    children: ">"
  }
}
