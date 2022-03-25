const TODO_ITEM_ONE = 'buy some cheese'
const TODO_ITEM_TWO = 'feed the cat'

export const test2 = () => {
context('with two items in list', function() {
  beforeEach(() => {
    cy.get('.new-todo')
    .type(`${TODO_ITEM_ONE}{enter}`)
    .type(`${TODO_ITEM_TWO}{enter}`)
  })

  it('Test 2: can check off an item as completed', function() {
    cy.contains(TODO_ITEM_ONE)
    .parent()
    .find('input[type=checkbox]')
    .check()

  cy.contains(TODO_ITEM_ONE)
    .parents('li')
    .should('have.class', 'completed')
  })
})
};
