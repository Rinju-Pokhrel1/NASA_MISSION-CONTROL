// describe('Test GET /launches',()=>{
//     test('200',()=>{
//         const response=200;
//   expect(response).toBe(200)

//     })
// })

// describe('Test POST /launches',()=>{

//     test('It should response with 200 success',()=>{})
//     test('It should catch missing requires properties',()=>{})
//     test('It should catch the invalid dates ',()=>{})
// })
const request=require('supertest')
const app =require('../../app')

describe('Test GET /launches',()=>{
    test('it should response with 200 success',async()=>{
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type',/json/)
        .expect(200)
        // expect(response.statusCode).toBe(200)
    })
})

describe('Test POST /launches',()=>{
    const completeData={
        mission:'uss data',
            rocket:"Nepal",
            target:"nepals first ",
            launchDate:"october 4 ,2025"

    }
    const DatawithoutlaunchDate={
         mission:'uss data',
            rocket:"Nepal",
            target:"nepals first "
    }
    test("It should reponse with 200 success",async()=>{
        const response =await request(app).post('/launches')
        .send(completeData)
        .expect('Content-Type',/json/)
        .expect(201)
        const requestDate =new Date(completeData.launchDate).valueOf()
       const responseDate =new Date(response.body.launchDate).valueOf()
        expect(responseDate).toBe(requestDate)
        expect(response.body).toMatchObject(DatawithoutlaunchDate)
    })
  test("It should catch the missing field", async () => {

    const response = await request(app)
        .post('/launches')
        .send(DatawithoutlaunchDate)
        .expect('Content-Type', /json/)
        .expect(400);

    expect(response.body).toStrictEqual({
        error: "Missing field "
    });

});


test("It should catch the date mistake", async () => {

    const response = await request(app)
        .post('/launches')
        .send({
            mission: 'uss data',
            rocket: 'Nepal',
            target: 'nepals first',
            launchDate: 'invalid date'
        })
        .expect('Content-Type', /json/)
        .expect(400);

    expect(response.body).toStrictEqual({
        error: "data should be number"
    });

});
})
