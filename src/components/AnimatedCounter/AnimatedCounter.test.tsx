import { render, screen } from "@testing-library/react";
import AnimatedCounter from ".";
import { counterItems } from "../../constants";

// Mock react-countup to just render the value directly
jest.mock("react-countup", () => ({
  __esModule: true,
  default: ({ end }: { end: number }) => <span>{end}</span>,
}));

describe("Counter component", () => {
  beforeEach(() => {
    render(<AnimatedCounter />);
  });

  it("display counter container", () => {
    const counterContainer = screen.getByTestId("counter");
    expect(counterContainer).toBeInTheDocument();
  });

  it("Counter component must be 4", () => {
    const counterComponent = screen.getAllByTestId(/counter-label/i);
    expect(counterComponent).toHaveLength(4);
  });

  it("should render the counter value correctly", () => {
    counterItems.forEach((item) => {
      const value = screen.getByText(item.value.toString());
      expect(value).toBeInTheDocument();
    });
  });

  it("Should render all labels correctly", () => {
    counterItems.forEach((item) => {
      const label = screen.getByText(item.label);
      expect(label).toBeInTheDocument();
    });
  });
});
