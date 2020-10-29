import { combineReducers } from 'redux';
import * as mutations from './mutations'
import { DS }from  '../../server/defaultState';

// let defaultState = {
//     session:{},
//     users:[],
//     dogs:[],
// };

let defaultState = Object.assign({}, DS); // Mocking Initial Data

export const reducer = combineReducers({
    session(userSession = defaultState.session,action){
        let {type,authenticated, session} = action;
        switch(type){
            case mutations.SET_STATE:
                return {...userSession, id: action.state.session.id };
            case mutations.REQUEST_AUTHENTICATE_USER:
                return {...userSession, authenticated:mutations.AUTHENTICATING};
            case mutations.PROCESSING_AUTHENTICATE_USER:
                return {...userSession, authenticated};
            default:
                return userSession;
        }
    },
    users:(users = defaultState.users,action)=>{
        switch (action.type) {
            case mutations.SET_STATE:
                return action.state.users;
        }
        return users;
    },
    dogs:(dogs = defaultState.dogs,action)=>{
        switch (action.type) {
            case mutations.SET_STATE:
                return action.state.dogs;
            case mutations.ADD_DOG:
                return [...dogs,{
                    id:action.id,
                    name: action.name,
                    age:action.age,
                    breed:action.breed
                }]
            case mutations.SET_DOG_NAME:
                return dogs.map(dog=>{
                    return (dog.id === action.id) ? {...dog, name:action.name} : dog;
                });
            case mutations.SET_DOG_AGE:
                return dogs.map(dog=>{
                    return (dog.id === action.id) ? {...dog, age:action.age} : dog;
                });
            case mutations.SET_DOG_BREED:
                return dogs.map(dog=>{
                    return (dog.id === action.id) ? {...dog, breed:action.breed} : dog;
                });
        }
        return dogs;
    }
});
