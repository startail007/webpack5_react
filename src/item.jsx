import { Component } from "react";

class Item extends Component {
  constructor(props) {
    // const { checked = true } = props;
    super(props);
  }
  render() {
    return (
      <div className="d-flex w-100 my-2">
        <label className="flex-1 d-flex align-items-center">
          <input onChange={() => this.props.onChange(this.props.id)} type="checkbox" className="me-2" defaultChecked={this.props.checked} />
          <span>{this.props.text}</span>
        </label>
        <button onClick={() => this.props.onRemove(this.props.id)} type="button" className="btn fs-5 p-1" title="移除">
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    );
  }
}
Item.defaultProps = {
  text: "",
  checked: false,
};
export default Item;
