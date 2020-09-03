import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchYearsList } from "../../utils/utils";
import FilterItem from "../../components/filterItem/filterItem";
import "./filterables.style.scss";

const Filterables = ({
  setProductList,
  backupProductList,
  filterConditions,
  setBackupProductList
}) => {
  const [yearsList, setyearsList] = useState([]);
  const [launchList] = useState(["true", "false"]);
  const [landingList] = useState(["true", "false"]);

  useEffect(() => {
    if (Object.keys(filterConditions).length <= 0) {
      fetch("https://api.spacexdata.com/v3/launches?limit=100")
        .then((response) => response.json())
        .then((data) => {
          setyearsList(fetchYearsList(data));
          setProductList(data);
          setBackupProductList(data);
        });
    } else {
      var filteredItem = backupProductList.filter((item) => {
        var condition = true;
        for (let condi in filterConditions) {
          if (String(item[condi]) !== String(filterConditions[condi])) {
            condition = false;
          }
          // if (condi === "land_success") {
          //   if (
          //     String(item.rocket.first_stage.cores[0]["land_success"]) !==
          //     String(filterConditions["land_success"])
          //   ) {
          //     condition = false;
          //   }
          // }
        }
        if (condition) return item;

        return "";
      });

      setProductList(filteredItem);
    }
  }, [filterConditions]);

  return (
    <>
      <FilterItem
        key={"first"}
        filterTitle={"Launch Year"}
        listArr={yearsList}
      />
      <FilterItem
        key={"first2"}
        filterTitle={"Successful Launch"}
        listArr={launchList}
      />
      <FilterItem
        key={"first3"}
        filterTitle={"Successful Landing"}
        listArr={landingList}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    backupProductList: state.backupProductList,
    launchYear: state.launchYear,
    successLaunch: state.successLaunch,
    successLanding: state.successLanding,
    filterConditions: state.filterConditions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProductList: (productsList) => {
      dispatch({ type: "PRODUCT_LIST", payload: productsList });
    },
    setBackupProductList: (backupProductList) => {
      dispatch({ type: "BACKUP_PRODUCT_LIST", payload: backupProductList });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filterables);
