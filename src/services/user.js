import axios from 'axios';
import { createUrl,createError } from './utils';

export async function policeSignIn(info){
    try{
        const loginUrl = createUrl('users/signin');
        console.log(loginUrl);
        console.log(info);
        const response = await axios.post(loginUrl,info)
        console.log("successfull");
        return response.data;
    }catch(error){
        return createError(error);
    }
}