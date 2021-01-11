import React, { Component } from 'react'
import FormattedDate from "./FormatedDate"
import "../css/navigacija.css"

export class Clock extends Component {
    constructor(props) {
        super(props);
        let d = new Date()
        this.state = {
            day: d.getDay(),
            month: d.getMonth(),
            date: d.getDate(),
            year: d.getFullYear(),
            time: new Date()
        }

        this.countingSecond = this.countingSecond.bind(this)
    }

    countingSecond() {
        let d = new Date()
        this.setState({
            day: d.getDay(),
            month: d.getMonth(),
            date: d.getDate(),
            year: d.getFullYear(),
            time: new Date()
        })
    }

    componentWillMount() {
        setInterval(this.countingSecond, 1000)
    }

    render() {
        const months = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Novembar", "Decembar"]
        const days = ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
        return (
            <div>
                <FormattedDate
                    day={days[this.state.day]}
                    month={months[this.state.month]}
                    year={this.state.year}
                    date={this.state.date}
                    time={this.state.time}>

                </FormattedDate>
            </div>
        );
    }
}

export default Clock
