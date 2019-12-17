// Test away!
import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";

test("Check if Closed", () => {
  const { getByTestId, rerender } = render(<Display closed />);
  getByTestId("isItClosed");

  rerender(<Display closed={false} />);
  getByTestId("isItClosed");
});

test("Check if Locked", () => {
  const { getByTestId, rerender } = render(<Display locked />);
  getByTestId("isItLocked");

  rerender(<Display locked={false} />);
  getByTestId("isItLocked");
});

test("Check if Green Green", () => {
  const className = "led green-led";
  const locked = false;
  const closed = false;
  const display = render(
    <Display closed={closed} locked={locked} className={className} />
  );
  expect(display.baseElement).toMatchSnapshot();
});

test("Check if Red Green", () => {
  const className = "led red-led";
  const locked = false;
  const display = render(
    <Display closed locked={locked} className={className} />
  );
  expect(display.baseElement).toMatchSnapshot();
});

test("Check if Red Red", () => {
  const className = "led red-led";
  const locked = true;
  const closed = true;
  const display = render(
    <Display closed={closed} locked={locked} className={className} />
  );
  expect(display.baseElement).toMatchSnapshot();
});
