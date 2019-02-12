import React, { Component } from 'react';

class AddPlayerForm extends Component {

    //  NOTE to self: this component is written as a controlled (statefull) component
    //          I have included commented-out statements representing how this could be written as uncontrolled (stateless), using refs
    //          uncontrolled is more streamlined and may be desireable where state/control is not required
    //          but controlled is the React "best practice" overall
    //          refs may be used in functional components as well with this modification - let playerInput = React.createRef();

    //  delete this state block - for uncontrolled only
    state = {
        value: ''
    };

    //playerInput = React.createRef();  // for uncontrolled only

    //  delete this handleValueChange function - for uncontrolled only
    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);     //  controlled version
        //this.props.addPlayer(this.playerInput.current.value); //  uncontrolled version
        //e.currentTarget.reset()   //  uncontrolled version, needed to rest input field
        this.setState({ value: '' })    //  delete this line for uncontrolled only
    }

    render() {
        console.log(this.state.value);
        return (
            <form onSubmit={this.handleSubmit}>

                {/* 
                    insert the following line after type="text" for uncontrolled only
                    
                    ref={this.playerInput}

                    delete the following lines for uncontrolled only

                    value={this.state.value}
                    onChange={this.handleValueChange}
                */}
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name" 
                />

                <input
                    type="submit"
                    value="Add Player" 
                />
            </form>
        );
    }
}

export default AddPlayerForm;