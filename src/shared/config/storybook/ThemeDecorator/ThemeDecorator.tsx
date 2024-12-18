import { Decorator } from "@storybook/react"
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme): Decorator => (Story) =>
(
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      {Story()}
    </div>
  </ThemeProvider>
);