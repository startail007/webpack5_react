// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./index.scss";
import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Welcome from "./Welcome.jsx";
import Item from "./item.jsx";
const container = document.getElementById("app");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      list: [],
    };
  }
  change = (id) => {
    const list = this.state.list;
    const index = list.findIndex((item) => id === item.key);
    if (index != -1) {
      list[index].ok = !list[index].ok;
      list.push(...list.splice(index, 1));
      this.setState({ list: list });
    }
  };
  remove = (id) => {
    const list = this.state.list;
    const index = list.findIndex((item) => id === item.key);
    if (index != -1) {
      list.splice(index, 1);
      this.setState({ list: list });
    }
  };
  add = () => {
    if (this.state.inputText !== "") {
      this.setState({ list: [...this.state.list, { key: Date.now().toString(), text: this.state.inputText, ok: false }], inputText: "" });
    }
  };
  enter = (e) => {
    if (e.key === "Enter") {
      this.add();
    }
  };
  render() {
    const list = this.state.list
      .filter((item) => !item.ok)
      .map((item) => {
        return <Item key={item.key} id={item.key} text={item.text} onChange={this.change} onRemove={this.remove}></Item>;
      });
    const dolist = this.state.list
      .filter((item) => item.ok)
      .map((item) => {
        return <Item key={item.key} id={item.key} text={item.text} checked={true} onChange={this.change} onRemove={this.remove}></Item>;
      });
    return (
      <div className="container">
        <div className="d-flex w-100">
          <input onKeyDown={this.enter} type="text" className="flex-1" onChange={(e) => this.setState({ inputText: e.target.value })} value={this.state.inputText} />
          <button onClick={this.add} type="button" className="btn ms-1 fs-5 p-1" title="添加">
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="text-center">未做</div>
            <div>{list}</div>
          </div>
          <div className="col-6">
            <div className="text-center">已做</div>
            <div>{dolist}</div>
          </div>
        </div>
      </div>
    );
  }
}

const root = createRoot(container);
root.render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
