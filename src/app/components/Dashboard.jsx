import { connect } from 'react-redux';
import React from 'react';
import {Link} from "react-router-dom";

const Dashboard = ({dogs, username})=> {
    document.title = `Welcome ${username}!`;
    return (
            <div className="card p-3 col-8">
                {dogs.map(dog=>(
                    <div key={dog.id} className="row">
                        <div className="title col-6">{dog.name}</div>
                        <div className="col-3"><Link to={`/doggo/${dog.id}`}>View</Link></div>
                        <div className="col-3"><Link to={`/doggo/edit/${dog.id}`}>Edit</Link></div>
                    </div>
                ))}
                <Link to="/addDoggo">
                    <button className="btn btn-primary btn-block mt-2">Add Doggo</button>
                </Link>
            </div>
)};

const mapStateToProps = ({dogs, session, users}) => {
    const username = users.map(user => {
        return (user.id === session.id) ? user.name : null;
    });
    return {dogs, username}
};


export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
