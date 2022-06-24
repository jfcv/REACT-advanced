import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <div>
        <h1>
          Movie
          {this.props.showTooltip && <div>Show Tooltip</div>}
        </h1>
      </div>
    );
  }
}

export default withTooltip(Movie);
