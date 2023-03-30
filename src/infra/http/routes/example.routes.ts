import { FastifyInstance } from 'fastify';

import { exampleController } from '../controllers/example';

export async function exampleRoutes(app: FastifyInstance): Promise<void> {
  app.post('/example', exampleController);
}
