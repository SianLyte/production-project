import { screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { componentRender } from "shared/lib/tests/componentRender";
import { StateSchema } from "app/providers/StoreProvider";
import { fireEvent } from "@storybook/test";

describe("Counter", () => {
  test("with only first param", () => {

    const initialState: Partial<StateSchema> = {
      counter: {
        value: 10
      }
    };
    componentRender(<Counter />, { initialState });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  })

  test("increment", () => {
    const initialState: Partial<StateSchema> = {
      counter: {
        value: 10
      }
    };
    componentRender(<Counter />, { initialState });
    fireEvent.click(screen.getByTestId("increment-btn"))
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  })

  test("decrement", () => {
    const initialState: Partial<StateSchema> = {
      counter: {
        value: 10
      }
    };
    componentRender(<Counter />, { initialState });
    fireEvent.click(screen.getByTestId("decrement-btn"))

    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  })

});
