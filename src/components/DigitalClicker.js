// Code DigitalClicker Component Here
import React, {Component} from 'react' 

export default class DigitalClicker extends Component {

    constructor() {
        super()

        this.state = {timesClicked: 0}
    }

    // why didn't this work?
    // handleClick = () => {
    //     this.setState(previousState => {timesClicked: previousState.timesClicked +1})
    // }

    handleClick = () => {
        this.setState(previousState => {
          return {
            timesClicked: previousState.timesClicked + 1
          }
        })
      }

    render() {
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}
