import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserRequest extends Request{
    user?: object | string
}

const authenticate = (req: UserRequest, res: Response, next: NextFunction): void => {
    const token  = req.header('Authorization')?.replace('Bearer ', '') as string;
    if (!token) {
        res.status(401).send({ error: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (ex : unknown) {
        res.status(400).send({ error: 'Invalid token.'+(ex as Error).message });
    }
};

export default authenticate;
