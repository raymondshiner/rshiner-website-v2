import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Section", () => {
  beforeEach(() => {
    render(<About />);
  })

  it("Should render Title", () => {
    screen.getByText("About Me");
  })

  it("Should render a self-portrait", () => {
    const img = screen.getByRole("img", { name: /self-portrait/i });
    expect(img).toBeInTheDocument();
  })

  it("should render description paragraphs", () => {
    screen.getByLabelText('description');
  })

  it("contains collaborate button", () => {
    screen.getByRole("button", { name: /collaborate/i });
  })
});