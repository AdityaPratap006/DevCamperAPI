import { RequestHandler } from 'express';
import chalk from 'chalk';

/**
 * @desc    Logs request to console
 */
export const logger: RequestHandler = (req, res, next) => {
    const apiEndpointURL = `${req.protocol}://${req.get('host')}${
        req.originalUrl
    }`;
    console.log(chalk.cyan.underline(`${req.method} ${apiEndpointURL}`));
    next();
};
