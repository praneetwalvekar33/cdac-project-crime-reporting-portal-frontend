import { Outlet } from 'react-router-dom';
import Header from './component/common/Header/navbar'
import Footer from './component/common/Footer/Footer'
const MainDiv = () => {

    return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
    );
  };

export default MainDiv;

