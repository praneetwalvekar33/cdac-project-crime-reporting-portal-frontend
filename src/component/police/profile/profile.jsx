import { useEffect,useState } from "react";
import { getIoDetails } from "../../../services/io";
const Profile = () => {

    const [details,setDetails] = useState({
        designation: "",
        joiningDate: "",
        baseEntityUserEmail:"",
        dutyStatus:"",
        mobileNo:"",
        stationState:"",
        fname: "",
        lname: "",
        dob:""
    });

    const getDetails = async () =>{
        const response = await getIoDetails();
        setDetails(response.data);
    }
    useEffect(()=>{getDetails()},[]);
    return (
            <div className="container rounded bg-white mt-5 mb-5 " >
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span className="font-weight-bold">{`${details.fname} ${details.lname}`}</span><span class="text-black-50">{details.baseEntityUserEmail}</span><span class="text-black-50">{details.designation} </span></div>
                    </div>
                    <div className="col-md-7 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
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
                                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" class="form-control" value={details.stationState} readonly disabled></input></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Profile;