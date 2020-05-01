import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters-Constructor");
  }
  componentDidMount() {
    console.log("Counters-didmount");
  }
  render() {
    console.log("counters render");
    const { onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            //            count={counter.value}
            //           id={counter.id}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter> // props으로 추가됨. h4-> props의 children에 포함.
        ))}
      </div>
    );
  }
}
/*
compose component가 업데이트 되어 render에서 map함수가 수행되더라도,
새롭게 component를 만드는것이 아님. ( 즉 constructor나 componentWillMount함수가 불리지 않음.)
꼭 이 방법이 필요한 경우 아래 함수를 사용해야함
-> 기본적으로 controlled 클래스로 만들어 notify를 사용하여, compose component가 
   data를 사용하도록 하여   이경우가 안나오게 하는게 대부분(?)
componentWillReceiveProps(nextProps) {
  this.state.count = this.props.counter.value;
  console.log("componentWillReceiveProps: ");
}
*/
export default Counters;
