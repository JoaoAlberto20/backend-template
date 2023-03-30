import { beforeEach, describe, expect, it } from 'vitest';

import { ExampleUseCase } from '@application/use-cases/example';

describe('Example UseCase', () => {
  let exampleUseCase: ExampleUseCase;

  beforeEach(() => {
    exampleUseCase = new ExampleUseCase();
  });

  it('should be able to run example use case', async () => {
    const response = await exampleUseCase.execute({
      number: 5,
    });

    expect(response).not.toBeNaN();
    expect(response).toBe(10);
  });
});
