import { FastifyReply, FastifyRequest } from 'fastify';

import { makeExampleUseCase } from '@application/use-cases/factories/make-example-use-cases';

export async function exampleController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const exampleUseCase = makeExampleUseCase();
  const number = await exampleUseCase.execute({ number: 5 });

  return reply.status(200).send({ number });
}
