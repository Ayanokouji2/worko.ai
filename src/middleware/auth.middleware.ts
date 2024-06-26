import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserRequest extends Request{
    user?: object | string
}

const authenticate = (req: UserRequest, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        res.status(401).send({ error: 'Access denied. No token provided.' });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send({ error: 'Invalid token.' });
    }
};

export default authenticate;
