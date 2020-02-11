import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import HomeView, { nextRouteConfig } from "..";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe("HomeView", () => {
  it("should navigate to the /devices page when the scan button is clicked", () => {
    render(<HomeView />);

    const button = screen.getByText(/Scan/i);
    fireEvent.click(button);

    expect(mockHistoryPush).toHaveBeenCalledWith(nextRouteConfig);
  });
});
