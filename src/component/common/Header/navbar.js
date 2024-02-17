import avatar from './images/loggedinavatar.png';
import emblem from './images/emblem.png';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';


const navbar = ()=>
{
    return (
        <>
            <div className="container-fluid bg-primary-subtle">
                <div className="row">
                    <div className="col" style={{marginTop: "5px"}}>
                        <img src={emblem} height={"70px"} alt={"Satyamev Jayatye"}/>
                        <p className="display-5 fw-bold" style={{display: "inline"}}>Crime
                            & Criminal Reporting Portal</p>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-primary-subtle navbar-toggler ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={""}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to={"/user/fileComplaint"} role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Lodge a Complaint
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to={"/user/fileComplaint"}>Women and Child</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={"/user/fileComplaint"}>Cyber</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={"/user/fileComplaint"}>Financial</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={"/user/fileComplaint"}>Others</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/user/complaintList"}>View Complaints</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to={""} role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Resources
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to={""}>Incidence of Crime</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={""}>Monthly Report</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={""}>More</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to={""} role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Other Services
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to={""}>Lost and Found</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={""}>Police Verification</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={""}>Feedback</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                            <ul className="nav-item dropdown ">
                                <NavLink className="nav-link dropdown-toggle" to={""} role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    <img
                                                src={avatar}
                                                className="rounded-circle"
                                                height="50px" alt="Avatar"/>
                                </NavLink>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <NavLink className="dropdown-item" to={"/user/profile"}>My Profile</NavLink>
                                    <NavLink className="dropdown-item" to={"/user/details"}>Edit</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to={""}>Logout</NavLink>
                                </ul>
                            </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default navbar;
