import React, {useState} from "react";
import "./add-boat.css"

const AddBoatForm = (props) => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addFunction(event)
    };

    return <div className='addBoatFormContainer'>
        <form className='addBoatForm' onSubmit={handleSubmit}>
            <div><label>Enter name:
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </label></div>
            <div><label>Enter status:
                <select defaultValue={'docked'} onChange={handleChange} name="addStatus">
                    <option value="docked">Docked</option>
                    <option value="outbound_to_sea">Outbound to Sea</option>
                    <option selected value="inbound_to_harbour">Inbound to Harbour</option>
                    <option value="maintenance">Maintenance</option>
                </select>
            </label>
            </div>
                <input type="submit" name="submit"/>
        </form>
    </div>;
};

export default AddBoatForm;
