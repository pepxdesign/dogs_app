import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations'

const DogDetails = ({dog, edit, requestUpdateDog}) => {
    if (edit){
        return (<div className="card p-3 col-6">
            <form onSubmit={requestUpdateDog}>
                <label>Name:</label>
                <input type="text" placeholder="Name" name="name" defaultValue={dog.name} className="form-control"/>
                <label>Age:</label>
                <input type="text" placeholder="Age" name="age" defaultValue={dog.age} className="form-control mt-2"/>
                <label>Breed:</label>
                <input type="text" placeholder="Age" name="breed" defaultValue={dog.breed} className="form-control mt-2"/>

                <button type="submit" className="form-control mt-2 btn btn-primary">
                    Save
                </button>
            </form>
        </div>)
    } else {
        return (
            <div className="card p-3 col-6">
                <div>
                    <h3>Name: {dog.name}</h3>
                    <h3>Age: {dog.age}</h3>
                    <h3>Breed: {dog.breed}</h3>
                </div>
                <Link to="/Dashboard">
                    <button className="btn btn-primary btn-block mt-2">Back</button>
                </Link>
            </div>
        )
    }
};

function mapStateToProps(state,ownProps){
    let id = ownProps.match.params.id;
    let edit = !!ownProps.match.params.edit;
    let dog = state.dogs.find(dog=>dog.id === id);

    return { id, dog, edit }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        requestUpdateDog(e) {
            e.preventDefault();
            let inputName = e.target[`name`];
            let inputAge = e.target[`age`];
            let inputBreed = e.target[`breed`];
            let name = inputName.value || '';
            let age = inputAge.value || '';
            let breed = inputBreed.value || '';
            let id = ownProps.match.params.id;
            dispatch(mutations.requestUpdateDog(id, name, age, breed));
        }
    }
}

export const ConnectedDogDetails = connect(mapStateToProps, mapDispatchToProps)(DogDetails);
