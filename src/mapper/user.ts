import {IUser, IUserResponse} from "models/user";

export const userMapper = (userResponse: IUserResponse): IUser => {
    return {
        ...userResponse,
        address: `${userResponse.address.city} ${userResponse.address.street} ${userResponse.address.suite}`,
        userName: userResponse.username,
    }
}