import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const location = useLocation();
  const URL = "http://localhost:8080/citizen";
  
  const [citizen, setCitizen] = useState({
    aaddharNo:"",
    age: 0,
    baseEntityUserEmail: "",
    baseEntityUserRole:"",
    dob: "",
    fatherName: "",
    fname: "",
    gender: "",
    lname: "",
    mobileNo: "",
    occupation: "",
    title: "",
  });


  const [complaints , setComplaints] = useState([{"complaintsId":1 , "policeStationAddress": "puna thana","type":"HIT_AND_RUN","status":"ACTIVE"},
                                                {"complaintsId":2, "policeStationAddress": "puna thana","type":"RUN","status":"ACTIVE"}]);

  const [searchText, setSearchText] = useState("");
  const email = location.state && location.state.userEmail;
  // const userId =
  const getCitizen = () => {
    console.log(sessionStorage.getItem('token'))
    console.log(email)
    const headersdata = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      }
    }
    axios.get(URL, headersdata).then((response) => {
      console.log(response.data.data);
      setCitizen(response.data.data);
      console.log(citizen);
      console.log("done");
      toast.success("User Profile Loaded Successfully!!")
    }).catch((error)=>{
      toast.error("Error Ouccured While loding the page !")
    })
}

const getComplaints = () => {

  const headersdata = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    }
  }
  axios.get(URL + "/all-complaints",headersdata).then((response) => {
    console.log(response.data.data);
      setComplaints(response.data.data);
      toast.info("Complaints Loaded !!")
  }).catch((error)=>{
    console.log(error)
    toast.error("Unable to load Complaints..");
  })
}
const OnSearch = (args) => {
  setSearchText(args.target.value);
}

useEffect(()=>{
  console.log("..");
  try{
    getCitizen();
    getComplaints();
  }catch{
    console.log("Error occured in Profile!!")
  }
},[]);

    return (
      <section className="text-center text-lg-start d-flex justify-content-center mt-5">
  <div className="card sm-3" style={{ width: "85%" }}>
    <div className="card-header" style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
      <h4 className="card-title">Hello</h4>
      <h5>{citizen.fname} {citizen.lname}</h5>
      <h5>{citizen.baseEntityUserEmail}</h5>
      <h5>{citizen.mobileNo}</h5>
    </div>
    <div className="card-body">
  {/* <Link to={{ pathname: '/user/fileComplaint',  state: { Id : userId }  }}> */}
  <Link to={"/user/fileComplaint"}>
    <button type="button" class="btn btn-primary" style={{marginRight:"7px"}}>File a new complaint</button>
  </Link>
  {/* <Link to={{ pathname:"/user/withdrawComlaint",state: { Id : userId }}}> */}
  <Link to={"/user/withdrawComlaint"}>
    <button type="button" class="btn btn-primary" style={{marginRight:"7px"}}>Withdraw A pending complaint</button>
  </Link>
  <Link to={"#!"}>
    <button type="button" class="btn btn-primary"style={{marginRight:"7px"}}>Make a request for a new Investigating Officer</button>
  </Link>
  <Link to={"#!"}>
    <button type="button" class="btn btn-primary"style={{marginRight:"7px"}}>Feedback</button>
  </Link>
</div>
    <div style={{ margin: "20px 0" }}>
      <h3 className="text-center">List of complaints</h3>
      <div class="col">
                <div class="mb-4">
                    <label class="mb-2" > Search By Complaint Id</label>
                    <input class="form-control" type="text" name="id" value={searchText} placeholder="Complaint id" onChange={OnSearch} />
                    {/* <button class="btn btn-primary">Search</button> */}
                </div>
            </div>
      <div className="table-responsive">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Police Station Name</th>
              <th>Status</th>
              <th>Complaint type </th>
              <th>{ }</th>
              <th>{ }</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint, index) =>{
              if(searchText !== ""){
                if(complaint.id.toString().toLowerCase().includes(searchText.toLowerCase())){
                return (
                  <tr key={complaint.complaintsId}>
                    <td>{complaint.complaintsId}</td>
                    <td>{complaint.policeStationAddress}</td>
                    <td>{complaint.status}</td>
                    <td>{complaint.type}</td>
                    <td>
                    <Link to={{ pathname: '/user/checkStatus',state: { Id : complaint.id }  }}>
                    <button className="btn btn-primary" > Check Status </button>
                    </Link>
                    </td>
                    <td>
                    {/* <Link to={{ pathname: '/user/withdrawComlaint',  state: { Id : userId }  }}>
                    <button className="btn btn-danger" > Withdraw Complaint </button>
                    </Link> */}
                    </td>
                  </tr>
                )}else{
                  return null;
                }
              }else{
                return (
                  <tr key={complaint.complaintsId}>
                    <td>{complaint.complaintsId}</td>
                    <td>{complaint.policeStationAddress}</td>
                    <td>{complaint.status}</td>
                    <td>{complaint.type}</td>
                    <td>
                    <Link to={{ pathname: '/user/checkStatus',state: { Id : complaint.complaintsId }  }}>
                    <button className="btn btn-primary" > Check Status </button>
                    </Link>
                    </td>
                    <td>
                    {/* <Link to={{ pathname: '/user/withdrawComlaint',  state: { Id : userId }  }}>
                    <button className="btn btn-danger" > Withdraw Complaint </button>
                    </Link> */}
                    </td>
                  </tr>
                )
              }
              })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
  );
}

export default Profile;