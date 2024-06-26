import * as UserDAO from '../dao/user.dao'
import { User } from '../model/user.model'

export const createUser = async (userData: Partial<User>): Promise<User | null> => {
    return await UserDAO.createUser(userData)
}

export const getUserById = async (userId: string): Promise<User | null> => {
    return await UserDAO.getUserByID(userId);
};

export const getUsers = async (): Promise<User[]> => {
    return await UserDAO.getUsers();
};

export const updateUser = async (userId: string, updateData: Partial<User>): Promise<User | null> => {
    return await UserDAO.updateUser(userId, updateData);
};

export const deleteUser = async (userId: string): Promise<User | null> => {
    return await UserDAO.deleteUser(userId);
};