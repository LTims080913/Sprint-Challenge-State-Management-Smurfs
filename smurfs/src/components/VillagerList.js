import React from 'react'
import {connect} from 'react-redux'
import {getCharacters} from '../actions'
// import {mushroom} from '../images/mushroom'

const VillagerList = props => {
    return (
        <div>
          <p>who is in smurf village?</p>
          {/* <img
            src={mushroom}
            alt="smurf mushroom home"
           
          /> */}
          <button  onClick={() => props.getCharacters()}>Click to See!</button>
          {props.characters.map(character => (
            <div key={character.id}>
              <h1>Name: {character.name}</h1>
              <p>Age: {character.age}</p>
              <p>Height: {character.height}</p>
            </div>
          ))}
        </div>
      );
    };
    
    const mapStateToProps = state => {
      return {
        characters: state.characters,
        fetchingCharacters: state.fetchingCharacters,
        error: state.error
      };
    };
    
    export default connect(
      mapStateToProps,
      { getCharacters }
    )(VillagerList);
    