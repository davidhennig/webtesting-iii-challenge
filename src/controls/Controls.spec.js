// Test away!

import React from "react";
import Controls from "./Controls";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Open/closed", () => {
  const constProps = { closed: false, locked: false };
  const { getByText } = render(<Controls {...constProps} />);
  getByText(/close gate/i);
});

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

test("Lock to Unlock", () => {
  const constProps = { closed: true, locked: false };
  const jestFn = jest.fn(() => {
    constProps.locked = !constProps.locked;
  });
  const { getByText, rerender } = render(
    <Controls {...constProps} toggleLocked={jestFn} />
  );
  const button = getByText(/lock gate/i);
  fireEvent.click(button);
  rerender(<Controls {...constProps} />);
  expect(button.innerHTML).toBe("Unlock Gate");
});

test("Check Lock/Unlock", () => {
  const constProps = { closed: false, locked: false };
  const { getByText } = render(<Controls {...constProps} />);
  expect(getByText(/lock gate/i).closest("button")).toHaveAttribute("disabled");
});

test("Check Open/Closed", () => {
  const constProps = { closed: true, locked: true };
  const { getByText } = render(<Controls {...constProps} />);
  expect(getByText(/open gate/i).closest("button")).toHaveAttribute("disabled");
});
