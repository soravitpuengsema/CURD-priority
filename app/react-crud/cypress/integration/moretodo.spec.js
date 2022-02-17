describe("TEST STAR BUTTON",() => {

    it('add todo', () => {
        for(var i = 1 ; i < 51 ; i++){
            cy.seed(i)
        }
        cy.visit("localhost:3000")
    })

    it('click star', () => {
        cy.visit("localhost:3000/todo")
        for(var j = 1 ; j < 51 ; j++){
            if (j % 10 == 0) {
                cy.get(".list-group-item")
                  .contains(j)
                  .find(".star")
                  .click()
            }
        }
        cy.get(".btn-danger")
        .click()
    })
})