// Test away

import React from "react";
import Dashboard from "./Dashboard";
import { render } from "@testing-library/react";

test("Check Controls & Display", () => {
  const { getAllByText, rerender } = render(<Dashboard />);
  getAllByText(/lock/i);

  rerender(<Dashboard />);
  getAllByText(/lock/i);
});
