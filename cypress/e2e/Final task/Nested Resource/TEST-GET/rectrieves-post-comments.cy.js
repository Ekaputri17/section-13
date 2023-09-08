/// <reference types="Cypress" />

describe('Post Comments', () => {
    let accessToken = '738e6273ff1802a629642ead93f0b55d6c5c123d214d3eb6f740a44ef8227652'
    it('Succesfully rectrieves post comments', () => {
        cy.request({
          method: "GET",
          url: "https://gorest.co.in//public/v2/posts/66972/comments",
          headers: {
              'Authorization': 'Bearer ' + accessToken
          }
        }).then((res) => {
          expect(res.status).equal(200)
        });
    });
  });