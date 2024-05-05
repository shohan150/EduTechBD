import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import "animate.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/meanmenu.min.css";
import "../../assets/css/menu.css";
import "../../assets/css/responsive.css";
import "../../assets/css/style.css";
import "../../assets/lib/animate/animate.min.css";

import ArrowUp from "../../SharedComponents/ArrowUp";
import Footer from "../../SharedComponents/Footer";
import Navbar from "../../SharedComponents/Navbar";
import SpinnerComp from "../../SharedComponents/SpinnerComp";
import TopHeader from "../../SharedComponents/TopHeader";

const Root = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  }, []);

  return (
    <>
      {/* <!-- Spinner --> */}
      <SpinnerComp showSpinner={showSpinner} />

      {!showSpinner && (
        <div className="animate__animated animate__slow animate__fadeIn">
          {/* <!-- Navbar Start --> */}
          <TopHeader />

          <Navbar />
          {/* <!-- Navbar End --> */}

          <Outlet />

          <Footer />

          <ArrowUp />
        </div>
      )}
    </>
  );
};

export default Root;
