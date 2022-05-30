import React from 'react';
import './boatcard.css'

const BOAT_STATUS = {
    'docked': "Docked",
    'inbound_to_harbour': "Inbound",
    'outbound_to_sea': "Outbound",
    "maintenance":"Maintenance"
};

const BoatCard = (props) =>
{
    const handleStatusChange = (event) => {
        event.preventDefault();
        props.addFunction(event, props.boat.id)
    };

    return <div className="card">
        <div className="boatContainer">
            <p><b>Name: {props.boat.name}</b></p>
            <p><b>Status: <select defaultValue={props.boat.status} onChange={handleStatusChange} name="status">
                <option value="docked">Docked</option>
                <option value="outbound_to_sea">Outbound to Sea</option>
                <option selected value="inbound_to_harbour">Inbound to Harbour</option>
                <option value="maintenance">Maintenance</option>
            </select></b></p>
        </div>
    </div>;
};

export default BoatCard;
