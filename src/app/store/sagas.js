import { take, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { history } from './history'
import * as mutations from './mutations';
import {delay} from "redux-saga";
const url = process.env.NODE_ENV === 'production' ? `` : `http://localhost:7777`;

// export function* userAuthenticationSaga(){
//     while (true){
//         const {username,password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
//         try {
//             const { data } = yield axios.post(url + `/authenticate`,{username,password});
//             yield put(mutations.setState(data.state));
//             yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED, {
//                 id:"U1",
//                 token:data.token
//             }));
//             history.push(`/dashboard`);
//         } catch (e) {
//             /* catch block handles failed login */
//             yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
//         }
//     }
// }

// Mock Saga User Authentication
export function* userAuthenticationSaga(){
    while (true){
        const {username,password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
        yield delay(250);
        yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED, {
            id:"U1",
            token:"ABCD-1234"
        }));
        history.push(`/dashboard`)
    }
}

export function* userAccountCreationSaga(){
    while (true) {
        const {username, password } = yield take(mutations.REQUEST_USER_ACCOUNT_CREATION);
        try {
            const { data } = yield axios.post(url + `/user/create`, {username,password});

            yield put(mutations.setState({...data.state,session:{id:data.userID}}));
            yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));

            history.push('/dashboard');

        } catch (e) {
            console.error("Error",e);
            yield put(mutations.processAuthenticateUser(mutations.USERNAME_RESERVED));
        }
    }
}

export function* requestAddDogSaga(){
    while (true) {
        const {id, name, age, breed } = yield take(mutations.REQUEST_ADD_DOG);
        const owner= yield select(state=>state.session.id);
        const dog = {
            id,
            name,
            age,
            breed,
            owner
        };
        try {
            // yield axios.post(url + `/doggo/new`, {dog});
            yield put(mutations.addDog(id, name, age, breed, owner));
            history.push('/dashboard');
        } catch (e) {
            console.error("Error",e);
        }
    }
}

export function* requestUpdateDogSaga(){
    while (true){
        const {id, name, age, breed } = yield take(mutations.REQUEST_UPDATE_DOG);
        const owner= yield select(state=>state.session.id);
        const dog = {
            id,
            name,
            age,
            breed,
            owner
        };
        try{
            // yield axios.post(url + `/doggo/update`,{dog});
            yield put(mutations.setDogName(id, dog.name));
            yield put(mutations.setDogAge(id, dog.age));
            yield put(mutations.setDogBreed(id, dog.breed));
            history.push('/dashboard');
        }catch (e) {
            console.error("Error",e);
        }
    }

}
