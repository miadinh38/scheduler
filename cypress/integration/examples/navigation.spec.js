/// <reference types="Cypress" />

describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
});

