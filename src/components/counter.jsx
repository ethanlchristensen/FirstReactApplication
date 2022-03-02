import React, { Component } from "react";

class Counter extends Component {
  // method that is called when a component updates
  /*componentDidUpdate(preProps, preState) {
    console.log("prevProps: ", preProps);
    console.log("preState: ", preState);
    if (preProps.counter.value !== this.props.counter.value) {
      // maybe we make a call to a database??
    }
  }*/
  // method called before a componenet unmounts
  componentWillUnmount() {
    console.log("Counter ", this.props.counter.id, " - Unmount");
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="button btn btn-danger btn-sm m-2"
        >
          Delete
        </div>
      </div>
    );
  }
}

export default Counter;
