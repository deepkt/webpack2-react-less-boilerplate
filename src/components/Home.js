import React, { Component } from 'react';

import Navigation from './Navigation';

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
      <div className='app-container'>
        <div className='app-header'>
          <Navigation />
        </div>
        <div className='app-content'>
          <div>OK - Compass Webpack is doing its thing with React and ES2015</div>
          <div>{counter}</div>
          <div>Date = {cDate.toString()}</div>
            <div className='columns'>
            <div className='column'>
              First column
            </div>
            <div className='column'>
              Second column
            </div>
            <div className='column'>
              Third column
            </div>
            <div className='column'>
              Fourth column
            </div>
          </div>
        </div>
      </div>
    );
  }
}
