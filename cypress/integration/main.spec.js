/// <reference types="cypress" />

import { test1 } from '../integration/test1.spec';
import { test2 } from "./test2.spec";

describe('Check Todos app', function() {
  beforeEach(function(){
    cy.visit("/")
    cy.viewport(Cypress.config("viewportWidth"), Cypress.config("viewportHeight"))
  })

  test1();

  test2();
})
