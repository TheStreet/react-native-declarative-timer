import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
    componentWillMount() {
        this.timeoutId = setInterval(this.props.func, this.props.interval * 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
        delete this.timeoutId;
    }

    render() {
        if (!this.props.children) {
            return null;
        }

        return (
            React.Children.only(this.props.children)
        );
    }
}

Timer.propTypes = {
    interval: PropTypes.number.isRequired,
    func: PropTypes.func.isRequired
};

Timer.defaultProps = {
    interval: 1
};


export default Timer;