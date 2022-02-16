describe('My First Test', () => {
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
     it('hello', () => {
         cy.get(".list-group")
            .contains("sfsad")
       })
     })