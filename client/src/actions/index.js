//Functions or Action Creators go here. Actions take user (or server) inputs and return actions to reducers. 

//action creator
export const someFunc = () => {
console.log(something)
  //action below... i.e. what is returned.
  return {
    type: "USER-SELECTED",
    payload: user
  };
};