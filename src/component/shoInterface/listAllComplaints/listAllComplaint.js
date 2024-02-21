import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AllComplaints = ()=>{

    const URL = "http://localhost:8080/SHO"
    const [complaints , setComplaints] = useState([  {
        "id":1,
        "complainant": "string",
        "incidentDescription": "string",
        "incidentDate": "2024-02-21",
        "suspects": "string",
        "incidentPlace": "string",
        "witness": "string",
        "additionalInfo": "string",
        "fir": true
    },  {
        "id":2,
        "complainant": "string",
        "incidentDescription": "string",
        "incidentDate": "2024-02-21",
        "suspects": "string",
        "incidentPlace": "string",
        "witness": "string",
        "additionalInfo": "string",
        "fir": true
    }]);

    const getAllComplaint =()=>{
    const headersdata = {
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    }
}
        let url = URL + "/police-station/all-complaints "
        axios.get(url,headersdata).then((response)=>{
            console.log(response.data);
            setComplaints(response.data.data);
            toast.success("All complaints Loaded sucessfully")
        }).catch((error)=>{
            console.log(error);
            toast.error("Unable to load complaints");
        });
    }
    useEffect(()=>{
        getAllComplaint();
    },[])



    return(<div className="container">
            {/* <section className=" text-center text-lg-start d-flex justify-content-center mt-5"> <section/> */}

    <div className="card sm-3 mt-3 " style={{width: "85%"}}>
        <div className="row g-0 d-flex align-items-center"></div>
        <div className="col-lg-12">
            <div className="card-body py-8 px-md-8">
            <div className="text-center mb-3"><h5>---List Of All Complaints---</h5></div>
            <div className="d-flex justify-content-end mb-3">
            <div className="card-body" style={{textAlign:"left"}}>
              {/* <Link to={{ pathname: '/user/fileComplaint',  state: { Id : userId }  }}> */}
                    <Link to={"/sho/shoProfile"}>
                        <button type="button" class="btn btn-primary" style={{marginRight:"7px"}}>Profile</button>
                    </Link>
                    {/* <Link to={{ pathname:"/user/withdrawComlaint",state: { Id : userId }}}> */}
                    <Link to={"/sho/ioList"}>
                        <button type="button" class="btn btn-primary" style={{marginRight:"7px"}}>List Of IO</button>
                    </Link>
                </div>
            <Link to={{ pathname: '/sho/shoProfile'}}>
                    <button className="btn btn-success" type="button">
                                                    Back
                                                    </button>
            </Link>
            </div>
            <hr></hr>
            <div className="table-responsive">
        <table className="table table-striped">
        <thead>
            <tr>
            <th>#</th>
            <th>Citizen</th>
            <th>Date</th>
            <th>Area</th>
            <th>Suspects</th>
            <th>Witness</th>
            <th>{ }</th>
            <th>{ }</th>
            </tr>
        </thead>
        <tbody>
            {complaints.map((complaint, index) =>{
            
                return (<>
                <tr key={complaint.id}>
                    <td>{complaint.id}</td>
                    <td>{complaint.complainant}</td>
                    <td>{complaint.incidentDate}</td>
                    <td>{complaint.incidentPlace}</td>
                    <td>{complaint.suspects}</td>
                    <td>{complaint.witness}</td>
                    
                    <td>
                    <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${complaint.id}`} aria-expanded="false" aria-controls={`collapse${complaint.id}`}>
                                                        More Info
                                                    </button>
                    </td>
                    <td>
                    <Link to={{ pathname: '/sho/ioToSelect' ,  state: { complaintId : complaint.id  }} }>
                    <button className="btn btn-success" type="button" >
                                                        Accept Complaint
                                                    </button>
                    </Link>
                    </td>
                </tr>
                <tr>
                    <td colSpan={"8"}>
                    <div className="collapse" id={`collapse${complaint.id}`} style={{textAlign:'left'}}>
                        <div class="card card-body">
                            <table className="table table-responsive">
                                <tr>
                                    <td>Description :</td>
                                    <td>{complaint.incidentDescription}</td>
                                </tr>
                                <tr>
                                    <td>Additional Info</td>
                                    <td>{complaint.additionalInfo}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <h6>Inappropriate complaint*</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                    <button type="button" class="btn btn-danger">Reject Complaints</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        </div>
                    </td>
                </tr>
                </>
                )})};
        </tbody>
        </table>
    </div>
            </div>
        </div>
    </div>
</div>);
}

export default AllComplaints
