import React, { Component } from "react";

// the componenet that owns a piece of the state, should
// be the one modifying it.
class Counter extends Component {
  //props : 외부 입력. read only
  //state : 외부에서 접근 불가.
  state = {
    tags: ["tag1", "tag2", "tag3"],
    //   imageUrl: "https://picsum.photos/200", <img src={this.state.imageUrl} alt="" />
  };
  /*
  // handleIncrement() {
  handleIncrement = (product) => {
    console.log("Increment Clicked", this);
    console.log("Increment Clicked2", product);
    // console.log("this:" , this); => this undefined
    // ( not obj.method() => this:obj) ( function() => this:undefined)
    // constructor에서 this.handleIncrement = this.handleIncrement.bind(this); 사용해서 해결.
    // 혹은 arrow function을 사용하면됨.

    this.setState({ count: product + 1 }); //
  };
*/
  constructor() {
    super();
    console.log("constructor-Constructor");
  }
  componentDidMount() {
    console.log("constructor-didmount");
  }

  render() {
    console.log("constructor-render");
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClassName()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClassName() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : value;
  }
}

export default Counter;
// ** react jsx의 경우 컴파일되어 normal java script object가 됨. **
// return <h1>Hello World</h1>;// jsx 문법 React.createElement('h1'~~)로 컴파일됨.
// return <h1>Hellow world</h1> <button>Inc</button> ;
// jsx 문법 에러남. 구조화를 시키지 못함. (React.create)
// 따라서 <div><h1> </h1><button></button></div> 형태로 만들어야함
//그래야 React.createElement('div' ) 형태로 빌드되고 rendor함수에서 정상적으로
// element를 draw함. (React.Fragment는 자동으로 div없이 React에서 묶어줌.)

//javascript는 return 뒤에 자동으로 ;를 입력함.
//따라서 return 하고 ( )없이 줄바꿈을 return ;이 되어 에러가 날수있음.

//bootstrap
//  <span className="badge badge-primary m-2">{this.formatCount()}</span>
// <button className="btn btn-secondary btn-sm">Increment</button>

//  styles = {
//    fontSize: 100,
//   fontWeight: "bold",
// };
// <span style={this.styles} className="badge badge-primary m-2">

// <span style={ { fontSize: 30 } } className="badge badge-primary m-2">

/* example
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
    //   imageUrl: "https://picsum.photos/200", <img src={this.state.imageUrl} alt="" />
  };

render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClassName()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClassName() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : this.state.count;
  }
*/
