import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';

export default class SessionsController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;
        const createSessions = new CreateSessionsService();
        const user = await createSessions.execute({
            email,
            password,
        });

        return res.json(user);
    }
}
