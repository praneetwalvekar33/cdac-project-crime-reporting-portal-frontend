import { useState, useEffect  } from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { getComplaint, updateComplaintByIo } from "../../../services/io";


function UpdateComplaint()  {
    const complaintNo = 1000;
    const location = useLocation();
    const [complaints , setComplaints] = useState({
        id: 0,
        complaintCitizenFName: "",
        complaintIncidentDescription: "",
        complaintIncidentDate: "",
        complaintSuspects: "",
        complaintIncidentPlace: "",
        complaintWitness: "",
        complaintAdditionalInfo: "",
        remark: "",
        status: ""});
    const complaint = location.state;
    
    const complaintUpdate = async()=>{
      const response = await updateComplaintByIo(complaints.id,{remark:complaints.remark,statusEnum:complaints.status});
      if(response.status === 'SUCCESS'){
        const responseData = await getComplaint(complaints.id);
        if(response.status === 'SUCCESS'){
            console.log(responseData.data);
            setComplaints(responseData.data);
        }
        toast.success("Complaint updated successfully")
      }else{
        toast.error("Something went wrong");
      }
        
    }
    
    const handleChange = (e)=>{
        const optName = e.target.name;
        setComplaints({...complaints, status: e.target.value});
        
    }

    const OnTextChange = (args) => {
        console.log(args);
        var copyofinfo = {...complaints};
        copyofinfo[args.target.name] = args.target.value;
        console.log(args.target.value)
        setComplaints(copyofinfo);
        console.log(complaints.remark)
      };

    useEffect(()=>{
        console.log(complaint);
        setComplaints(complaint);
    },[]);
    return(
        <section className=" text-center text-lg-start d-flex justify-content-center mt-5" >
            <div className="card sm-3 " style={{width: "70%" , backgroundColor:"#5fd2ff", textAlign:"left"}}>
            <div className="row g-0 d-flex align-items-center">
                <div className="col-lg-12">
                <div className="card-body py-8 px-md-8">
                    <div className="text-center mb-3" style={{textAlign :"left"}}><h3>Complaint Status </h3></div>
                    <div className="d-flex justify-content-end mb-3">
                    <a href='/police/profile' className="link-primary"><h6>Profile</h6></a>
                    </div>
                    <hr></hr>
                    <div class="row lg - 2">
                    <div className="form-outline mt-2 mb-1" class='col'>
                    <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px", marginTop:"5px"}}>Complaint ID :</label>
                        <input type="text" id="ipt-id" className="form-control"  name='id' value={complaintNo+complaints.id} disabled/>
                    </div>
                    <div className="form-outline mt-2 mb-1" class='col'>
                    <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px", marginTop:"5px"}}>Complaint Status:</label>
                        <select  id="ipt-status" className="form-control"  name='status' value={complaints.status} onChange={handleChange}>
                            <option value="NO_UPDATE">Select</option>
                            <option value="CHARGESHEET_FILED">Chargesheet Filed</option>
                            <option value="REJECTED">Reject</option>
                            <option value="CLOSED">Close</option>
                            <option value="ONGOING">Ongoing</option>
                        </select>
                    </div>
                    </div>
                    <div class="row lg - 2">
                    <div className="form-outline mt-2 mb-1" class='col'>
                        <div>
                            <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px" , marginTop:"5px"}}>Complainant:</label>
                            <input type="text" id="ipt-io" className="form-control"  name='io' value={complaints.complaintCitizenFName} disabled/>
                        </div>
                        <div>
                            <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px", marginTop:"5px"}}>Incident Date :</label>
                            <input type="text" id="ipt-policeStation" className="form-control"  name='complaintIncidentPlace' value={complaints.complaintIncidentDate} disabled/>
                        </div>
                        <div>
                            <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px", marginTop:"5px"}}>Location of Incident :</label>
                            <input type="text" id="ipt-incidentPlace" className="form-control"  name='incidentPlace' value={complaints.complaintIncidentPlace} disabled/>
                        </div>
                        <div>
                            <label className="form-label" for="ipt-name"style={{marginBottom:"0.5px", marginTop:"5px"}} >Witness:</label>
                            <input type="text" id="ipt-type" className="form-control"  name='witness' value={complaints.complaintWitness} disabled/>
                        </div>
                    </div>
                    <div className="form-outline mt-2 mb-4" class='col' style={{marginTop:'25px'}}>
 
                            <label className="form-label" for="ipt-name" style={{marginBottom:"0.5px", marginTop:"5px"}}> <h6> Remark Given By Investigating Officer : </h6></label>
                            <textarea type="text" rows={"5"} id="ipt-remark" className="form-control"  name='remark' value={complaints.remark} onChange={OnTextChange}/>
                            
                        </div>
                    </div>
                    <button className="btn btn-warning" value="Update" onClick={()=> {complaintUpdate()}}>Update Complaint</button>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default UpdateComplaint;