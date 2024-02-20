// import logo from './logo.svg';
import './App.css';
import { Routes,Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import UserLogin from './component/user/login/login';
import UserRegistration from './component/user/registration/registration';
import UserDetailRegistration from './component/user/detailsRegistration/detailsRegistration';
import UserFileComplaint from './component/user/fileComplaint/fileComplaint';
import UserCheckStatus from './component/user/checkStatus/checkStatus';
import UserComplaintList from './component/user/complaintList/complaintList';
import UserWithDrawComplaint from './component/user/withdrawComplaint/withDrawComplaint';
import UserUpdateMobileNo from './component/user/updateMobileNo/updateMobileNo';
import UserProfile from './component/user/profile/profile';
import UserNewComplaint from './component/user/newComplaint/newComplaint';
import PoliceLogin from './component/police/login/login';
import PoliceProfile from './component/police/profile/profile';
import PoliceComplaintList from './component/police/complaintList/complaintList';
import PoliceUpdateComplaint from './component/police/updateComplaint/updateComplaint';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainDiv from './mainDiv'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainDiv />}>
          <Route index path="/" exact element={<UserLogin/>}/>
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
          <Route path="/police/complaintList" exact element={<PoliceComplaintList/>}/>
          <Route path="/police/complaintList/update" exact element={<PoliceUpdateComplaint/>}/>
          <Route path="/police/profile" exact element={<PoliceProfile/>}/>
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
