import axios from "axios";
import { createUrl,createError } from "./utils";

export async function getIoComplaintList(){
    try{
        const url = createUrl('IO/complaints');
        console.log(url);
        
        const headers = {
            headers:{
                Authorization: `Bearer ${sessionStorage['token']}`
            }
        }
        const response =  await axios.get(url,headers);
        console.log(response);
        return response.data;
    }catch(error){
        createError(error);   
    }  
}