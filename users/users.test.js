require('jest')
const request = require('supertest')

test('GET /users', () => {
    return request('http://localhost:4000').get('/users')
        .then(resp => {
            expect(resp.status).toBe(200)                
        }).catch(fail)        
})