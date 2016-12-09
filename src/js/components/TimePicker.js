// @flow
import React from 'react'

type TypeTimePickerProps = {
  time: {
    hours: number,
    minutes: number,
    seconds: number
  }
};

const TimePicker = ({ time }: TypeTimePickerProps) => (
  <form>
    <input placeholder={time.hours} className='TimePicker-hours' />
    <input placeholder={time.minutes} className='TimePicker-minutes' />
    <input placeholder={time.seconds} className='TimePicker-seconds' />
  </form>
)

export default TimePicker
