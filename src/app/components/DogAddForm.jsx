import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import * as mutations from '../store/mutations';

const DogAddForm = ({addDog}) => {
    return(<div className="card p-3 col-6">
        <form onSubmit={addDog}>
            <label>Name:</label>
            <input type="text" placeholder="enter name" name="name" className="form-control mt-2"/>
            <label>Age:</label>
            <input type="text" placeholder="enter age" name="age" className="form-control mt-2"/>
            <label>Breed:</label>
            <input type="text" placeholder="enter breed" name="breed" className="form-control mt-2"/>
            <button type="submit" className="form-control mt-2 btn btn-primary">Add</button>
        </form>
    </div>)
};

function mapStateToProps(state){
    let owner = state.session.id;
    return { owner }
}

function mapDispatchToProps(dispatch){
    return {
        addDog(e) {
            e.preventDefault();
            let inputName = e.target[`name`];
            let inputAge = e.target[`age`];
            let inputBreed = e.target[`breed`];
            let name = inputName.value || '';
            let age = inputAge.value || '';
            let breed = inputBreed.value || '';
            let id = `D${uuid()}`;

            dispatch(mutations.requestAddDog(id, name, age, breed));
        }
    }
}

export const ConnectedDogAddForm = connect(mapStateToProps, mapDispatchToProps)(DogAddForm);
