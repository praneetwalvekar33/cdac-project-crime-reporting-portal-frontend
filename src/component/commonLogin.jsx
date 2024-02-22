import { Link, useNavigate } from "react-router-dom";

function CommonLogin(){
    const navigate = useNavigate();
    return (
        <div className="bg-secondary-subtle" style={{width:"100vw",height:"100vh"}}>
            <Link to={"/user/login"}><button type="button" class="btn btn-primary" >Citizen Login</button></Link>
            <Link to={"/police/login"}><button type="button" class="btn btn-secondary" >Investigation Officer Login</button></Link>
            <Link to={"/sho/login"}><button type="button" class="btn btn-success">Station House Officer Login</button></Link>
            <Link to={"/sp/login"}><button type="button" class="btn btn-info" >Supredented Of Police</button></Link>
        </div>
    );
}

export default CommonLogin;