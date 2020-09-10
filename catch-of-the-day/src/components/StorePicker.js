import React from "react";
import PropTypes from 'prop-types'
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  }

  goToStore = (event) => {
    // 1. stop form from submiting
    event.preventDefault();
    // 2. get text from input
    const storeName = this.myInput.current.value;
    // 3. Change the page to store/whatever-you-type
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          requred="true"
          placeholder="Store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store</button>
      </form>
    );
  }
}

export default StorePicker;
