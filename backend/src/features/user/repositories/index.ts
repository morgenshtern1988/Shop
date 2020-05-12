import {userModel} from "../../../dataAccess/entityModels/user";

export const adminShowUser = async () => {
    const arrUser = await userModel.find({});
    // let arr = [];
    return arrUser.map((user) => {
        return {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            email: user.email,
        }
    });
};
