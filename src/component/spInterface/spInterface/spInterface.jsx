import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SpInterface = () =>{


    return(<>
    <section className=" text-center text-lg-start d-flex justify-content-center mt-5" >
            <div className="card mt-3" style={{width : '80%'}}>
        <div class="card-body" style={{textAlign:"center"}}>
            <h3 style={{textAlign:"center"}}>Superintendent of Police</h3>
            <hr></hr>
            <div style={{width : '100%',textAlign:"left"}}>
            <Link to={"/sp/station"}>
                <button type="button" class="btn btn-primary" style={{marginRight:"7px"}}>Station List</button>
            </Link>
            <Link to={"/sp/sho"}>
                <button type="button" class="btn btn-primary" style={{marginRight:"7px"}}>SHO List</button>
            </Link>
            <hr />
            </div>
        </div>
</div>
</section>
    </>)
}
export default SpInterface