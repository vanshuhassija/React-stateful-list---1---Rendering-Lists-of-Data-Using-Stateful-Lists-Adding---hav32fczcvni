import React from "react";
import SelectedYear from "./SelectedYear";
import "../styles/App.css";
import YearsList from "./YearsList";
import MoviesList from "./MoviesList";

const data = {
  2018: ["Avengers 1", "Now you see me", "Fast and Furious 7"],
  2019: ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
  2020: [
    "Final Avengers Movie(Iron man dies)",
    "Now you finally used Lenskart",
    "Covid Came",
  ],
  2021: ["Covid Returns"],
  2022: ["Adventures of Saiman", "Adventures of Shaktiman"],
};



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedYear: null,
    };
  }

  changeSelectedYear = (e) => {
    this.setState({
      selectedYear: e.target.value,
    });
  };
  render() {
    return (
      <div id="main">
        <YearsList
          years={Object.keys(data)}
          selectedYear={this.state.selectedYear}
          changeSelectedYear={this.changeSelectedYear}
        />
        <SelectedYear selectedYear={this.state.selectedYear}></SelectedYear>
        <MoviesList movies={data[this.state.selectedYear]||[]}/>
      </div>
    );
  }
}

export default App;
