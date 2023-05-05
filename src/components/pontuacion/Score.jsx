import React from "react";
import "./Score.css"

class Pontacion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            null: null
        }
    }

    render() {
        if (this.props.position === 0) {
            return (
                <div id="container-de-pontuacion">
                    <img src="images/logo.svg" alt="logo" />
                    <span id="pontos">
                        <p id="score">Score</p>
                        {this.props.pontos}
                    </span>
                </div>
            )
        }
        else {
            return (
                <div id="container-de-pontuacion">
                    <img src="images/logo-bonus.svg" alt="logo" />
                    <span id="pontos">
                        <p id="score">Score</p>
                        {this.props.pontos}
                    </span>
                </div>
            )
        }
    }
}

export default Pontacion