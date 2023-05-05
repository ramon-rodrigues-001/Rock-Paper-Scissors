import React, {Fragment} from "react";
import "./Triangle.css"

class Triangle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            null: null
        }
    }

    render() {
        if (this.props.position == 0 && this.props.escolhaIA_escolhaPlayer.escolhaIA == '') {
            return (
                <Fragment>
                    <div id="container-de-triangulo">
                        <img src="images/bg-triangle.svg" alt="triangle" id="triangle"/>
                        <button id="rock" onClick={this.props.youEscolha}>
                            <img src="images/icon-rock.svg" alt="Rock" />
                        </button>
                        <button id="scissors" onClick={this.props.youEscolha}>
                            <img src="images/icon-scissors.svg" alt="Scissors" />
                        </button>
                        <button id="paper" onClick={this.props.youEscolha}>
                            <img src="images/icon-paper.svg" alt="Paper" />
                        </button>
                    </div>
    
                    {/* BTN ir para jogo bonus */}
                    <button id="proximo" onClick={this.props.mudarPosition}>Próximo</button>
                </Fragment>
            )
        }
        else {
            return (
                null
            )
        }
    }
}

export default Triangle