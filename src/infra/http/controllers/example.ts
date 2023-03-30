import { FastifyReply, FastifyRequest } from 'fastify';

import { makeExampleUseCase } from '@application/use-cases/factories/make-example-use-cases';

export async function exampleController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { number } = request.body as { number: number };

  const exampleUseCase = makeExampleUseCase();

  const result = await exampleUseCase.execute({ number });

  return reply.status(200).send({ number: result });
}
