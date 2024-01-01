// import { useState } from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function CheckStatus() {

    return (<>
        <br></br> <br></br>
        <div className="alert alert-info"><strong>Complaints Details :-</strong></div>
        <br></br> <br></br>
        <hr />
        <div></div>

        <br></br> <br></br>
        <br></br> 
        <hr />
        <div class="row mt-7">
            <div class="col"></div>
            <div class="col">

                <h5>Complaint Id</h5><br />
                <h5>Investigating Officer</h5><br />
                <h5>Name Of Police Station</h5><br />
                <h5>Police Station Code</h5>

            </div>
            <div class="col">

                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center" }}>12345</h5><br />
                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center" }}>RamLaal</h5><br />
                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center" }}>Mumbatan</h5><br />
                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center" }}>12135</h5>

            </div>
            <div class="col"></div>

            <div class="col">
                <h5>Complaint Status </h5><br />
                <h5>Crime Type</h5><br />
                <h5>Incident Place</h5>
            </div>
            <div class="col">

                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center" }}>Active</h5><br />
                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center" }}>Kidnapping</h5><br />
                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center" }}>Mulund</h5>
            </div>
            <div class="col"></div>
        </div>
        <hr />
       {/* <div className="alert alert-success" style={{marginLeft:"100px", marginRight:"100px"}}>Remarks :-</div> */}
       <div className="container-md" style={{backgroundColor:"#9ad6e6", height:"30vh"}}><h4>Remarks :-</h4></div>

    </>);
}

export default CheckStatus;