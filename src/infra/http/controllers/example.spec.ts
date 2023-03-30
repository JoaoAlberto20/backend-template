import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { app } from '../../../app';

describe('Example (e2e)', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return 200', async () => {
    const response = await request(app.server).post('/example').send({
      number: 5,
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ number: 10 });
  });
});
