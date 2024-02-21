import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const IoList = ()=>{
    const URL = "http://localhost:8080/SHO"
    const [listIos,setlistIos]= useState([{
        "id": 1,
        "designation": "string",
        "joiningDate": "2024-02-21",
        "numberOfCases": 0,
        "noOfCasesSolved": 0,
        "fname": "lakhan",
        "lname": "string"
    },{
        "id": 2,
        "designation": "string",
        "joiningDate": "2024-02-21",
        "numberOfCases": 0,
        "noOfCasesSolved": 0,
        "fname": "ram",
        "lname": "string"
    }]);
    const getAllIos=()=>{
        const headersData={
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            }
        }
        let url = URL+"/police-station/all-IO"
        axios.get(url,headersData).then((response)=>{
            console.log(response.data);
            setlistIos(response.data.data);
            toast.success("All complaints Loaded sucessfully")
        }).catch((error)=>{
            console.log(error);
            toast.error("Unable to load complaints");
        });
    }
    useEffect(()=>{
            getAllIos();
    },[]);


    return(<div className="container">
    {/* <section className=" text-center text-lg-start d-flex justify-content-center mt-5"> <section/> */}

<div className="card sm-3 mt-3 " style={{width: "85%"}}>
<div className="row g-0 d-flex align-items-center"></div>
<div className="col-lg-12">
    <div className="card-body py-8 px-md-8">
    <div className="text-center mb-3"><h5>---List Of Investigation Officers---</h5></div>
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
    <th>First Name</th>
    <th>Last Name</th>
    <th>Total Cases</th>
    <th>{ }</th>
    </tr>
</thead>
<tbody>
    {listIos.map((list, index) =>{
    
        return (<>
        <tr key={list.id}>
            <td>{list.id}</td>
            <td>{list.fname}</td>
            <td>{list.lname}</td>
            <td>{list.numberOfCases}</td>
            <td>
            <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${list.id}`} aria-expanded="false" aria-controls={`collapse${list.id}`}>
                                            More Info
                                            </button>
            </td>
        </tr>
        <tr>
            <td colSpan={"5"}>
            <div className="collapse" id={`collapse${list.id}`} style={{list:'left'}}>
                <div class="card card-body">
                    <table className="table table-responsive">
                        <tr>
                            <td>Total Cases Solved :</td>
                            <td>{list.noOfCasesSolved}</td>
                        </tr>
                        <tr>
                            <td>Designation</td>
                            <td>{list.designation}</td>
                        </tr>
                        <tr>
                            <td>Joining Date </td>
                            <td>{list.joiningDate}</td>
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

export default IoList;