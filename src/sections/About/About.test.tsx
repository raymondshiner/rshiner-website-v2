import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Section", () => {
  beforeEach(() => {
    render(<About />);
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it("Should render Title", () => {
    screen.getByText("About Me");
  })

  it("Should render a self-portrait", () => {
    const img = screen.getByRole("img", { name: /self-portrait/i });
    expect(img).toBeInTheDocument();
  })
});