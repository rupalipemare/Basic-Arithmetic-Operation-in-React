import React from 'react';
import './index.css';
class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {result : 10};
        this.incrementHandle = this.incrementFunc.bind(this, props);
    }

    componentDidMount() {
        this.handler = this.props.outputHandler;
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.result !== this.state.result){
            this.props.outputHandler(nextState.result);
            return false;
        }
        return true;
    }

    incrementFunc = (props) => {
        var calcResult;
        switch(this.props.operator){
            case "ADD" :
                calcResult = this.state.result + props.operand;
                break;
            case "SUB" :
                calcResult = this.state.result - props.operand;
                break;
            case "MUL" :
                calcResult = this.state.result * props.operand;
                break;
            case "DIV" :
                calcResult = this.state.result / props.operand;
                break;
            case "default" :
                calcResult = 'No operator found';
                break;
        }
        this.setState({
            result : calcResult
        });
    }

    render() {
        return (
            <button output={this.result} className="btn" onClick={this.incrementHandle}
                    operator={this.props.operator} operand={this.props.operand}>Click
                to {this.props.operator} {this.props.operand}</button>
        );
    }
}

export default MyButton;