describe('Create New User / post user request', () => {
    let accessToken = '738e6273ff1802a629642ead93f0b55d6c5c123d214d3eb6f740a44ef8227652'
    
    it('Succesfully created new user', () => {
          cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": "Putri Andini",
                "email": "putriandini@gmail.com",
                "gender": "female",
                "status": "active"
            }
          }).then((res) => {
            expect(res.status).equal(201)
            expect(res.body).has.property('name', 'Putri Andini')
            expect(res.body).has.property('email', 'putriandini@gmail.com')
            expect(res.body).has.property('gender', 'female')
            expect(res.body).has.property('status', 'active')
          })
    })
})