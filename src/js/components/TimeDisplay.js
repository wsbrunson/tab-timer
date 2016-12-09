// @flow
import React from 'react'

import { formatTimeString } from '../utilities/time'

type TypeTimeDisplayProps = {
  time: number
}

const TimeDisplay = ({ time }: TypeTimeDisplayProps) => (
  <span className='TimeDisplay'>{formatTimeString(time)}</span>
)

export default TimeDisplay
