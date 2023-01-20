import React from "react";

class YearsList extends React.Component {
  constructor() {
    super();
  }

  

  render() {
    return (
      <>
        <select value={this.props.selectedYear} onChange={this.props.changeSelectedYear}>
          <option value={null}></option>
          {this.props.years.map((year) => {
            return <option key={year} value={year}>{year}</option>;
          })}
        </select>
      </>
    );
  }
}

export default YearsList;
