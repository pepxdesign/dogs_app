import md5 from 'md5';
export const DS = {
    session:{
        id:"U1"
    },
    users:[{
        id:"U1",
        name:"jordan",
        passwordHash:md5("password123")
    }],
    dogs:[{
        name:"Max",
        id:"D1",
        age:"2",
        breed:"Golder Retriever",
        owner:"U1"
    },{
        name:"Cooper",
        id:"D2",
        age:"1",
        breed:"Dachshund",
        owner:"U1"
    },{
        name:"Daisy",
        id:"D3",
        age:"3",
        breed:"Yorkshire Terrier",
        owner:"U1"
    }]
};
