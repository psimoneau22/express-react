import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

export default class App extends Component {
    state = {
        data: 1,
        values: null,
    }

    static propTypes = {
        test: PropTypes.string.isRequired,
    }

    async componentDidMount() {
        const response = await fetch("api/values");
        const values = await response.json();
        this.setState({ values });
    }

    handleIncrement = () => {
        this.setState(({ data }) => ({
            data: data + 1
        }));
    }

    render() {
        const { data } = this.state;

        return (
            <>
                <button onClick={this.handleIncrement}>increment</button>
                <pre>
                    {JSON.stringify(this.state)}
                </pre>
            </>
        )
    }
}