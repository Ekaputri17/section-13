describe('Update User', () => {
    let accessToken = '738e6273ff1802a629642ead93f0b55d6c5c123d214d3eb6f740a44ef8227652'
    
    it('Succesfully Update User', () => {
          cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/5129239",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": "Rachel Putri",
                "email": "rachelputri11@gmail.com",
                "gender": "female",
                "status": "active"
            }
          }).then((res) => {
            expect(res.status).equal(200)
            expect(res.body).has.property('name', 'Rachel Putri')
            expect(res.body).has.property('email', 'rachelputri11@gmail.com')
            expect(res.body).has.property('gender', 'female')
            expect(res.body).has.property('status', 'active')
          })
    })
})
       
