export const initialTaskState = {
  task: []
};

export const taskReducer = (taskState, action) => {
  switch (action.type) {
    case 'GetTask': 
      return {
        ...taskState,
        task:action.payload
      }
    default:
      return taskState;
  }
};