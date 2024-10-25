import { render, screen, waitFor } from "@testing-library/react";
import { FoodDetailDialog } from "./FoodDetailDialog";
import { MockedProvider } from "@apollo/client/testing";
import { MenuByIdDocument, MenuByIdQuery } from "../../gql/generates";

const MockMenu1: MenuByIdQuery["menuById"] = {
  id: 1,
  name: "Menu 1",
  price: 100,
  description: "Description 1",
  image: "Image 1",
};

describe("FoodDetailDialog", () => {
  it("should show loading", () => {
    render(
      <MockedProvider mocks={[{ request: { query: MenuByIdDocument } }]}>
        <FoodDetailDialog open={true} onClose={() => {}} menuId={1} />
      </MockedProvider>
    );

    expect(screen.getByTestId("loading-dialog")).toBeInTheDocument();
  });

  it("renders correctly", async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: { query: MenuByIdDocument, variables: { id: 1 } },
            result: {
              data: {
                menuById: MockMenu1,
              },
            },
          },
        ]}
      >
        <FoodDetailDialog open={true} onClose={() => {}} menuId={1} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Menu 1")).toBeInTheDocument();
    });
  });
});
