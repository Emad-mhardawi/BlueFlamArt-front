import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducer, userRegisterReducer,userDetailsReducer,  userUpdateProfileReducer, userOrdersReducer} from './reducers/userReducers';
import {collectOrderDataReducer } from './reducers/orderReducer'
import {adminGetUsersReducer, adminDeleteUserReducer } from './reducers/adminReducer'

const reducer = combineReducers({
userLogin: userLoginReducer,
userRegister: userRegisterReducer,
collectOrderData: collectOrderDataReducer,
userDetails:userDetailsReducer,
userUpdateProfile: userUpdateProfileReducer,
userOrders:userOrdersReducer,
getAllUsers: adminGetUsersReducer,
adminDeleteUser: adminDeleteUserReducer
});


const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo')): null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage} 
};

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)))

export default store;