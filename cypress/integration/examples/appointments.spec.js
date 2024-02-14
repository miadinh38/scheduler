describe("appointment", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset")
  
    cy.visit("/"); 
        
    cy.contains("Monday");
  })

  // it("should book an interview", () => {

  //   //click the add button in the second appointment
  //   cy.get("[alt=Add]")
  //     .first()
  //     .click();
    
  //   //enter name
  //   cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");

  //   //choose the interviewer
  //   cy.get("[alt='Sylvia Palmer']").click();

  //   //click the save button
  //   cy.contains("Save").click();

  //   cy.contains(".appointment__card--show", "Lydia Miller-Jones");
  //   cy.contains(".appointment__card--show", "Sylvia Palmer");
  // });

  // it("should edit an interview", () => {
  //   cy.get("[alt='Edit']").first().click({force: true});

  //   cy.get("[data-testid=student-name-input]")
  //     .clear()
  //     .type("Lydia Miller-Jones");
    
  //   cy.get("[alt='Tori Malcolm']").click();

  //   cy.contains("Save").click();

  //   cy.contains(".appointment__card--show", "Lydia Miller-Jones");
  //   cy.contains(".appointment__card--show", "Tori Malcolm");
  // });

  it("should cancel an interview", () => {
    cy.get("[alt='Delete']").click( {force: true} );

    cy.contains("Confirm").click();

    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");

    cy.contains(".apppointment__card--show", "Archie Cohen").should("not.exist");
  });


});