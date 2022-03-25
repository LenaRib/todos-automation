function test1(){

  const TODO_ITEM_ONE = 'buy some cheese'
  const TODO_ITEM_TWO = 'feed the cat'

  it('Test 1: can add two todo items', function() {
    cy.get('.new-todo')
      .type(`${TODO_ITEM_ONE}{enter}`)
      .type(`${TODO_ITEM_TWO}{enter}`)

    cy.get('.todo-list li').should('have.length', 2)

    cy.get('.todo-list li').first().should('have.text', TODO_ITEM_ONE)
    cy.get('.todo-list li').last().should('have.text', TODO_ITEM_TWO)
  })
};

export { test1 };
