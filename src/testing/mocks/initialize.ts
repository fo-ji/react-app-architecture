import { IS_SERVER } from '@/config/constants';

import { seedDb } from './seed-db';

// https://github.com/mswjs/msw/issues/1227
const initializeMocks = async () => {
  if (IS_SERVER) {
    const { server } = await require('./server');
    server.listen();
  } else {
    const { worker } = await require('./browser');
    worker.start();
  }
  seedDb();
};

initializeMocks();
