export const Inital_State = {
  signedIn: true,
  userdeatils: false,
  notIntrested: false,
};

export const AUthReducer = (state, action) => {
  switch (action.type) {
    case "Signed_In": {
      console.log("im here");
      return {
        ...state,
        signedIn: true,
      };
    }
    case "not_intrested": {
      return {
        ...state,
        signedIn: false,
        notIntrested: true,
      };
    }
    case "userdetails":
      return {
        ...state,
        userdeatils: true,
      };
    default:
      return state;
  }
};
