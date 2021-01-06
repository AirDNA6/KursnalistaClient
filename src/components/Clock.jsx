import React, { Component } from 'react'
import FormattedDate from "./FormatedDate"
import "./navigacija.css"

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className="nav-time">
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

export default Clock
