// Test away!

import React from "react";
import Controls from "./Controls";
import { render, fireEvent } from "@testing-library/react";

test("Button Test", () => {
  const constProps = { closed: false, locked: false };
  const jestfn = jest.fn(() => {
    constProps.closed = !constProps.closed;
  });
  const { getByText, rerender } = render(
    <Controls {...constProps} toggleClosed={jestfn} />
  );
  const button = getByText(/close gate/i);
  fireEvent.click(button);
  rerender(<Controls {...constProps} />);
  expect(button.innerHTML).toBe("Open Gate");
});
