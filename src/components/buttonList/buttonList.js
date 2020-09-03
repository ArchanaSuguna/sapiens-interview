import React from "react";
import Button from "../button/button";
import "./buttonList.style.scss";

const ButtonList = ({ details, sectionName }) => {
  return (
    <>
      <div className="button-list">
        {details.map((item, index) => {
          return <Button key={index} value={item} sectionName={sectionName} />;
        })}
      </div>
    </>
  );
};

export default ButtonList;
