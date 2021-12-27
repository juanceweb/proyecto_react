import React, {Component} from "react";



class ClassAddRest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: props.valorInicial ?? 0,
            stock: props.stock ?? 0, 
        };
    }

    add = () => {
        const addition = (this.state.valor < this.state.stock ) ? this.setState({valor: this.state.valor + 1}) : "stock max"
    }

    rest = () => {
        const resta = (this.state.valor > 0 ) ? this.setState({valor: this.state.valor - 1}) : "stock min"
    }

    render () {
        return (
            <div className="d-flex justify-content-center">
                <button className="btn bg-danger" onClick={this.rest}>-</button>
                <p className="m-2">{this.state.valor}</p>
                <button className="btn bg-success" onClick={this.add}>+</button>
            </div> 
        );
    }
}


export default ClassAddRest