export const initialState = {
  user: null,
  tareas: []
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
    case 'Update':
      return {
        ...state,
        tareas:action.payload
      }
    default:
      return state;
  }
};