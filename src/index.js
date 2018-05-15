import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MyButton from './button.js';
import './index.css';

const DisplayResult = (props) => {
    return (
        <div>
            <div>Initial value is 10</div>
            <div>Result is : {props.value}</div>
        </div>
    );
}

class App extends React.Component {
    state = {output: "0"};

    handler = (s) => {
        console.log('in set state');
        this.setState({
            output: s
        });
    }

    render() {
        return (
            <div>
                <MyButton outputHandler={this.handler} operator="ADD" operand={5}/>
                <MyButton outputHandler={this.handler} operator="SUB" operand={10}/>
                <MyButton outputHandler={this.handler} operator="MUL" operand={15}/>
                <MyButton outputHandler={this.handler} operator="DIV" operand={20}/>
                <DisplayResult value={this.state.output}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));