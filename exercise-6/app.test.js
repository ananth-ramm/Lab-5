const request = require('supertest');
const app = require('./app');

describe('Calculator API Routes', () => {

    let number1 = Math.floor(Math.random() * 1000);
    let number2 = Math.floor(Math.random() * 1000);

    test('GET /calculator/add => sum', async () => {
        const res = await request(app)
            .get(`/calculator/add?num1=${number1}&num2=${number2}`)
            .expect(200)
            .expect('Content-Type', /json/);
        expect(res.body).toEqual({ result: number1 + number2 });
    });

    test('GET /calculator/subtract => difference', async () => {
        const res = await request(app)
            .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)
            .expect(200)
            .expect('Content-Type', /json/);
        expect(res.body).toEqual({ result: number1 - number2 });
    });

    test('GET /calculator/multiply => product', async () => {
        const res = await request(app)
            .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)
            .expect(200)
            .expect('Content-Type', /json/);
        expect(res.body).toEqual({ result: number1 * number2 });
    });

    test('GET /calculator/divide => quotient', async () => {
        if (number2 === 0) number2 = 1; // avoid division by zero
        const res = await request(app)
            .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
            .expect(200)
            .expect('Content-Type', /json/);
        expect(res.body).toEqual({ result: number1 / number2 });
    });

    test('GET /calculator/add with invalid input => error', async () => {
        const res = await request(app)
            .get(`/calculator/add?num1=abc&num2=5`)
            .expect(400)
            .expect('Content-Type', /json/);
        expect(res.body).toEqual({ error: 'Both num1 and num2 must be numbers' });
    });

});
