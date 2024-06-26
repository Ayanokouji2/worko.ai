import { Request, Response } from 'express';
import * as userService from '../service/user.services';
import { createUserDTO, UpdateUserDTO } from '../dto/user.dto';
import { validateCreateUser, validateUpdateUser, validateId } from '../validator/user.validator';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error : unknown) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;
        validateId(userId);

        const user = await userService.getUserById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, name, age, city, zipCode } = req.body;
        const createUserDto = new createUserDTO(email, name, age, city, zipCode);
        validateCreateUser(createUserDto);

        const user = await userService.createUser(createUserDto );
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;
        validateId(userId);

        const { email, name, age, city, zipCode } = req.body;
        const updateUserDto = new UpdateUserDTO(email, name, age, city, zipCode);
        validateUpdateUser(updateUserDto);

        const user = await userService.updateUser(userId, updateUserDto);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ error: ( error as Error ).message });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;
        validateId(userId);

        const user = await userService.deleteUser(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'User deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: ( error as Error).message });
    }
};
