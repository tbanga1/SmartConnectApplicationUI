import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tag: ["Tag1", "Tag2", "Tag3"]
  };

  renderTag() {
    if (this.state.tag.length === 0) return <p>There are no Tags!</p>;

    return (
      <ul>
        {this.state.tag.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.doIncrement = this.doIncrement.bind(this);
  }

  handleIncrement(product) {
    console.log("Increment clicked", this);
    this.setState({ count: this.state.count + 1 });
  }

  doIncrement() {
    {
      this.handleIncrement({ id: 1 });
    }
  }
  render() {
    return (
      <React.Fragment>
        <span>
          <h1 className={this.getClass()}> {this.fetchCounter()}</h1>
        </span>
        <button onClick={this.doIncrement} className="btn btn-primary">
          Increment{" "}
        </button>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-primary"
        >
          NewIncrement{" "}
        </button>

        {this.state.tag.map === 0 && "Please create new tag"}
        {this.renderTag()}
      </React.Fragment>
    );
  }

  getClass() {
    const { count } = this.state;
    let classes = "badge m-2 badge-";
    return (classes += count === 0 ? "warning" : "primary");
  }
  fetchCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
