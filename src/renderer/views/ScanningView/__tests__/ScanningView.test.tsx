import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";

import ScanningView from "..";
import { scanningText } from "../ScanningView";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe("ScanningView", () => {
  it("should automatically scan for devices when shouldStartScanning is present in location state", () => {
    /*
     * Mock the location state by creating our own history and faux push to it
     */
    const mockLocation = {
      state: {
        shouldStartScanning: true
      }
    };
    const history = createMemoryHistory();

    history.push("/devices", mockLocation.state);

    // FIXME: Still getting act warning about it not being used while component is updating
    act(() => {
      render(
        <Router history={history}>
          <ScanningView />
        </Router>
      );
    });

    /*
     * TODO: Assert that scanForDevices was called
     */

    /*
     * Assert that the UI reflects the scanning state
     */
    expect(screen.getByText(scanningText)).toBeDefined();
  });

  it("should not automatically scan for devices when shouldStartScanning is not present in location state", () => {
    /*
     * Mock the location state by creating our own history and faux push to it
     */
    const history = createMemoryHistory();

    history.push("/devices");

    // FIXME: Still getting act warning about it not being used while component is updating
    act(() => {
      render(
        <Router history={history}>
          <ScanningView />
        </Router>
      );
    });

    /*
     * Assert that the UI does not reflect the scanning state
     */
    expect(screen.queryByText(scanningText)).toBeNull();
  });
});
