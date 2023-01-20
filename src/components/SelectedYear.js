import React, { Component } from "react";

class SelectedYear extends Component {
  render() {
    return (
      <div id="selected-year">
        {!this.props.selectedYear
          ? "No Year Selected"
          : `Selected Year-${this.props.selectedYear}`}
      </div>
    );
  }
}

export default SelectedYear;
