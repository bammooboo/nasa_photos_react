import React from "react";
import "./ModalContents.css";

class ModalContents extends React.Component {
  render() {
    return (
      <div>
        <button className="closeModal" onClick={this.props.close}>
            <i className="far fa-times-circle" />
          </button>
        <div className="modalContents">
          <h1>{this.props.header}</h1>
          <img src={this.props.photo} alt={this.props.header} />
        </div>
      </div>
    );
  }
}

export default ModalContents;
