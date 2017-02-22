import React from 'react';

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
    interval: React.PropTypes.number.isRequired,
    func: React.PropTypes.func.isRequired
};

Timer.defaultProps = {
    interval: 1
};


export default Timer;