import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import "animate.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/meanmenu.min.css";
import "../../assets/css/menu.css";
import "../../assets/css/responsive.css";
import "../../assets/css/style.css";

import SpinnerComp from "../../AllSharedComponents/SpinnerComp";
import TopHeader from "../../AllSharedComponents/TopHeader";
import Navbar from "../../AllSharedComponents/Navbar";
import Footer from "../../AllSharedComponents/Footer";
import ArrowUp from "../../AllSharedComponents/ArrowUp";

const Root = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  //   data fetching from api
  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  }, []);
  return (
    <>
      {/* <!-- Spinner --> */}
      <SpinnerComp showSpinner={showSpinner}/>
      
      {!showSpinner && (
        <div className="animate__animated animate__slow animate__fadeIn">

          {/* <!-- Navbar Start --> */}
          <TopHeader/>

          <Navbar/>
          {/* <!-- Navbar End --> */}

          <Outlet />

          <Footer/>

          <ArrowUp/>
        </div>
      )}
    </>
  );
};

export default Root;
