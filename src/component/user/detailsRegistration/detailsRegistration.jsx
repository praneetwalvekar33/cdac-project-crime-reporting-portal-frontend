import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const DetailsRegistration = () => {

//     const [details,setDeatils] = useState({"name":"","email":"","password":""});

// useEffect(()=>{
//     var newdetails = window.sessionStorage.getItem("info");

//     var copyofdetails = {...details};
//     copyofdetails.name = newdetails.name;
//     copyofdetails.email=newdetails.email;
//     copyofdetails.password =newdetails.password;

  
//     setDeatils(copyofdetails);

// })


//     return (<>
//             <div className="container">
//                 <h2 ></h2>
//                 <input type="text" value={details.email}></input>
//                 <h2>details.email</h2>
//             </div>
//         </>)


const [formData, setFormData] = useState({
    title: 'Mr',
    gender: 'MALE',
    mobileNo: '',
    addharNo: '',
    occupation: '',
    age: 0,
    email: sessionStorage.getItem("email"),
    fatherName: '',
    password: sessionStorage.getItem("password"),
    currentAddress: {
      addressLine1: '123',
      addressLine2: '1234',
      district: '',
      state: '',
      country: '',
      pincode: ''
    },
    permanentAddress: {
      addressLine1: '',
      addressLine2: '',
      district: '',
      state: '',
      country: '',
      pincode:''
    },
    fname: sessionStorage.getItem("fname"),
    dob: '2024-02-15',
    lname: sessionStorage.getItem("lname")
  });

  useEffect(()=>{
    console.log(formData);
    sessionStorage.removeItem("fname");
    sessionStorage.removeItem("lname");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
  },[]);

  const [confirmPassword , setConfirmPassword ] = useState();

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData);
  };

  const handlePermanentAddressChange = (e) => {
    const {name, value} = e.target;
    console.log(name);
    setFormData({
      ...formData,
      permanentAddress: {
        ...formData.permanentAddress,
        [name] : value
      }
    });
    console.log(formData);
  };

  const handleCurrentAddressChange = (e) => {
    const {name, value} = e.target;
    console.log(name);
    setFormData({
      ...formData,
      currentAddress: {
        ...formData.permanentAddress,
        [name] : value
      }
    });
    console.log(formData);
  };

  const confirmPasswordHandle = (e)=>{
    var copyofpass = {...confirmPassword};
    copyofpass[e.target.name] = e.target.value;
    setConfirmPassword(copyofpass);
    console.log(formData);
    console.log(confirmPassword)
  };

  const handleSubmit = async (e) => {
    if(formData.fname ==""){
      toast.warn("please Enter your Name")
    }else if(formData.age < 16){
      toast.warn("age must be greater than 15");
    }else if(formData.addharNo.length < 12){
      toast.warn("please provide a valid Addhar No.");
    }else if(formData.email == ""){
      toast.warn("Insert a valid Email");
    }else if(formData.password == ""){
        toast.warn("Choose Password....");
    }else if(formData.password != confirmPassword){
      toast.error("password must be same..!!");
    }else{
      try {
        await axios.post('http://localhost:8080/citizen', formData);
        toast.success('Data submitted successfully!');
        navigate("/user/login")
        } catch (error) {
        console.error('Error submitting data:', error);
        toast.error('An error occurred while submitting data. Please try again.');
        }
    }

};

