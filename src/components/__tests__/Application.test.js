import React from "react";


import { render, cleanup } from "@testing-library/react";

import Application from "components/Application";

import { waitForElement, getByText, prettyDOM, fireEvent, getAllByTestId, getByPlaceholderText, getByAltText } from "@testing-library/react";

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
    const { container } = render(<Application/>)

    await waitForElement(() => getByText(container, "Archie Cohen"));

    // search all appoinments in the container
    const appointments = getAllByTestId(container, "appointment");

    // search the first appointment
    const appoinment = getAllByTestId(container, "appointment")[0];

    fireEvent.click(getByAltText(appoinment, "Add"));

    fireEvent.change(getByPlaceholderText(appoinment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });

    fireEvent.click(getByAltText(appoinment, "Sylvia Palmer"));

    fireEvent.click(getByText(appoinment, "Save"));
    console.log(prettyDOM(container));
  });

});