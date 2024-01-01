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
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Lodge a Complaint
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Women and Child</a></li>
                                    <li><a className="dropdown-item" href="#">Cyber</a></li>
                                    <li><a className="dropdown-item" href="#">Financial</a></li>
                                    <li><a className="dropdown-item" href="#">Others</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to={""}>View Complaints</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Incidence of Crime</a></li>
                                    <li><a className="dropdown-item" href="#">Monthly Report</a></li>
                                    <li><a className="dropdown-item" href="#">More</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Other Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Lost and Found</a></li>
                                    <li><a className="dropdown-item" href="#">Police Verification</a></li>
                                    <li><a className="dropdown-item" href="#">Feedback</a></li>
                                </ul>
                            </li>
                        </ul>
                            <ul className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    <img
                                                src={avatar}
                                                className="rounded-circle"
                                                height="50px" alt="Avatar"/>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">My Profile</a>
                                    <a className="dropdown-item" href="#">Settings</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </ul>
                            </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default navbar;
