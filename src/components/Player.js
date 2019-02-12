import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Icon from './Icon';
class Player extends PureComponent {

    //  NOTE to self - another method of calling propTypes with a class
    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.string.isRequired,
        id: PropTypes.number,
        index: PropTypes.number,
        isHighScore: PropTypes.bool
    }

    render() {
        const {
            name,
            id,
            removePlayer
        } = this.props
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    <Icon isHighScore={this.props.isHighScore} />
                    { name }
                </span>
    
                <Counter 
                    score = { this.props.score }
                    index = { this.props.index }
                    changeScore = { this.props.changeScore }
                />
            </div>
        );
    }
}

export default Player;