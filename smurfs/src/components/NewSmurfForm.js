import React, {useState} from 'react'
import {connect} from 'react-redux'
import {postCharacter} from '../actions'

const NewSmurfForm = props => {
    // const [newCharacter, setNewCharacter] = useState({
    //     name: '',
    //     age: '',
    //     height: '',
    //     id: Date.now()
    // });
    const initialState = {
        name: '',
        age: "",
        height: '',
        id: Date.now()
    }
    const [newCharacter, setNewCharacter] = useState(initialState)

    const handleChange = e => {
        setNewCharacter({...newCharacter, [e.target.name]:e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
    } 

    return(
        <form onSubmit={submitForm}>
            <h2>Add Your Own Smurf to the Village</h2>
            <label htmlFor='name'>
                Name:
                <input
                    name='name'
                    id=''
                    type='text'
                    value={newCharacter.name}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor='age'>
                Age:
                <input
                    name='age'
                    id=''
                    type='text'
                    value={newCharacter.age}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor='height'>
                Height:
                <input
                    name='height'
                    id=''
                    type='text'
                    value={newCharacter.height}
                    onChange={handleChange}
                />
            </label>
            <button type="submit" onClick={() => props.postCharacter(newCharacter)}>Add Your Smurf</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
    //   addingCharacter: state.addingCharacter
    newCharacter: state.newCharacter
    };
  };
export default connect(mapStateToProps, {postCharacter}) (NewSmurfForm)