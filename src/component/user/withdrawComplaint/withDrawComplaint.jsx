import { useState, useEffect } from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate , useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const WithDrawComplaint = () => {
    const navigate = useNavigate();
    const URL = "http://localhost:8080/citizen/";
    const [complaints , setComplaints]  =  useState([
        {
    "complaintId": 1,
    "complaintCitizenFName": "mmmmm",
    "complaintPoliceStationAddress": "aaaa",
    "complaintIncidentDescription": "nmnmnmnmnm",
    "complaintIncidentDate": "2022-02-20",
    "complaintSuspects": "ksladklask",
    "complaintIncidentPlace": "nnnnnn",
    "complaintWitness": "abc",
    "complaintAdditionalInfo": "got robbed",
    "remark": "sdkjhksjdhfkjn",
    "status": "PENDING",
    "investigatingOfficerFName":"io1"
},{
    "complaintId": 2,
    "complaintCitizenFName": "mmmmm",
    "complaintPoliceStationAddress":"aaaa",
    "complaintIncidentDescription": "nmnmnmnmnm",
    "complaintIncidentDate": "2022-02-20",
    "complaintSuspects": "ksladklask",
    "complaintIncidentPlace": "nnnnnn",
    "complaintWitness": "abc",
    "complaintAdditionalInfo": "got robbed",
    "remark": "sdkjhksjdhfkjn",
    "status": "ONGOING",
    "investigatingOfficerFName":"io1"
},{
    "complaintId": 3,
    "complaintCitizenFName": "mmmmm",
    "complaintPoliceStationAddress":"aaaa",
    "complaintIncidentDescription": "nmnmnmnmnm",
    "complaintIncidentDate": "2022-02-20",
    "complaintSuspects": "ksladklask",
    "complaintIncidentPlace": "nnnnnn",
    "complaintWitness": "abc",
    "complaintAdditionalInfo": "got robbed",
    "remark": "sdkjhksjdhfkjn",
    "status": "PENDING",
    "investigatingOfficerFName":"io1"
}]);
    const location = useLocation();
    const userId = location.state && location.state.Id

    const getPendingComplaint = () => {
        try{
            const headersdata = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                }
            }
            axios.get(URL+"all-FIRs",headersdata).then((response) => {
                toast.success("complaints loaded successfully..!!");
                setComplaints(response.data.data);
            })
        }catch(error){
                toast.error("Error Occured while loding page..!!");
                console.log(error);
        }
    }

    const deletePendingComplaint = ((pendingId)=>{
        try{
            const headersdata = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                }
            }
            let url = URL + "delete-complaint/"+pendingId;
            axios.delete(url, headersdata).then((response)=>{
                console.log("in delete");
                console.log(pendingId);
                toast.success("complaints removed successfully..!!");
                getPendingComplaint();
            })


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
                                    <th>Incident Date</th>
                                    <th>{ }</th>
                                </tr>
                            </thead>
                            <tbody>
                                {complaints.map((complaint, index) =>{
                                    if(complaint.status === 'PENDING'){
                                        return (<>
                                            <tr key={complaint.complaintId}>
                                                <td>{complaint.complaintId}</td>
                                                <td>{complaint.complaintPoliceStationAddress}</td>
                                                <td>{complaint.status}</td>
                                                <td>{complaint.complaintIncidentDate}</td>
                                                <td>
                                                <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${complaint.complaintId}`} aria-expanded="false" aria-controls={`collapse${complaint.complaintId}`}>
                                                    Withdraw Complaint
                                                </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={"5"}>
                                                <div className="collapse" id={`collapse${complaint.complaintId}`}>
                                                    <div class="card card-body">
                                                        <table className="table table-responsive">
                                                            <tr>
                                                                <td>Location :</td>
                                                                <td>{complaint.complaintIncidentPlace}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Date :</td>
                                                                <td>{complaint.complaintIncidentDate}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Description :</td>
                                                                <td>{complaint.complaintIncidentDescription}</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={2}>
                                                                    <h6>Are you Sure you want to Withdraw your complaint*</h6>
                                                                </td>
                                                                
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={2}>
                                                                <button type="button" class="btn btn-danger" onClick={() => {deletePendingComplaint(complaint.complaintId )}}>Danger</button>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        
                                                        
                                                    </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            </>)
                                    }else{
                                        return null;
                                    }
                                    })}
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