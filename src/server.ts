import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import morgan from 'morgan';

import { connectDB } from './config/db';

import { bootcampsRoute } from './routes/bootcamps.route';

// Load env vars
dotenv.config({ path: __dirname + '/../env/config.env' });

export const initializeServer = async () => {
    console.log(chalk.gray(`starting server...`));

    await connectDB();

    const app = express();

    // Dev logging middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }

    // Mount routes
    app.use(`/api/v1/bootcamps`, bootcampsRoute);

    const PORT = process.env.PORT || 5000;

    const server = app.listen(PORT, () => {
        console.log(
            chalk.blue(
                `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`
            )
        );
    });

    return server;
};
