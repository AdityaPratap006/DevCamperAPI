import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';

import { bootcampsRoute } from './routes/bootcamps.route';

// Load env vars
dotenv.config({ path: __dirname + '/../env/config.env' });

export const initializeServer = () => {
    const app = express();

    // Mount routes
    app.use(`/api/v1/bootcamps`, bootcampsRoute);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(
            chalk.blue(
                `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`
            )
        );
    });
};
