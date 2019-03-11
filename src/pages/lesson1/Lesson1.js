import React, {Component} from 'react';
import {InputWidget} from './widget/InputWidget';

export class Lesson1 extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        inputValue: 5,
        totalValue: 0
    };

    add() {
        this.setState((currentState) => {
            const {inputValue, totalValue} = currentState;
            const result                   = inputValue + totalValue;
            return {
                inputValue,
                totalValue: result
            };
        });
    }

    remove() {
        this.setState((currentState) => {
            const {inputValue, totalValue} = currentState;
            const result                   = totalValue - inputValue;
            return {
                inputValue,
                totalValue: result
            };
        });
    }

    totalValue(value) {
        this.setState({
                          inputValue: value
                      });
    }

    render() {
        const {inputValue, totalValue} = this.state;

        return (
            <div>
                <h1>Lesson1 page</h1>
                <div>
                    <p>Total: {totalValue}</p>

                    <InputWidget
                        add={() => {
                            this.add();
                        }}
                        remove={() => {
                            this.remove();
                        }}
                        inputValue={inputValue}
                    />
                </div>
            </div>
        )
    }
}

export default Lesson1;
