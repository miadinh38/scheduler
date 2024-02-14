import React from "react";


import { render, cleanup, waitForElementToBeRemoved, queryByAltText } from "@testing-library/react";

import Application from "components/Application";

import { waitForElement, getByText, prettyDOM, fireEvent, getAllByTestId, getByPlaceholderText, getByAltText, queryByText } from "@testing-library/react";

afterEach(cleanup);

// it("renders without crashing", () => {
//   render(<Application />);
// });

describe("Application", () => { 
  it("defaults to Monday and changes the schedule when a new day is selected", async() => {
    const { getByText } = render(<Application/>);

    await waitForElement(() => getByText("Monday"));

    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });

  it("loads data, books an interview and reduces the spots remaining for the first day by 1", async() => {
    const { container, debug } = render(<Application/>)

    await waitForElement(() => getByText(container, "Archie Cohen"));

    // search all appointments in the container
    const appointments = getAllByTestId(container, "appointment");

    // search the first appointment
    const appointment = appointments[0];

    fireEvent.click(getByAltText(appointment, "Add"));

    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });

    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

    fireEvent.click(getByText(appointment, "Save"));

    expect(getByText(appointment, "Saving")).toBeInTheDocument();

    // Wait for the "Saving" text to be removed
    await waitForElementToBeRemoved(() => getByText(appointment, "Saving"));

    expect(getByText(appointment, "Lydia Miller-Jones")).toBeInTheDocument();

    const day = getAllByTestId(container, "day").find(day => 
      queryByText(day, "Monday"));
  
    expect(getByText(day, "no spots remaining")).toBeInTheDocument();
  });

});