import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 3 },
    ],
  };
  constructor() {
    super();
    console.log("App-Constructor");
  }
  // the componenet that owns a piece of the state, should
  // be the one modifying it.
  handleDelete = (counter_id) => {
    console.log("Event Handler called", counter_id);
    const counters = this.state.counters.filter((c) => c.id !== counter_id);
    console.log("counter1", this.state.counters);
    console.log("counter2", counters);
    this.setState({ counters });
    // this.setState({counters: counters}); 이름이 같아서 counters하나만 사용.
  };

  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  componentDidMount() {
    console.log("App-didmount");
  }
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log("App-rdr");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
