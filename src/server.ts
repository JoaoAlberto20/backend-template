import { env } from '@config/env';

import { app } from './app';

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('🚀 HTTP Server Running!');
  });
