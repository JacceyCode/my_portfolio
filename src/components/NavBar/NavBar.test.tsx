import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from ".";
import { navLinks } from "../../constants";

// Mock scrollY
beforeEach(() => {
  Object.defineProperty(window, "scrollY", {
    writable: true,
    configurable: true,
    value: 0,
  });
});

describe("NavBar Component", () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  it("renders the logo", () => {
    const logo = screen.getByAltText(/jacob's logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    navLinks.forEach((link) => {
      expect(screen.getByText(link.name)).toBeInTheDocument();
    });
  });

  it('renders the "Contact me" button', () => {
    const contactBtn = screen.getByText(/contact me/i);
    expect(contactBtn).toBeInTheDocument();
  });

  it("applies the 'scrolled' class on scroll", () => {
    // Initial state: not scrolled
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("not-scrolled");

    // Simulate scroll
    window.scrollY = 50;
    fireEvent.scroll(window);

    // Check if class changed
    expect(header).toHaveClass("scrolled");
  });

  it("removes the scroll event listener on unmount", () => {
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = render(<NavBar />);
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );
  });
});
