import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { policeSignIn } from '../../../services/user';

const Login = () => {

const navigate = useNavigate();
const [info , setInfo] = useState({email:"",password:""});


const OnTextChange = (args) => {
  console.log(args);
  var copyofinfo = {...info};
  copyofinfo[args.target.name] = args.target.value;
  setInfo(copyofinfo);
};

const doLogin = async() => {
    if (info.email.length == 0) {
      console.log("notfound")
      toast.warn('enter email')
    } else if (info.password.length == 0) {
      toast.warn('enter password')
    } else {
      console.log(info);
      const responseData = await policeSignIn(info);
      console.log(responseData);
      if(responseData['mesg'] === 'Successful Authentication!!!'){
        sessionStorage['token'] = responseData['jwt'];
        console.log(sessionStorage['token']);
        toast.success('You have successfully logged in');
        navigate('/sho/listAllComplaint');
      }else{
        toast.error('Something went wrong');
      }
    }
};
    return (<section className=" text-center text-lg-start d-flex justify-content-center mt-5" >
    <div className="card sm-3 " style={{width: "40%"}}>
      <div className="row g-0 d-flex align-items-center">
        
        <div className="col-lg-12">
          <div className="card-body py-8 px-md-8">
            <div className="text-center mb-3">---Police Login---</div>
            <div className="d-flex justify-content-end mb-3">
              <a href='/user/registration' className="link-primary">Register New User</a>
            </div>
            <hr></hr>
            <form method='post'>
              <div className="form-outline mt-2 mb-4">
                <input type="email" id="ipt-email" className="form-control" value={info.email} name='email' onChange={OnTextChange} required />
                <label className="form-label" htmlFor="ipt-email">Email address</label>
              </div>
  
              <div className="form-outline mb-2">
                <input type="password" id="ipt-password" className="form-control"  value={info.password} name='password' onChange={OnTextChange} required/>
                <label className="form-label" htmlFor="ipt-password">Password</label>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
  
              <button type="button" className="btn btn-primary btn-block mb-4" onClick={doLogin} >Sign in</button>
              
            </form>
  
          </div>
        </div>
      </div>
    </div>
  </section>)
}

export default Login;