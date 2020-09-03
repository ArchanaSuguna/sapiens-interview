const INITIAL_STATE = {
  productsList: [],
  backupProductList: [],
  filterConditions: {},
  launchYear: null,
  successLaunch: null,
  successLanding: null
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PRODUCT_LIST":
      return {
        ...state,
        productsList: action.payload
      };

    case "BACKUP_PRODUCT_LIST":
      return {
        ...state,
        backupProductList: action.payload
      };

    case "LAUNCH_YEAR":
      return {
        ...state,
        launchYear: action.payload,
        filterConditions: {
          ...state.filterConditions,
          launch_year: action.payload
        }
      };

    case "LAUNCH_SUCCESS":
      return {
        ...state,
        successLaunch: action.payload,
        filterConditions: {
          ...state.filterConditions,
          launch_success: action.payload
        }
      };

    case "LANDING_SUCCESS":
      return {
        ...state,
        successLanding: action.payload,
        filterConditions: {
          ...state.filterConditions,
          land_success: action.payload
        }
      };

    default:
      return state;
  }
};

export default reducer;
