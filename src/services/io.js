import axios from "axios";
import { createUrl,createError } from "./utils";

export async function getIoComplaintList(){
    try{
        const url = createUrl('IO/complaints');
        console.log(url);
        
        const headers = {
            headers:{
                token: `Bearer ${sessionStorage['token']}`
            }
        }
        const response =  await axios.get(url,headers);
        return response.data;
    }catch(error){
        createError(error);
    }  
}