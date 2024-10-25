import { render, screen } from "@testing-library/react";
import { WelcomePage } from "./WelcomePage";

import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe.skip("WelcomePage", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <WelcomePage />
      </MemoryRouter>
    );
  });

  it("renders restaurant links correctly", () => {
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });
});
