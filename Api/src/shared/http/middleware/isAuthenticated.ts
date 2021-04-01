import AppError from '@shared/errors/AppError';
import { NextFunction, request, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';

interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
}
export default function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction,
): void {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError('Jwr Token não encontrado');
    }

    const [, token] = authHeader.split(' '); // pegar o toke na posição 1

    try {
        const decodeToken = verify(token, authConfig.jwt.secret); // verifica se o token foi criado com a hash desta aplicação
        const { sub } = decodeToken as ITokenPayload;

        req.user = {
            id: sub,
        };
        return next();
    } catch {
        throw new AppError('Token Jwt inválido');
    }
}
