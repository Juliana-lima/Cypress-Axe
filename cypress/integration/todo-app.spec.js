/// <reference  types="cypress"/>

beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react');
    cy.injectAxe();
});
describe('Todo application', () => {
    it('Should log any accessibility failure', () => {
        cy.checkA11y(); 
    });

    it('Should exclude specific elements on the page', () => {
        cy.checkA11y({exclude: ['.learn']}); 
    });

    it('Should only test specific elements on the page', () => {
        cy.checkA11y('.learn'); 
    });

    it('Should  only include rules with serious and critical impacts', () => {
        cy.checkA11y(null, {includedImpacts: ['critical', 'serious'] });
    });

});
