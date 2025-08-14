const request = require('supertest');
const assert = require('assert');

describe('Test public API', () => {
  it('should return status 200', async () => {
    try {
      const res = await request('http://localhost:3000')
        .get('/')
        .set('Accept', 'application/json')
        .expect(200)
    } catch (e) {
      // console.log(`err: ${e}`);
      assert.equal(true, false, `this err happened: ${e}`);
    }
  });

});