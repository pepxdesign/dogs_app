import { take, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as mutations from './mutations';
import {  }from 'react-router'
import { history } from './history';


export function* userAuthenticationSaga(){
    while (true){
        const {username,password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
        yield delay(250);
        yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED, {
            id:"U1",
            token:"ABCD-1234",
        }));

        history.push(`/dashboard`)
    }
}
