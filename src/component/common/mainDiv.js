import { Outlet } from 'react-router-dom';
import Header from './Header/navbar'
import Footer from './Footer/Footer'
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

