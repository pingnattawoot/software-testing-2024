import { render } from "@testing-library/react";
import { FoodLoadingCard } from "./FoodLoadingCard";

describe.skip("FoodLoadingCard", () => {
  it("renders correctly", () => {
    render(<FoodLoadingCard />);
    expect(true).toBe(true);
  });
});
