import {IPage} from "../shared/models/page";
import {IAuth, IRegisterUser, IUser} from "../shared/models/user";
import {IBasket, IProduct} from "../shared/models/product";
import {IActive, IAuthor, IModal, IRedirect} from "../shared/models";

export interface RootState {
    loginReducer: IAuth,
    registerReducer: IRegisterUser,
    productReducer: IProduct,
    redirectReducer: IRedirect,
    modalReducer: IModal;
    buyReducer: IBasket,
    isActiveReducer: IActive,
    authorsReducer: IAuthor,
    userReducer: IUser,
    pageReducer: IPage,
}
