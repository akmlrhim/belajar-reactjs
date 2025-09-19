import React from 'react';

class Counter extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="flex items-center">
        <h1 className="m-4">{this.state.count}</h1>
        <button
          className="bg-black text-white px-5 py-2 rounded-4xl"
          onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
