import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      cDate: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  increment() {
    /* eslint arrow-body-style: 0 */
    this.setState(({ counter }) => {
      return {
        counter: counter + 1,
        cDate: new Date(),
      };
    });
  }

  render() {
    const { counter, cDate } = this.state;

    return (
      <header>
        <div>Compass Webpack is doing its thing with React and ES2015</div>
        <div>{counter}</div>
        <div>Date = {cDate.toString()}</div>
      </header>
    );
  }
}
