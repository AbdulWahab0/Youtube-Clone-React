import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };
  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  hanldeSubmit = (e) => {
    const { searchTerm } = this.state;
    const { onformSubmit } = this.props;
    onformSubmit(searchTerm);
    e.preventDefault();
    console.log(searchTerm);
  };
  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.hanldeSubmit}>
          <TextField fullWidth label="Search.." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}
export default SearchBar;
