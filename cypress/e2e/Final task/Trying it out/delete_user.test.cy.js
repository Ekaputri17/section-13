/// <reference types="Cypress" />

describe('Delete user', () => {
    let accessToken = '738e6273ff1802a629642ead93f0b55d6c5c123d214d3eb6f740a44ef8227652'
    it('Succesfully delete user', () => {
        cy.request({
          method: "DELETE",
          url: "https://gorest.co.in/public/v2/users/5129239",
          headers: {
              'Authorization': 'Bearer ' + accessToken
          }
        }).then((res) => {
          expect(res.status).equal(204)
        });
    });
});
    