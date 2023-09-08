/// <reference types="Cypress" />

describe('Create User Posts', () => {
    let accessToken = '738e6273ff1802a629642ead93f0b55d6c5c123d214d3eb6f740a44ef8227652'
    
    it('Succesfully create a user posts', () => {
          cy.request({
            method: "POST",
            url: "https://gorest.co.in//public/v2/users/5118083/posts",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "title": "Good vibes idea",
                "body": "Congratulation on the complete the text",
            }
          }).then((res) => {
            expect(res.status).equal(201)
            expect(res.body).has.property('title', 'Good vibes idea')
            expect(res.body).has.property('body', 'Congratulation on the complete the text')
          })
    })
})