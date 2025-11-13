const request = require('supertest');
const app = require('./app');

describe('Calculator API with Library', () => {
    let num1 = Math.floor(Math.random() * 1000);
    let num2 = Math.floor(Math.random() * 1000);

    test('GET /calculator/add => sum', async () => {
        const res = await request(app).get(`/calculator/add?num1=${num1}&num2=${num2}`).expect(200);
        expect(res.body).toEqual({ result: num1 + num2 });
    });

    test('GET /calculator/subtract => difference', async () => {
        const res = await request(app).get(`/calculator/subtract?num1=${num1}&num2=${num2}`).expect(200);
        expect(res.body).toEqual({ result: num1 - num2 });
    });

    test('GET /calculator/multiply => product', async () => {
        const res = await request(app).get(`/calculator/multiply?num1=${num1}&num2=${num2}`).expect(200);
        expect(res.body).toEqual({ result: num1 * num2 });
    });

    test('GET /calculator/divide => quotient', async () => {
        if (num2 === 0) num2 = 1;
        const res = await request(app).get(`/calculator/divide?num1=${num1}&num2=${num2}`).expect(200);
        expect(res.body).toEqual({ result: num1 / num2 });
    });

    test('GET /calculator/add with invalid input => error', async () => {
        const res = await request(app).get(`/calculator/add?num1=abc&num2=5`).expect(400);
        expect(res.body).toEqual({ error: 'Both num1 and num2 must be numbers' });
    });
});
