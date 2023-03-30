import { env } from '@config/env';
import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient {
  constructor() {
    super({
      log: env.NODE_ENV === 'dev' ? ['query'] : [],
    });
  }
}
