import { Decorator } from "@storybook/react"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "shared/lib/types";

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (Story) =>
(
  <StoreProvider initialState={state as StateSchema}>
    {Story()}
  </StoreProvider>
);