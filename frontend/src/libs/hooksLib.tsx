import {useState} from "react";
import {RootState} from "../containers/inrerface";
import {useDispatch, useSelector} from "react-redux";

export function useFormFields(initialState: any) {
    // const [fields, setValues] = useState(initialState);
    const selectIsOn = (state: RootState) => state.registerReducer;
    const newUser = useSelector(selectIsOn);
    const dispatch = useDispatch();
    const setNewUser = (password:any) => dispatch({type: "@@register/REGISTER_START", payload: {password}});
    return [
        newUser,
        function (event: any) {
            setNewUser({
                ...newUser,
                [event.target.id]: event.target.value
            });
        }
    ];
}
