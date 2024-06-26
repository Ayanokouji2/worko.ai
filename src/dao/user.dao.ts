import userModel, { User } from '../model/user.model'

export const createUser = async (userData: Partial<User>): Promise<User> => {
    const user = new userModel(userData)
    return await user.save()
}

export const getUserByID = async (id: string): Promise<User | null> => {
    return await userModel.findById(id)
}

export const getUsers = async (): Promise<User[]> => {
    return await userModel.find({ isDeleted : false})
}

export const updateUser = async (id: string, userData: Partial<User>): Promise<User | null> => {

    if (!userData) {
        throw new Error('At least one field is required')
    }
    return await userModel.findByIdAndUpdate(id, userData, { new: true })
}

export const deleteUser = async ( id: string ) : Promise<User | null> =>{
    return await userModel.findByIdAndUpdate(id, { isDeleted: true} , { new: true})    
}

