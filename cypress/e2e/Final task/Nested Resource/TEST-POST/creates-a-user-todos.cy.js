/// <reference types="Cypress" />

describe('User todos', () => {
    let accessToken = '738e6273ff1802a629642ead93f0b55d6c5c123d214d3eb6f740a44ef8227652'
    it('Succesfully create a user todos', () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in//public/v2/users/5124735/todos",
            headers: {
                'Authorization': 'Bearer ' + accessToken
        },
        body: {
            "title": "Be checked",
            "due_on": "2023-09-25T00:00:00.000+05:30",
            "status": "pending",
        }
      }).then((res) => {
        expect(res.status).equal(201)
        expect(res.body).has.property('title', 'Be checked')
        expect(res.body).has.property('due_on', '2023-09-25T00:00:00.000+05:30')
        expect(res.body).has.property('status', 'pending')
      })
    })
})
    