return (
    <section className=" text-center text-lg-start d-flex justify-content-center mt-5" >
    <div className="card sm-3 " style={{width: "60%",textAlign:"left"}}>
      <div className="row g-0 d-flex align-items-center">
        
        <div className="col-lg-12">
          <div className="card-body py-8 px-md-8">
            <div className="text-center mb-3">---Registration Details---</div>
            <div className="d-flex justify-content-end mb-3">
              <a href='/user/login' className="link-primary">Login</a>
            </div>
            <hr></hr>

            <form method='post'>

            <div class="row lg - 2">
            <div className="form-outline mt-2 mb-1" class="col" >
            <label className="form-label" for="ipt-name">Title</label>
            <select class="form-select" aria-label="Default select example" value={formData.title} name="title">
            <option value="1">Mr</option>
            <option value="2">Mrs</option>
            <option value="3">Miss</option>
            <option value="4">Doctor</option>
            <option value="5">Prof</option>
            <option selected>Title : </option>
            </select>
      
            </div>

            <div className="form-outline mt-2 mb-1" class="col">
            <label className="form-label" for="ipt-name">Gender </label>
            <select class="form-select" aria-label="Default select example" value={formData.gender} name="gender">
            <option value="1">MALE</option>
            <option value="2">FEMALE</option>
            <option value="3">OTHER</option>
            <option selected>Gender : </option>
            </select>
            </div>
            </div>
              <div className="form-outline mt-2 mb-1">
              <label className="form-label" for="ipt-name">First Name</label>
              <input type="name" className="form-control" name="fname" value={sessionStorage.getItem("fname")} onChange={handleChange} disabled/>
              </div>
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">Last Name</label>
              <input type="name" className="form-control" name="lname" value={formData.lname} onChange={handleChange}  disabled/>
              </div>

              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">Date Of Birth </label>
              <input type="Date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} required/>
              </div>
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">Mobile No.</label>
              <input type="text" maxLength={10} minLength={10} className="form-control" name="mobileNo" pattern="[0-9]{10}" value={formData.mobileNo} onChange={handleChange} required />
              </div>
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">Age</label>
              <input type="number" min={16} className="form-control" name="age" value={formData.age} onChange={handleChange} required />
              </div>
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">Addhar No</label>
              <input type="text" maxLength={12} className="form-control" name="addharNo" value={formData.addharNo} onChange={handleChange} required/>
              </div>
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required readonly/>
              </div>
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">Occupation</label>
              <input type="text" className="form-control" name="occupation" value={formData.occupation} onChange={handleChange} />
              </div>
              <br></br>
              <div class="row lg - 2" style={{backgroundColor:'green'}}>
                <div class="col">
                              <label className="form-label" for="ipt-name"><h5>Permanent Address Details :</h5> </label>
                              <div className="card-body py-8 px-md-8" style={{backgroundColor:'lightskyblue'}}>
                              <div className="form-outline mb-1">
                              <label className="form-label" for="ipt-name">Address Line1</label>
                              <input type="text" className="form-control" name="addressLine1" value={formData.permanentAddress.addressLine1} onChange={handlePermanentAddressChange} required/>
                              </div>
                              <div className="form-outline mb-1">
                              <label className="form-label" for="ipt-name">Address Line2</label>
                              <input type="text" className="form-control" name="addressLine2" value={formData.permanentAddress.addressLine2} onChange={handlePermanentAddressChange} required />
                              </div>
                              <div className="form-outline mb-1">
                              <label className="form-label" for="ipt-name">District</label>
                              <input type="text" className="form-control" name="district" value={formData.permanentAddress.district} onChange={handlePermanentAddressChange} required/>
                              </div>
                              <div className="form-outline mb-1">
                              <label className="form-label" for="ipt-name">State</label>
                              <input type="text" className="form-control" name="state" value={formData.permanentAddress.state} onChange={handlePermanentAddressChange} required/>
                              </div>
                              <div className="form-outline mb-1">
                              <label className="form-label" for="ipt-name">Pin Code</label>
                              <input type="text" className="form-control" name="pincode" value={formData.permanentAddress.pincode} onChange={handlePermanentAddressChange} required />
                              </div>
                              </div>
                </div>
                <div class="col">
                <label className="form-label" for="ipt-name"><h5>Current Address Details :</h5> </label>
              <div className="card-body py-8 px-md-8" style={{backgroundColor:'lightpink'}}>
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">Address Line1</label>
              <input type="text" className="form-control" name="addressLine1" value={formData.currentAddress.addressLine1} onChange={handleCurrentAddressChange} required/>
              </div>
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">Address Line2</label>
              <input type="text" className="form-control" name="addressLine2" value={formData.currentAddress.addressLine2} onChange={handleCurrentAddressChange} required/>
              </div>
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">District</label>
              <input type="text" className="form-control" name="district" value={formData.currentAddress.district} onChange={handleCurrentAddressChange} required/>
              </div>
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">State</label>
              <input type="text" className="form-control" name="state" value={formData.currentAddress.state} onChange={handleCurrentAddressChange} required />
              </div>
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-name">Pin Code</label>
              <input type="text" className="form-control" name="pincode" value={formData.currentAddress.pincode} onChange={handleCurrentAddressChange} required />
              </div>
            
              </div>
              <br></br>
                </div>

              </div>

              <br></br>

              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-password">Password</label>
                <input type="password" id="ipt-password" className="form-control" name='password'  value={formData.password} onChange={handleChange}  disabled/>
              </div>
            
              <div className="form-outline mb-1">
              <label className="form-label" for="ipt-confirm-password">Confirm Password</label>
                <input type="text" id="ipt-confirm-password" className="form-control" name='confirmPassword' onChange={confirmPasswordHandle} required />
              </div>

              <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign up</button>
  
            </form>
  
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default DetailsRegistration;
// export default DetailsRegistration;