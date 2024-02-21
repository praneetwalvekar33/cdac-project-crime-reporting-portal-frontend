import axios from "axios";
import { createUrl,createError } from "./utils";

export async function getIoComplaintList(){
    try{
        const url = createUrl('IO/complaints/');
        console.log(url);
        
        const headers = {
            headers:{
                Authorization: `Bearer ${sessionStorage['token']}`,
            },
        }
        console.log(headers.headers.Authorization);
        const response =  await axios.get(url,headers);
        console.log(response);      
        return response.data;
        
    }catch(error){
        createError(error);   
    }  
}

export async function updateComplaintByIo(complaintId,complaintChange){
    try{
        const url = createUrl(`IO/complaints/${complaintId}/update`); 
        const headers = {
            headers:{
                Authorization: `Bearer ${sessionStorage['token']}`,
            },
        }
        console.log(complaintChange);
        const response = await axios.put(url,complaintChange,headers);
        console.log(response.data);
        return response.data;
    }catch(error){
        createError(error);
    }
}

export async function getComplaint(id){
    try{
        const url = createUrl(`IO/complaints/${id}`);
        const headers = {
            headers:{
                Authorization: `Bearer ${sessionStorage['token']}`,
            },
        }
        const response = await axios.get(url,headers);
        return response.data;
    }catch(error){
        createError(error);
    }
}

export async function getIoDetails(){
    try{
        const url = createUrl(`IO/`);
        const headers = {
            headers:{
                Authorization: `Bearer ${sessionStorage['token']}`,
            },
        }
        const response = await axios.get(url,headers);
        return response.data;
    }catch(error){
        createError(error);
    }
}