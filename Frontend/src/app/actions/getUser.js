import { userFail,userRequest,userSuccess } from "../slicers/userSlicer"
import axios from 'axios';

export const getUser = async(dispatch,url) => {
    try {
        dispatch(userRequest());
        const { data } = await axios.get(url, { withCredentials: true })
        console.log(data);
        dispatch(userSuccess(data)); 
    }
    catch (error) {
        dispatch(userFail(error.response.data.message))
    }
}