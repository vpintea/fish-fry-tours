// addButton.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Add Boat Button Tests', () => {
    it('Visits the home page and checks that the Add Boat button exists', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Add Boat')
    });

    it('Checks that the Add Boat Button opens a form', () => {
        cy.contains('Enter Name:').should('not.exist');
        cy.contains('Add Boat').click();
        cy.contains('Enter name:')
    });

    it('Checks that the Add Boat Button adds a new boat called Red Marlin to the screen under maintenance', () => {

        cy.contains('Add Boat').click();
        cy.get('input[name="name"]').type('Red Marlin');
        cy.get('select[name="addStatus"]').select('Maintenance');
        cy.get('div[id="maintenance"] div[class="boatContainer"]').then(($items) => {
            expect($items).to.contain('Red Marlin');
        });

    });

});
