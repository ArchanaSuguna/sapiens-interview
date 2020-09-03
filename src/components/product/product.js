import React from "react";
import "./product.style.scss";

const Product = ({ productItem }) => {
  return (
    <>
      <li>
        <img
          src="https://external-preview.redd.it/zb6j_nCkHo2R__gUFrno1Ipuma5TiTSyBcljELt6kzA.jpg?auto=webp&s=19572f5f15fd22606de80aa4b57cb9f859476a10"
          alt="Team Logo"
        />
        <div className="team-name">{productItem.mission_name}</div>

        <div className="mission-id-title">Mission ID</div>
        <ul>
          {productItem.mission_id.length
            ? productItem.mission_id.map((item) => {
                return <li>{item}</li>;
              })
            : "N/A"}
        </ul>
        <div className="launchYear">
          <span>Launch Year:</span>
          {productItem.launch_year}
        </div>
        <div className="success-launch">
          <span>Successful Launch:</span>
          {String(productItem.launch_success)}
        </div>
        <div className="success-landing">
          <span>Successful Landing:</span>
          {String(productItem.rocket.first_stage.cores[0].land_success)}
        </div>
      </li>
    </>
  );
};

export default Product;
