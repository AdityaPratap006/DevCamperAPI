import { Router } from 'express';
import {
    createBootcamp,
    deleteBootcamp,
    getBootcamp,
    getBootcamps,
    updateBootcamp,
} from '../controllers/bootcamps.controller';

export const bootcampsRoute = Router();

bootcampsRoute.route('/').get(getBootcamps).post(createBootcamp);

bootcampsRoute
    .route(`/:id`)
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);
