export const initialState = {
  user: null
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'userAuth': 
      return {
        ...state,
        user:action.payload
      }
    case 'Register':
      return {
        ...state,
        user:action.payload
      }
    default:
      return state;
  }
};