import { loginFailed, loginStart, loginSuccess } from "./auth/userSlice"
import axios from "axios"
export const loginUser = async (user,dispatch,navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("v1/auth/login",user)
        dispatch(loginSuccess(res.data));
        navigate("/")
    } catch (error) {
        dispatch(loginFailed())
    }
}