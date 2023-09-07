// import { useState } from "react";

// const Demo1 = () => {
//   const [show, setShow] = useState(false);
//   const [count, setCount] = useState(0);

//   const batchUpdate = () => {
//     setShow(!show);
//     setCount((count) => count + 1);
//   };

//   console.log("batchUpdate", count);

//   return <button onClick={batchUpdate}>Click</button>;
// };

// export default Demo1;
import { Component, useState } from "react";
import { Button } from "react-bootstrap";
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      list: ["aaa", "bbb", "ccc"],
    };
  }
  componentDidMount() {
    this.setState((state, props) => ({ count: state.count + 1 }));
    this.setState((state, props) => ({ count: state.count + 1 }));
    this.setState((state, props) => ({ count: state.count + 1 }));
    console.log("111");
  }
  componentWillUnmount() {
    console.log("clear");
  }
  batchUpdate = async (e) => {
    await this.setState({ count: this.state.count + 1 });
    console.log("a", this.state.count);
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.count !== this.state.count) {
      console.log(this.state.count);
    }
  }
  render() {
    const list = this.state.list.map((item) => <div>{item}</div>);
    return (
      <div>
        <h1>
          Hello, {this.props.name} {this.state.count}
        </h1>
        {list}
        <Button>aaawww</Button>
        <button className="btn" onClick={this.batchUpdate}>
          Click
        </button>
      </div>
    );
  }
}
export default Welcome;
