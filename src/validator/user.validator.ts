import Joi from 'joi';
import { UpdateUserDTO, createUserDTO } from '../dto/user.dto';

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    city: Joi.string().required(),
    age: Joi.number().integer().required(),
    zipCode: Joi.string().required().pattern(new RegExp('^[0-9]{5}$')),
});

const idSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const validateCreateUser = (data: createUserDTO): void => {
    const { error } = userSchema.validate(data);
    if (error) {
        throw new Error(error.details[0].message);
    }
};

export const validateUpdateUser = (data: UpdateUserDTO ): void => {
    const { error } = userSchema.validate(data);
    if (error) {
        throw new Error(error.details[0].message);
    }
};

export const validateId = (id: string): void => {
    const { error } = idSchema.validate(id);
    if (error) {
        throw new Error(error.details[0].message);
    }
};
