describe("TEST STAR BUTTON",() => {

    it('should run performance audits', () => {
        cy.visit('http://localhost:3000/');
        cy.lighthouse();
      });

    it('click 10 star from 50 todo', () => {
        cy.visit("http://localhost:3000/todo")
            for(var j = 1 ; j < 51 ; j++){
                if (j % 10 == 0) {
                    cy.get(".list-group-item")
                    .contains(j)
                    .find(".star")
                    .click()
                }
            }
        cy.visit("http://localhost:3000/todo")
        //Click remove all
        //cy.get(".btn-danger")
        //.click()
    }) 

    it('click 20 star from 100 todo', () => {
        cy.visit("http://localhost:3000/todo")
            for(var j = 1 ; j < 101 ; j++){
                if (j % 10 == 0) {
                    cy.get(".list-group-item")
                    .contains(j)
                    .find(".star")
                    .click()
                }
            }
        cy.visit("http://localhost:3000/todo")
        //Click remove all
        //cy.get(".btn-danger")
        //.click()
    }) 

    it.only('click 60 star from 300 todo', () => {
        cy.visit("http://localhost:3000/todo")
            for(var j = 1 ; j < 301 ; j++){
                if (j % 10 == 0) {
                    cy.get(".list-group-item")
                    .contains(j)
                    .find(".star")
                    .click()
                }
            }
        cy.visit("http://localhost:3000/todo")
        //Click remove all
        //cy.get(".btn-danger")
        //.click()
    }) 
})