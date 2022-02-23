/// <reference types="cypress" />

const TODO_ITEM_ONE = 'buy some cheese'
const TODO_ITEM_TWO = 'feed the cat'

describe('Check Todos app', function() {
  beforeEach(function(){
    cy.visit("/")
    cy.viewport(Cypress.config("viewportWidth"), Cypress.config("viewportHeight"))
  })

  it('Test 1: can add two todo items', function() {
    cy.get('.new-todo')
      .type(`${TODO_ITEM_ONE}{enter}`)
      .type(`${TODO_ITEM_TWO}{enter}`)

    cy.get('.todo-list li').should('have.length', 2)

    cy.get('.todo-list li').first().should('have.text', TODO_ITEM_ONE)
    cy.get('.todo-list li').last().should('have.text', TODO_ITEM_TWO)
  })

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
})
