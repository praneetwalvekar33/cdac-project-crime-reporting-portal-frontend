import { useState, useEffect } from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate , useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const WithDrawComplaint = () => {
    const URL = "http://localhost:8080/citizen/";
    const [complaints , setComplaints]  =  useState([{"id":1 , "policeStation": "puna thana","incidentPlace":"xyz","type":"HIT_AND_RUN","status":"PENDING","incidentDate":"2023-12-14","incidentDescription":"zxc zxc zxc zxc zcx ssd er  sdgst" },
                                                    {"id":2 , "policeStation": "puna thana","incidentPlace":"xyz","type":"RUN","status":"PENDING","incidentDate":"2023-12-14","incidentDescription":"zxc zxc zxc zxc zcx ssd er  sdgst" }]);
    const location = useLocation();
    const userId = location.state && location.state.Id

    const getPendingComplaint = () => {
        try{
            axios.get(URL+"pendingComplaint"+ userId).then((response) => {
                toast.success("complaints loaded successfully..!!");
                setComplaints(response.data);
            })
        }catch(error){
                toast.error("Error Occured while loding page..!!");
                console.log(error);
        }
    }

    const deletePendingComplaint = ((pendingId)=>{
        try{
            console.log("in delete");
            console.log(pendingId);
        }catch(error){
            console.log(error);
            toast.error("Unable to process the Request !!")
        }
    });

    useEffect(()=>{
        getPendingComplaint();
    },[]);

    return (
<section className=" text-center text-lg-start d-flex justify-content-center mt-5" >
    <div className="card sm-3 " style={{width: "70%"}}>
        <div className="row g-0 d-flex align-items-center">
        
            <div className="col-lg-12">
                <div className="card-body py-8 px-md-8">
                    <div className="text-left mb-3"><h5>Complaints</h5></div>
                    <hr></hr>
                    <div className="table-responsive">
                            <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Police Station Name</th>
                                    <th>Status</th>
                                    <th>Complaint type </th>
                                    <th>{ }</th>
                                </tr>
                            </thead>
                            <tbody>
                                {complaints.map((complaint, index) =>{
                                        return (<>
                                                <tr key={complaint.id}>
                                                    <td>{complaint.id}</td>
                                                    <td>{complaint.policeStation}</td>
                                                    <td>{complaint.status}</td>
                                                    <td>{complaint.type}</td>
                                                    <td>
                                                    <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${complaint.id}`} aria-expanded="false" aria-controls={`collapse${complaint.id}`}>
                                                        Withdraw Complaint
                                                    </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={"5"}>
                                                    <div className="collapse" id={`collapse${complaint.id}`}>
                                                        <div class="card card-body">
                                                            <table className="table table-responsive">
                                                                <tr>
                                                                    <td>Location :</td>
                                                                    <td>{complaint.incidentPlace}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Date :</td>
                                                                    <td>{complaint.incidentDate}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Description :</td>
                                                                    <td>{complaint.incidentDescription}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={2}>
                                                                        <h6>Are you Sure you want to Withdraw your complaint*</h6>
                                                                    </td>
                                                                    
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={2}>
                                                                    <button type="button" class="btn btn-danger" onClick={() => {deletePendingComplaint(complaint.id)}}>Danger</button>
                                                                    </td>
                                                                    
                                                                </tr>
                                                            </table>
                                                            
                                                            
                                                        </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </>)})}
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        );
}

export default WithDrawComplaint;