import {createStore} from 'redux';


const counterReducer = ( state={isLoggedIn : false}, action) => {
if(action.type === 'login'){
    return  {isLoggedIn: true}
}
if(action.type === ' logout'){
    return {isLoggedIn: false}
};
}

const store = createStore(counterReducer);



export default store;