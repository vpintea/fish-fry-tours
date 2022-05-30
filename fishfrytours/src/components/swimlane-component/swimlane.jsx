import React, {useEffect, useState} from 'react';
import './swimlane.css'
import BoatCard from "../boat-card-component/boat-card";
import AddBoatForm from "../add-boat/add-boat";

const BASE_API_URL = 'http://localhost:8000' //this is where heroku url will go when deployed to cloud;
const Swimlanes = (props) => {
    const [state, setState] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [addBoat, setAddBoat] = useState(false);


    useEffect(() => {
            loadBoatData();
        },
        []
    );

    function loadBoatData() {
        setLoading(true);
        fetch(BASE_API_URL + "/api/boats/").then(
            res => {
                res.json().then( data => {
                        setState({boatData: data});
                        setLoading(false)
                    }
                )
            }
        ).catch(err => {
            setHasError(true);
            setLoading(false);
        })
    }

    function generateSwimlane(swimlaneId) {
        const boatsInLane =  state.boatData.filter(function(boat) {
            return boat.status === swimlaneId;
        });

        return <div>i
            {boatsInLane.map(boat =>
                <BoatCard addFunction={updateBoatStatus} boat={boat}/>
            )}
        </div>
    }

    function openAddBoat() {
        setAddBoat(true);
    }

    function addNewBoat(event) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: event.target.name.value,
                status: event.target.addStatus.value
            })
        };
        fetch(`${BASE_API_URL}/api/boats/`, requestOptions)
            .then(response => response.json())
            .then(data => {
                loadBoatData();
                setAddBoat(false)
            })
    }

    function updateBoatStatus(event, id) {
        const requestOptions = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                status: event.target.value
            })
        };
        fetch(`${BASE_API_URL}/api/boats/${id}/`, requestOptions)
            .then(response => response.json())
            .then(data => {
                loadBoatData();
            })
    }

    return <div className='container'>
        <div className='platformHeading'>
            <button className='addButton' onClick={openAddBoat}>Add Boat</button>
        </div>
        <div>
            {addBoat ? <AddBoatForm addFunction={addNewBoat}/> : ''}
        </div>
        <div className='boatBoard'>
            <div className='swimlane' id="docked">
                <strong>Docked</strong>
                {!loading ? generateSwimlane('docked'): ''}
            </div>
            <div className='swimlane' id="outbound">
                <strong>Outbound to Sea</strong>
                {!loading ? generateSwimlane('outbound_to_sea'): ''}
            </div>
            <div className='swimlane' id="inbound">
                <strong>Inbound to Harbour</strong>
                {!loading ? generateSwimlane('inbound_to_harbour'): ''}
            </div>
            <div className='swimlane' id="maintenance">
                <strong>Maintenance</strong>
                {!loading ? generateSwimlane('maintenance'): ''}
            </div>
        </div>
    </div>
};

export default Swimlanes;
