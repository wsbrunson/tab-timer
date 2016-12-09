// @flow
import React, { Component } from 'react'

import TimeDisplay from './TimeDisplay'

type TypeCountdownProps = {
  startingTime: number
};

type TypeCountdownState = {
  currentTime: number
};

class Countdown extends Component {
  props: TypeCountdownProps
  state: TypeCountdownState

  constructor (props: TypeCountdownProps) {
    super(props)

    this.state = {
      currentTime: props.startingTime
    }
  }

  componentDidMount () {
    const SECOND = 1000

    const countdownInterval = window.setInterval(() => {
      const { currentTime } = this.state

      if (currentTime <= 0) {
        window.clearInterval(countdownInterval)
      } else {
        this.setState({
          currentTime: currentTime - SECOND
        })
      }
    }, SECOND)
  }

  render () {
    return <TimeDisplay time={this.state.currentTime} />
  }
}

export default Countdown
