import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import userEvent from "@testing-library/user-event";


const Profile = () => {
    const URL = "http://localhost:8080/SHO"

    const [details , setDetails] =  useState({
        "age": 0,
        "gender": "MALE",
        "baseEntityUserEmail": "string",
        "mobileNo": "string",
        "designation": "string",
        "joiningDate": "2024-02-21",
        "dutyStatus": "string",
        "policeStationAddress": "string",
        "fname": "string",
        "lname": "string",
        "dob": "2024-02-21"
    });

    const getDetails =()=>{
        const headerData ={
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            }
        }
        axios.get(URL, headerData).then((response)=>{
            console.log(response.data.data);
            setDetails(response.data.data);
            toast.success("Profile Loaded Successfully");
        }).catch((error)=>{
            console.log(error);
            toast.error("Error occured While Loading the Profile")
        });
    }

    useEffect(() =>{
        getDetails();
    },[])


    return (
            <div className="container rounded bg-white mt-5 mb-5 " >
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span className="font-weight-bold">{details.fname}" "{details.lname}</span><span class="text-black-50">{details.baseEntityUserEmail}</span><span class="text-black-50">Inspector </span></div>
                    </div>
                    <div className="col-md-7 border-right">
                        <div className="p-3 py-5">
                            <hr></hr>
                            <div className="card-body" style={{textAlign:"left"}}>
                                  {/* <Link to={{ pathname: '/user/fileComplaint',  state: { Id : userId }  }}> */}
                                        <Link to={"/sho/listAllComplaint"}>
                                            <button type="button" class="btn btn-primary" style={{marginRight:"7px"}}>Complaint List</button>
                                        </Link>
                                        {/* <Link to={{ pathname:"/user/withdrawComlaint",state: { Id : userId }}}> */}
                                        <Link to={"/user/withdrawComlaint"}>
                                            <button type="button" class="btn btn-primary" style={{marginRight:"7px"}}>List Of IO</button>
                                        </Link>
                            </div>
                            <hr></hr>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right"> SHO Profile</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label><input type="text" readonly disabled className="form-control"  value={details.fname}></input></div>
                                <div className="col-md-6"><label className="labels">Surname</label><input type="text"  readonly disabled className="form-control" value={details.lname}></input></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12 mt-3"><label className="labels">Mobile Number</label><input type="text" className="form-control"  value={details.mobileNo} readonly disabled></input></div>
                                <div className="col-md-12 mt-3"><label className="labels">Address Line 1</label><input type="text" className="form-control"  value="Sunbeam IT Park, Ground Floor" readonly disabled></input></div>
                                <div className="col-md-12 mt-3"><label className="labels">Address Line 2</label><input type="text" className="form-control"  value="Phase 2 of Rajiv Gandhi Infotech Park, Hinjawadi" readonly disabled></input></div>
                                <div className="col-md-12 mt-3"><label className="labels">Email ID</label><input type="text" className="form-control"   value={details.baseEntityUserEmail} readonly disabled></input></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Joining Date</label><input type="text" class="form-control"  value={details.joiningDate} readonly disabled></input></div>
                                <div className="col-md-6"><label className="labels">Date Of Birth</label><input type="text" class="form-control" value={details.dob} readonly disabled></input></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Country</label><input type="text" class="form-control"  value="India" readonly disabled></input></div>
                                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" class="form-control" value="Pune" readonly disabled></input></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Profile;