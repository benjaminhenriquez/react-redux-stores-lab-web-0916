export default function createStore(reducer){
  let state = []
  let listeners = []

  const getState = (reducer) => {
   return state
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
   }

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  return {
   getState: getState,
   dispatch: dispatch,
   subscribe: subscribe
  }
}


// export default function createStore(reducer){
// // your code here!
//   let state =[]
//   let listeners = [];
//
//   function getState(reducer){
//     return state;
//   };
//
//
//   function dispatch(action){
//     let state = reducer(state, action);
//     listeners.forEach(function(listener){listener()})
//   };
//
//
//   function subscribe(listener){
//     listeners.push(listener);
//   };
//
//
//   return{
//     dispatch: dispatch,
//     getState: getState,
//     subscribe: subscribe
//     }
//
// }
//


// store.dispatch({type: 'DECREMENT_COUNT'})
