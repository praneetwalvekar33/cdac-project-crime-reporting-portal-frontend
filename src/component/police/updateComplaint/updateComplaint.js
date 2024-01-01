import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const UpdateComplaint = () => {

    return (<>
        <br></br> <br></br>
        <div className="alert alert-info"><strong>Police side Complaints Details :-</strong></div>
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
                <h5>Victim Name </h5><br />
                <h5>Address Of Victim</h5><br />
                <h5>Contact</h5>

            </div>
            <div class="col">

                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center" }} id="Cid">12345</h5><br />
                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center" }} id="Vname">RamLaal</h5><br />
                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center" }} id="Vadd">Mumbatan</h5><br />
                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center" }} id="Vmob">12135</h5>

            </div>
            <div class="col"></div>

            <div class="col">
                <h5>Investigation Status:</h5><br />
                <h5>Crime Type</h5><br />
                <h5>Incident Place</h5>
            </div>
            <div class="col">
                <label for="Status"></label>
                <select style={{ backgroundColor: '#9ad6e6', textAlign: "center",width:"250px",height:"28px" }} id="forStatus">
                    <option value="">--status--</option>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                </select>
                
                <br /> <br /> 
                <label for="Status"></label>
                <select style={{ backgroundColor: '#9ad6e6', textAlign: "center",width:"250px",height:"28px" }} id="forStatus">
                    <option value="">--Crime Type--</option>
                    <option value="Kidnampping">Kidnapping</option>
                    <option value="Cyber_crime">Cyber Crime</option>
                    <option value="Murder">Murder</option>
                    <option value="theaft">Theaft</option>
                </select>
                <br /> <br />
                <h5 style={{ backgroundColor: '#9ad6e6', textAlign: "center",marginTop:"10px"  }} id="Cincident">Mulund</h5>
            </div>
            <div class="col"></div>
        </div>
        <hr />
        <div className="container-md" style={{ backgroundColor: "white", height: "30vh" }}>
            <h4>Remarks :-</h4>
            < textarea class="form-control" id="RemarkText" rows="8" style={{ backgroundColor: 'lightblue' }} placeholder="Investigation Report"></textarea>
            <hr />

        </div>
        <button class="btn btn-success" onClick={""} >..Update..</button>

    </>);
} 

export default UpdateComplaint;