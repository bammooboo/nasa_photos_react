import React from "react";
import Backdrop from "../../Backdrop/Backdrop";
import "./Modal.css";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <div>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="modal"
          style={{
            display: this.props.show ? "block" : "none",
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
