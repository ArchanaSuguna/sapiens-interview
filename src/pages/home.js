import React from "react";
import Sidebar from "../containers/sidebar/sidebar";
import ContentArea from "../containers/contentArea/contentArea";
import "./home.style.scss";

const Home = () => {
  return (
    <>
      <h1>SpacEx Launch Program</h1>
      <div className="main-container">
        <div className="side-bar">
          <h3>Filter</h3>
          <Sidebar />
        </div>
        <div className="content-area">
          <ContentArea />
        </div>
      </div>
    </>
  );
};

export default Home;
