import { celebrate, Segments, Joi } from 'celebrate';
import { Router, Request, Response } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessionsRouters = Router();
const sessionsController = new SessionsController();

sessionsRouters.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    sessionsController.create,
);

export default sessionsRouters;
