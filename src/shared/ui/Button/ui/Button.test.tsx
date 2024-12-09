import {render, screen} from "@testing-library/react"
import { Button, ThemeButton } from "shared/ui/Button";


describe("Button", () => {
  test("Test render", () => {
    render(<Button>test</Button>)
    expect(screen.getByText("test")).toBeInTheDocument();
  })

  test("Render with clear theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>)
    expect(screen.getByText('test')).toHaveClass("clear");
    // screen.debug();
  })
});

