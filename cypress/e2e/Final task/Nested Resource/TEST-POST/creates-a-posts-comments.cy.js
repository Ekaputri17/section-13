/// <reference types="Cypress" />

describe('Create Posts Comments', () => {
    let accessToken = '738e6273ff1802a629642ead93f0b55d6c5c123d214d3eb6f740a44ef8227652'
    
    it('Succesfully create a posts comments', () => {
          cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/posts/66972/comments",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                    "name": "Anya Farasya",
                    "email": "anyafarasyaaa@gmail.com",
                    "body": "Good job"
                  }
                }).then((res) => {
                  expect(res.status).equal(201)
                  expect(res.body).has.property('name', 'Anya Farasya')
                  expect(res.body).has.property('email', 'anyafarasyaaa@gmail.com')
                  expect(res.body).has.property('body', 'Good job')
                })
          })
    })
