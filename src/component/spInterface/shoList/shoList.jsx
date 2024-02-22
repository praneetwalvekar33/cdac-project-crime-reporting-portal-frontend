import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SpSHO = () =>{

    const [shos, setShos] = useState([ {
        "age": 52,
        "gender": "MALE",
        "baseEntityUserEmail": "jack@gmail.com",
        "mobileNo": "1234567890",
        "designation": "ROLE_SHO",
        "joiningDate": "2015-02-21",
        "dutyStatus": "ACTIVE",
        "policeStationAddress": "home side ",
        "fname": "jack",
        "lname": "devis",
        "dob": "2000-02-21"
    }, {
        "age": 52,
        "gender": "MALE",
        "baseEntityUserEmail": "jack@gmail.com",
        "mobileNo": "1234567890",
        "designation": "ROLE_SHO",
        "joiningDate": "2015-02-21",
        "dutyStatus": "ACTIVE",
        "policeStationAddress": "home side ",
        "fname": "jack",
        "lname": "devis",
        "dob": "2000-02-21"
    }]);


    return(<>
    <section className=" text-center text-lg-start d-flex justify-content-center mt-5" >
            <div className="card mt-3" style={{width : '80%'}}>
        <div class="card-body" style={{textAlign:"center"}}>
            <h3 style={{textAlign:"center"}}>List of Station House Officers</h3>
            <hr></hr>
            <div style={{width : '100%',textAlign:"left"}}>
            <Link to={"/sp/spPage"}>
                <button type="button" class="btn btn-primary" style={{marginRight:"7px"}}>Profile</button>
            </Link>
            <Link to={"/sp/station"}>
                <button type="button" class="btn btn-primary" style={{marginRight:"7px"}}>Station List</button>
            </Link>
            <hr />
            </div>
            <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Police Station Address</th>
                        <th>Status</th>
                        <th>{ }</th>
                    </tr>
                </thead>
                <tbody>
                {shos.map((complaint, index) =>{
                                        return (<>
                                            <tr key={complaint.index}>
                                                <td>{complaint.fname}</td>
                                                <td>{complaint.lname}</td>
                                                <td>{complaint.policeStationAddress}</td>
                                                <td>{complaint.dutyStatus}</td>
                                                <td>
                                                <button className="btn btn-info sm-3" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${complaint.baseEntityUserEmail}`} aria-expanded="false" aria-controls={`collapse${complaint.baseEntityUserEmail}`}>
                                                    More
                                                </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={"5"}>
                                                <div className="collapse" id={`collapse${complaint.baseEntityUserEmail}`}>
                                                    <div class="card card-body">
                                                        <div className="row 2">
                                                            <div class = "col">
                                                        <table className="table table-responsive">
                                                            <tr>
                                                                <td>Age :</td>
                                                                <td>{complaint.age}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Joining Date :</td>
                                                                <td>{complaint.joiningDate}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mobile No. :</td>
                                                                <td>{complaint.mobileNo}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Date Of Birth :</td>
                                                                <td>{complaint.dob}</td>
                                                            </tr>
                                                        </table>
                                                        </div>
                                                        <div class = "col">
                                                        <table className="table table-responsive">
                                                            <tr>
                                                                <td>Gender :</td>
                                                                <td>{complaint.gender}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Designation :</td>
                                                                <td>{complaint.designation}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Email :</td>
                                                                <td>{complaint.baseEntityUserEmail}</td>
                                                            </tr>
                                                            <tr>
                                                                <td ></td>
                                                                <td ></td>
                                                                
                                                            </tr>
                                                        </table>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            </>)
                                    })}
                </tbody>
            </table>
            </div>
        </div>
</div>
</section>
    </>)
}
export default SpSHO