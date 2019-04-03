import React, { Component } from "react";
import { InputWidget } from "./widget/InputWidget";

import css from './Lesson2.module.scss';

export class Lesson2 extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        inputValue: 5,
        totalValue: 0
    };

    add() {
        this.setState(currentState => {
            const { inputValue, totalValue } = currentState;
            const result = inputValue + totalValue;
            return {
                inputValue,
                totalValue: result
            };
        });
    }

    remove() {
        this.setState(currentState => {
            const { inputValue, totalValue } = currentState;
            const result = totalValue - inputValue;
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
        const { inputValue, totalValue } = this.state;

        return (
            <div className={css.lesson1}>
                <h1>Lesson2 page</h1>
                <div className={css.codeDemo}>
                    <p className={css.output}>Total: {totalValue}</p>

                    <InputWidget
                        add={() => {
                            this.add();
                        }}
                        remove={() => {
                            this.remove();
                        }}
                        inputValue={inputValue}
                        change={(val) => {
                            this.totalValue((val))
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Lesson2;
