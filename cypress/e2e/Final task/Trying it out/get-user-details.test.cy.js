describe('Get User Details', () => {

it('Verify the list users will displayed', () => {

    cy.request('GET', 'https://gorest.co.in/public/v2/users')
    .its('status').should('equal', 200);
});
});
