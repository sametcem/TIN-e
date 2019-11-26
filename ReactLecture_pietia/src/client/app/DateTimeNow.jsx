import React from 'react';

class DateTimeNow extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString();
        return <span>Current date and time is {dateTimeNow}.</span>
    }
}

export default DateTimeNow;