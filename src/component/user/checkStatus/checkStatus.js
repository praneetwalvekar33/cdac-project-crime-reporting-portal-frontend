import { useState, useEffect  } from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


function CheckStatus ()  {

    const location = useLocation();
    const [complaints , setComplaints] = useState({"id":1 , "policeStation": "puna thana","incidentPlace":"xyz","type":"HIT_AND_RUN","status":"ACTIVE","remark":"nzcuvaf ljyargj  luyavrldgjyu yvrhauy ouad jh" , "io":"abcd","incidentDate":"2023-12-14" });
    const URL = "http://localhost:8080/citizen/complaint";
    const complaintid = location.state && location.state.Id;

    const getComplaint = () => {
        try{
            console.log("url called ,"+URL)
            axios.get(URL+complaintid).then((response) => {
                toast.success("Status Loaded")
                setComplaints(response.data);
            })
        }catch(error){
            toast.error("Somthing went Wrong..!!")
        }
    }
    useEffect(()=>{
        getComplaint();
    },[]);
    return(
        <section className=" text-center text-lg-start d-flex justify-content-center mt-5" >
            <div className="card sm-3 " style={{width: "70%" , backgroundColor:"#5fd2ff", textAlign:"left"}}>
            <div className="row g-0 d-flex align-items-center">
                <div className="col-lg-12">
                <div className="card-body py-8 px-md-8">
                    <div className="text-center mb-3" style={{textAlign :"left"}}><h3>Complaint Status </h3></div>
                    <div className="d-flex justify-content-end mb-3">
                    <a href='/user/profile' className="link-primary"><h6>Profile</h6></a>
                    </div>
                    <hr></hr>
                    <div class="row lg - 2">
                    <div className="form-outline mt-2 mb-1" class='col'>
                    <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px", marginTop:"5px"}}>Complaint ID :</label>
                        <input type="text" id="ipt-id" className="form-control"  name='id' value={complaints.id} disabled/>
                    </div>
                    <div className="form-outline mt-2 mb-1" class='col'>
                    <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px", marginTop:"5px"}}>Complaint Status:</label>
                        <input type="text" id="ipt-status" className="form-control"  name='status' value={complaints.status} disabled/>
                    </div>
                    </div>
                    <div class="row lg - 2">
                    <div className="form-outline mt-2 mb-1" class='col'>
                        <div>
                            <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px" , marginTop:"5px"}}>Name of Investigating Officer :</label>
                            <input type="text" id="ipt-io" className="form-control"  name='io' value={complaints.io} disabled/>
                        </div>
                        <div>
                            <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px", marginTop:"5px"}}>Name of Police Station :</label>
                            <input type="text" id="ipt-policeStation" className="form-control"  name='policeStation' value={complaints.policeStation} disabled/>
                        </div>
                        <div>
                            <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px", marginTop:"5px"}}>Location of Incident :</label>
                            <input type="text" id="ipt-incidentPlace" className="form-control"  name='incidentPlace' value={complaints.incidentPlace} disabled/>
                        </div>
                        <div>
                            <label className="form-label" for="ipt-name"style={{marginBottom:"0.5px", marginTop:"5px"}} >Type Of Incident :</label>
                            <input type="text" id="ipt-type" className="form-control"  name='type' value={complaints.type} disabled/>
                        </div>
                    </div>
                    <div className="form-outline mt-2 mb-1" class='col' style={{marginTop:'25px'}}>
                        
                        <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px", marginTop:"5px"}}> <h6> Remark Given By Investigating Officer : </h6></label>
                        <textarea type="text" rows={"5"} id="ipt-remark" className="form-control"  name='remark' value={complaints.remark} disabled/>
                        
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default CheckStatus;