import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  const defaultProps = {
    className: "custom-class",
    text: "Click Me",
    id: "section1",
  };

  beforeEach(() => {
    render(<Button {...defaultProps} />);
  });

  it("renders the button with provided text", () => {
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it("has the correct href attribute", () => {
    const anchor = screen.getByTestId("cta-btn") as HTMLAnchorElement;
    expect(anchor).toHaveAttribute("href", "#section1");
  });

  it("applies custom class names correctly", () => {
    const anchor = screen.getByTestId("cta-btn");
    expect(anchor.className).toContain("custom-class");
    expect(anchor.className).toContain("cta-wrapper");
  });

  it("renders the arrow image", () => {
    const arrow = screen.getByTestId("cta-btn-arrow").querySelector("img");
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveAttribute("src", "/images/arrow-down.svg");
    expect(arrow).toHaveAttribute("alt", "arrow");
  });
});
