import React from 'react'

export const NewSmurfForm = () => {
    return(
        <form>
            <h1>Add Your Own Smurf to the Village</h1>
            <label>
                Name:
                <input
                    name='name'
                    type='text'
                    value=''
                    onChange=''
                />
            </label>
        </form>
    )
}