import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MenuDocument, MenuQuery } from "../../gql/generates";
import { MenuPage } from "./MenuPage";

const MockMenus: MenuQuery["menu"] = [
  {
    id: 1,
    name: "Menu 1",
    description: "Description 1",
    image: "Image 1",
    price: 100,
  },
];

describe.skip("MenuPage", () => {
  it("renders correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/menu"]}>
        <MockedProvider
          mocks={[
            {
              request: {
                query: MenuDocument,
              },
              result: {
                data: {
                  menu: MockMenus,
                },
              },
            },
          ]}
        >
          <MenuPage />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("Back")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Menu 1")).toBeInTheDocument();
    });
  });

  it("displays loading state", () => {
    render(
      <MemoryRouter initialEntries={["/menu"]}>
        <MockedProvider mocks={[{ request: { query: MenuDocument } }]}>
          <MenuPage />
        </MockedProvider>
      </MemoryRouter>
    );

    const loadingElements = screen.getAllByTestId("food-loading-card");
    expect(loadingElements.length).toBe(5);
  });

  it("renders multiple menu items", async () => {
    const multipleMenus: MenuQuery["menu"] = [
      {
        id: 1,
        name: "Menu 1",
        description: "Description 1",
        image: "Image 1",
        price: 100,
      },
      {
        id: 2,
        name: "Menu 2",
        description: "Description 2",
        image: "Image 2",
        price: 200,
      },
    ];

    render(
      <MemoryRouter initialEntries={["/menu"]}>
        <MockedProvider
          mocks={[
            {
              request: {
                query: MenuDocument,
              },
              result: {
                data: {
                  menu: multipleMenus,
                },
              },
            },
          ]}
        >
          <MenuPage />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Menu 1")).toBeInTheDocument();
      expect(screen.getByText("Menu 2")).toBeInTheDocument();
    });

    // it("handles error state", async () => {
    //   render(
    //     <MemoryRouter initialEntries={["/menu"]}>
    //       <MockedProvider
    //         mocks={[
    //           {
    //             request: {
    //               query: MenuDocument,
    //             },
    //             error: new Error("An error occurred"),
    //           },
    //         ]}
    //       >
    //         <MenuPage />
    //       </MockedProvider>
    //     </MemoryRouter>
    //   );

    //   await waitFor(() => {
    //     expect(screen.getByText("Error loading menu")).toBeInTheDocument();
    //   });
    // });
  });
});
