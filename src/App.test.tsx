import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App test", () => {
  it("Should render component", () => {
    render(<App />);

    const title = screen.getByRole("heading", { level: 1 });

    expect(title).toBeInTheDocument();
  });
});
