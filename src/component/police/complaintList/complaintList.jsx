import { useState,useEffect } from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getIoComplaintList } from "../../../services/io";
import { useNavigate } from "react-router-dom";
function ComplaintList (){
    const complaintNo = 1000;
    
    const [details, setDetails] = useState([{
        id: 0,
        complaintCitizenFName: "",
        complaintIncidentDescription: "",
        complaintIncidentDate: "",
        complaintSuspects: "",
        complaintIncidentPlace: "",
        complaintWitness: "",
        complaintAdditionalInfo: "",
        remark: null,
        status: ""}]);
    const [detail, setDetail] = useState({
        id: 0,
        complaintCitizenFName: "",
        complaintIncidentDescription: "",
        complaintIncidentDate: "",
        complaintSuspects: "",
        complaintIncidentPlace: "",
        complaintWitness: "",
        complaintAdditionalInfo: "",
        remark: null,
        status: ""});
    const [messageid, setmessageid] = useState({ "msg": "" });
    const [compid, setcompid] = useState({ "id": "" });
    const [compDate, setcompdate] = useState({ "cDate": "" });
    const [msgdate, setmsgdate] = useState({ "msg": "" });
    const [searchText, setSearchText] = useState('');

    useEffect(async ()=>{
        const responseData = await getIoComplaintList();
        setDetails(responseData.data);
    },[]);


    const navigate = useNavigate();

    const setmsg = (msgg) => {
        var copyOfmsg = { ...messageid, msg: msgg };

        setmessageid(copyOfmsg);
    }

    const setdatemsg = (msgg) => {
        var copydatemsg = { ...msgdate, msg: msgg };

        setmsgdate(copydatemsg);
    }

    const Ontextchange = (args) => {
        var copyofcompid = { ...compid };
        copyofcompid[args.target.name] = args.target.value;
        setcompid(copyofcompid);

        setmsg("");

    }

    const OnSearch = (args) => {
        setSearchText(args.target.value);
    }

    return (<>
        <br /><br /><br />
        <div className="alert alert-info">
            <strong>
                <h5>   Check Status :- </h5>
            </strong>
        </div>

        {/* <div className="container">
            <center>
                <table className="table table-responsive">
                    <tr>
                        <td></td>
                        <td ><input type='text' value={detail.Complaint_id} name='Compid' onFocus={() => { setmsg("enter complaint id ") }}> </input></td>
                        <td>{messageid.msg}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td ><input type="text" value={detail.Date} name="compDate" onFocus={() => { setdatemsg("Enter Search date") }}> </input></td>
                        <td>{msgdate.msg}</td>
                    </tr>
                </table>
            </center>
        </div> */}
        <div className="container">
            <br></br>
            <br></br>
            <br></br>

        </div>

        <div class="row mt-6">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col">
                <div class="mb-4">
                    <label class="mb-2" > Search By Complaint Id</label>
                    <input class="form-control" type="text" name="id" value={searchText} placeholder="Complaint id" onChange={OnSearch} />
                    {/* <button class="btn btn-primary">Search</button> */}
                </div>
            </div>
            <div class="col">
                <div></div>
                <div ></div>
            </div>
            <div class="col"></div>
            <div class="col"></div>
        </div>

        {/* <div class="mb-4">
            <table className="table table-responsive">
                    <tr>
                    <td><strong>
                    Search Complaints By id :</strong></td>
                        <td>
                            <input class="form-control" placeholder="Complaint id " type="text" value={compid.id} name="id" onFocus={() => {setmsg("enter complaint id")}} onChange={Ontextchange}></input>
                        </td>
                        <td>{messageid.msg}</td>
                        <td></td>
                    </tr>
            </table>
        </div> */}

        <div className="table-responsive">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th></th>
                        <th>Complaint No.</th>
                        <th>complainant</th>
                        <th>Place</th>
                        <th>Date</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        details.map((detail) => {
                            if (searchText !== "") {
                                if (detail.Complaint_id.toString().toLowerCase().includes(searchText.toLowerCase())) {
                                    return (<>
                                        <tr key={detail.id}>
                                            <td>{"  "}</td>
                                            <td>{complaintNo+detail.id}</td>
                                            <td>{detail.complaintCitizenFName}</td>
                                            <td>{detail.complaintIncidentPlace}</td>
                                            <td>{detail.complaintIncidentDate}</td>
                                            <td></td>
                                            <td>
                                                <button className="btn btn-warning" value={detail} onClick={()=> {navigate("/police/complaintList/update",{state: {
        id: detail.id,
        complaintCitizenFName: detail.complaintCitizenFName,
        complaintIncidentDescription: detail.complaintIncidentDescription,
        complaintIncidentDate: detail.complaintIncidentDate,
        complaintSuspects: detail.complaintSuspects,
        complaintIncidentPlace: detail.complaintIncidentPlace,
        complaintWitness: detail.complaintWitness,
        complaintAdditionalInfo: detail.complaintAdditionalInfo,
        remark: detail.remark,
        status: detail.status}})}}>Select</button>
                                            </td>
                                        </tr>
                                    </>);
                                } else {
                                    return null;
                                }
                            } else {
                                return (
                                    <tr key={detail.id}>
                                        <td>{"  "}</td>
                                        <td>{complaintNo+detail.id}</td>
                                        <td>{detail.complaintCitizenFName}</td>
                                        <td>{detail.complaintIncidentPlace}</td>
                                        <td>{detail.complaintIncidentDate}</td>
                                        <td></td>
                                        <td>
                                            <button className="btn btn-warning" value={detail} onClick={()=> {navigate("/police/complaintList/update",{state: {
        id: detail.id,
        complaintCitizenFName: detail.complaintCitizenFName,
        complaintIncidentDescription: detail.complaintIncidentDescription,
        complaintIncidentDate: detail.complaintIncidentDate,
        complaintSuspects: detail.complaintSuspects,
        complaintIncidentPlace: detail.complaintIncidentPlace,
        complaintWitness: detail.complaintWitness,
        complaintAdditionalInfo: detail.complaintAdditionalInfo,
        remark: detail.remark,
        status: detail.status}})}}>Select</button>
                                        </td>
                                    </tr>)
                            }

                        })

                    }
                </tbody>
            </table>
        </div>
    </>);
} 

export default ComplaintList;