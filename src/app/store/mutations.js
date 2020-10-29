export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
export const SET_STATE = `SET_STATE`;
export const USERNAME_RESERVED = `USERNAME_RESERVED`;
export const REQUEST_USER_ACCOUNT_CREATION = `REQUEST_USER_ACCOUNT_CREATION`;

export const REQUEST_ADD_DOG = `REQUEST_ADD_DOG`;
export const ADD_DOG = `ADD_DOG`;
export const REQUEST_UPDATE_DOG = `REQUEST_UPDATE_DOG`;
export const SET_DOG_NAME = `SET_DOG_NAME`;
export const SET_DOG_AGE = `SET_DOG_AGE`;
export const SET_DOG_BREED = `SET_DOG_BREED`;

export const requestAuthenticateUser = (username, password)=>({
    type:REQUEST_AUTHENTICATE_USER,
    username,
    password
});

export const processAuthenticateUser = (status = AUTHENTICATING, session = null)=>({
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
});



export const setState = (state = {})=>({
    type:SET_STATE,
    state
});


export const requestCreateUserAccount = (username,password)=>({
    type:REQUEST_USER_ACCOUNT_CREATION,
    username,
    password
});

export const requestAddDog = (id, name, age, breed) =>({
    type:REQUEST_ADD_DOG,
    id,
    name,
    age,
    breed,
});

export const addDog = (id, name, age, breed, owner)=>({
    type:ADD_DOG,
    id,
    name,
    age,
    breed,
    owner
});

export const requestUpdateDog = (id, name, age, breed, owner) =>({
    type:REQUEST_UPDATE_DOG,
    id,
    name,
    age,
    breed,
    owner
});

export const setDogName = (id, name)=>({
    type:SET_DOG_NAME,
    id,
    name
});

export const setDogAge = (id, age)=>({
    type:SET_DOG_AGE,
    id,
    age
});

export const setDogBreed = (id, breed)=>({
    type:SET_DOG_BREED,
    id,
    breed
});
