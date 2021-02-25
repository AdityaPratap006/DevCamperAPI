import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';

// Load env vars
dotenv.config({ path: __dirname + '/../env/config.env' });

export const initializeServer = () => {
    const app = express();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(
            chalk.blueBright(
                `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`
            )
        );
    });
};
