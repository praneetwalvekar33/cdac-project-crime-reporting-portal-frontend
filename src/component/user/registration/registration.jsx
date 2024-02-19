import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [signUpInfo,setSignUpInfo] = useState({"fname":"","lname":"","email":"","password":"","confirmPassword":""})
  const navigate = useNavigate();

  const OnTextChange = (args) => {
    console.log(args);
    var copyofinfo = {...signUpInfo};
    copyofinfo[args.target.name] = args.target.value;
    setSignUpInfo(copyofinfo);
  };

  const doSignUP = () =>{
      if(signUpInfo.fname ==""){
        toast.warn("Name Required..");
      }else if(signUpInfo.email == ""){
        toast.warn("Email Required..");
      }else if(signUpInfo.password == ""){
        toast.warn("please Choose a password..")
      }else if(signUpInfo.confirmPassword == ""){
        toast.warn("Please confirm Your Password..");
      }else if(signUpInfo.confirmPassword != signUpInfo.password){
        toast.warn("Password must be Same..!!");
      }else{
        sessionStorage.setItem("fname",signUpInfo.fname);
        sessionStorage.setItem("lname",signUpInfo.lname);
        sessionStorage.setItem("email",signUpInfo.email);
        sessionStorage.setItem("password",signUpInfo.password);
        navigate('/user/detailsRegistration');
      }
  };

    return (<section className=" text-center text-lg-start d-flex justify-content-center mt-5" >
    <div className="card sm-3 " style={{width: "40%"}}>
      <div className="row g-0 d-flex align-items-center">
        <div className="col-lg-12">
          <div className="card-body py-8 px-md-8">
            <div className="text-center mb-3">---New User Registration---</div>
            <div className="d-flex justify-content-end mb-3">
              <a href='/user/login' className="link-primary">Login</a>
            </div>
            <hr></hr>
            <form method='post'>
            <div class="row lg - 2">
            <div className="form-outline mt-2 mb-1" class='col'>
                <input type="name" id="ipt-fname" className="form-control"  name='fname' onChange={OnTextChange} required />
                <label className="form-label" for="ipt-name">First Name</label>
            </div>
            <div className="form-outline mt-2 mb-1" class='col'>
                <input type="name" id="ipt-lname" className="form-control"  name='lname' onChange={OnTextChange} required />
                <label className="form-label" for="ipt-name">Last Name</label>
            </div>
            </div>
              <div className="form-outline mt-2 mb-1">
                <input type="email" id="ipt-email" className="form-control"  name='email' onChange={OnTextChange} required/>
                <label className="form-label" for="ipt-email">Email address</label>
              </div>
  
              <div className="form-outline mb-1">
                <input type="password" id="ipt-password" className="form-control" name='password' onChange={OnTextChange} required/>
                <label className="form-label" for="ipt-password">Password</label>
              </div>
            
              <div className="form-outline mb-1">
                <input type="password" id="ipt-confirm-password" className="form-control" name='confirmPassword' onChange={OnTextChange} required />
                <label className="form-label" for="ipt-confirm-password">Confirm Password</label>
              </div>
              <button type="button" className="btn btn-primary btn-block mb-4" onClick={doSignUP}>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>)
}


export default Registration;