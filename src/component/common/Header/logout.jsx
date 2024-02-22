import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signinUser } from '../../../services/citizen';

const Logout = ()=>{

    useEffect(()=>{
        sessionStorage.removeItem("token");
    })

    return(
        <div className='card mt-8'>
            <h6>Have a nice day</h6>
        </div>
    )
}
export default Logout