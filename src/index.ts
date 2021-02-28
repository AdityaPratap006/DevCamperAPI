import chalk from 'chalk';
import { gracefullyCloseConnection } from './config/db';
import { initializeServer } from './server';

(async () => {
    const server = await initializeServer();

    process.on('unhandledRejection', (err, promise) => {
        console.log(chalk.red(`Error: ${(err as Error)?.message}`));
        server.close(() => process.exit(1));
    });

    process
        .on('SIGINT', gracefullyCloseConnection)
        .on('SIGTERM', gracefullyCloseConnection);
})();
