import { useState, useEffect } from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { date } from "yup";
import { useLocation } from "react-router-dom";


const FileComplaint = () => {
    const URL = "http://localhost:8080/citizen";
    const location = useLocation();
    const useremail = location.state && location.state.Id;  //{location.state && location.state.myData}
    const [complaint , setComplaint] = useState({
        "incidentDescription": "",
        "incidentDate": "",
        "suspects": "",
        "policeStationAddress": 0,
        "incidentPlace": "",
        "witness": "",
        "additionalInfo": "",
        // "status": "PENDING"
    });
    // useEffect(()=>{
    //     toast.info("Please fill all the essential information")
    // });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setComplaint({
        ...complaint,
        [name]: value
    });
        console.log(complaint);
    };
    
    const postComplaint = ()=>{
        if(complaint.incidentDescription == ""){
            toast.warn("please describe the incident")
        }else if(complaint.policeStationId == 0){
            toast.warn("select the nearest police station")
        }else if(complaint.incidentPlace == ""){
            toast.warn("metion incident location")
        }else{
            const headersdata = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                }
            }
            axios.post(URL+"/add-complaint",complaint, headersdata).then((response)=>{
                console.log(response.data);
                toast.success("Complaint Recived !!");
                navigate("/user/profile")
            }).catch((error)=>{
                console.log(error);
                toast.error("Somthing went Wrong !!");
            })
        }
    }

    return (<>
    <section className=" text-center text-lg-start d-flex justify-content-center mt-5" >
    <div className="card sm-3 " style={{width: "60%"}}>
    <div className="row g-0 d-flex align-items-center">
        <div className="col-lg-12">
        <div className="card-body py-8 px-md-8">
            <div className="text-center mb-3">---File a Complaint---</div>
            <div className="d-flex justify-content-end mb-3">
            <a href='/user/profile' className="link-primary">Go back</a>
            </div>
            <hr></hr>
            <form method='post'>
            <div class="row lg - 2">
            <div className="form-outline mt-2 mb-1" class='col'>
            <label className="form-label" for="ipt-confirm-password">{ }</label>
                <input type="text" id="ipt-confirm-password" className="form-control" name='status' value={'PENDING'} onChange={handleChange} disabled />
            </div>
            <div className="form-outline mt-2 mb-1" class='col'>
            <label className="form-label" for="ipt-confirm-password">Date of INCIDENT</label>
                <input type="text" pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" id="ipt-date" className="form-control"  name='incidentDate' value={complaint.incidentDate} onChange={handleChange}/>
            </div>
            </div>
            <div className="form-outline mt-2 mb-1">
            <label className="form-label" for="ipt-confirm-password">Provide Suspects</label>
                <input type="email" id="ipt-email" className="form-control"  name='suspects' value={complaint.suspects} onChange={handleChange} placeholder="If Any..."/>
            </div>
            <div className="form-outline mt-2 mb-1">
            <label className="form-label" for="ipt-confirm-password">Describe Incident in brife </label>
                <textarea rows={"3"} type="text" id="ipt-fname" className="form-control"  name='incidentDescription' value={complaint.incidentDescription} onChange={handleChange} />
            </div>
            <div className="form-outline mb-1">
            <label className="form-label" for="ipt-confirm-password">Name of Nearest Police Station</label>
                <select class="form-select" aria-label="Default select example" value={complaint.policeStationAddress}name='policeStationAddress' onChange={handleChange} >
                    <option selected>Police-Station </option>
                    <option value="home side ">Station 1</option>
                    <option value="2">Station 2</option>
                    <option value="3">Station 3</option>
                    <option value="4">Station 4</option>
                    <option value="5">Station 5</option>
                    
                </select>
            </div>
            <div className="form-outline mb-1">
            <label className="form-label" for="ipt-confirm-password">Location of Incident</label>
                <input type="text" id="ipt-confirm-password" className="form-control" name='incidentPlace' value={complaint.incidentPlace} onChange={handleChange}  />
            </div>
            <div className="form-outline mb-1">
            <label className="form-label" for="ipt-confirm-password">Provide Witness </label>
                <input type="text" id="ipt-confirm-password" className="form-control" name='witness' value={complaint.witness} onChange={handleChange}  />
            </div>
            <div className="form-outline mb-1">
            <label className="form-label" for="ipt-confirm-password">Additional Information</label>
                <textarea rows={"3"} id="ipt-confirm-password" className="form-control" name='additionalInfo' value={complaint.additionalInfo} onChange={handleChange}  />
            </div>
            <button type="button" className="btn btn-primary btn-block mb-4" onClick={postComplaint}>SUBMIT COMPLAINT</button>
            </form>
        </div>
        </div>
    </div>
    </div>
    </section>
    </>);
}

export default FileComplaint;