import App from "./App";
import { render, screen } from "@testing-library/react";

xdescribe("App test", () => {
  it("Should render hero section", () => {
    render(<App />);

    const heroSection = screen.getByTestId(/hero/i);
    expect(heroSection).toBeInTheDocument();
  });
});
