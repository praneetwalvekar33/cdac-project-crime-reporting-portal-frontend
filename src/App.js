import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import PoliceComplaintList from './component/police/complaintList/complaintList';
import PoliceLogin from './component/police/login/login';
import PoliceProfile from './component/police/profile/profile';
import PoliceUpdateComplaint from './component/police/updateComplaint/updateComplaint';
import IoList from './component/shoInterface/ioList/ioList';
import IoToSelect from './component/shoInterface/ioToSelect/ioToSelect';
import ListAllComplaints from './component/shoInterface/listAllComplaints/listAllComplaint';
import ShoProfile from './component/shoInterface/shoProfile/shoProfile';
import SpLogin from './component/spInterface/login/login';
import SpPage from './component/spInterface/spInterface/spInterface';
import SpStation from './component/spInterface/stationList/stationList';
import SpSHO from './component/spInterface/shoList/shoList';
import UserCheckStatus from './component/user/checkStatus/checkStatus';
import UserComplaintList from './component/user/complaintList/complaintList';
import UserDetailRegistration from './component/user/detailsRegistration/detailsRegistration';
import UserFileComplaint from './component/user/fileComplaint/fileComplaint';
import UserLogin from './component/user/login/login';
import UserNewComplaint from './component/user/newComplaint/newComplaint';
import UserProfile from './component/user/profile/profile';
import UserRegistration from './component/user/registration/registration';
import UserUpdateMobileNo from './component/user/updateMobileNo/updateMobileNo';
import UserWithDrawComplaint from './component/user/withdrawComplaint/withDrawComplaint';
import MainDiv from './mainDiv';
import CommonLogin from './component/commonLogin';
import ShoLogin from './component/shoInterface/login/login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainDiv />}>
          <Route index path="/" exact element={<CommonLogin/>}/>
          <Route path="/user/login" exact element={<UserLogin/>}/>
          <Route path="/user/registration" exact element={<UserRegistration/>}/>
          <Route path="/user/detailsRegistration" exact element={<UserDetailRegistration/>}/>
          <Route path="/user/fileComplaint" exact element={<UserFileComplaint/>}/>
          <Route path="/user/checkStatus" exact element={<UserCheckStatus/>}/>
          <Route path="/user/complaintList" exact element={<UserComplaintList/>}/>
          <Route path="/user/withdrawComlaint" exact element={<UserWithDrawComplaint/>}/>
          <Route path="/user/mobileNo" exact element={<UserUpdateMobileNo/>}/>
          <Route path="/user/profile" exact element={<UserProfile/>}/>
          <Route path="/user/newComplaint" exact element={<UserNewComplaint/>}/>
          <Route path="/police/Login" exact element={<PoliceLogin/>}/>
          <Route path="/sho/Login" exact element={<ShoLogin/>}/>
          <Route path="/police/complaintList" exact element={<PoliceComplaintList/>}/>
          <Route path="/police/complaintList/update" exact element={<PoliceUpdateComplaint/>}/>
          <Route path="/police/profile" exact element={<PoliceProfile/>}/>
          <Route path="/sho/listAllComplaint" exact element={<ListAllComplaints/>}/>
          <Route path="/sho/ioList" exact element={<IoList/>}/>
          <Route path="/sho/ioToSelect" exact element={<IoToSelect/>}/>
          <Route path="/sho/shoProfile" exact element={<ShoProfile/>}/>
          <Route path="/sp/login" exact element={<SpLogin/>}/>
          <Route path="/sp/spPage" exact element={<SpPage/>}/>
          <Route path="/sp/station" exact element={<SpStation/>}/>
          <Route path="/sp/sho" exact element={<SpSHO/>}/>
          <Route path="*" exact element={UserLogin}/>
    </Route>
  ));
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <ToastContainer/>
    </div>
  
  );
}

export default App;
