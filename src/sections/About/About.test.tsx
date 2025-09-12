import { render, screen } from "@testing-library/react";
import About from "./About";

test("Should render Title", () => {
  render(<About />);

  screen.getByText("About Me");
})