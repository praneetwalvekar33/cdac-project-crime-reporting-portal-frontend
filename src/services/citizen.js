import axios from "axios";
import { createUrl,createError } from "./utils";

export async function getIoComplaintList(){
    try{
        const url = createUrl('citizen/');
        console.log(url);

        const headers = {
            headers:{
                Authorization: `Bearer ${sessionStorage['token']}`
            }
        }
        const response =  await axios.get(url,headers);
        console.log("response")
        console.log(response.data.data);
        return response.data.data;
    }catch(error){
        createError(error);
    }
}