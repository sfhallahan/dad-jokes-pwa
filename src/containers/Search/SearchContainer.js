import React from "react";
import { connect } from "react-redux";
import { Search } from "components";
import { fetchAndHandleSearch } from "redux/modules/search";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputText: ""
    };
  }

  handleChange = e => {
    this.setState({ searchInputText: e.target.value });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.dispatch(fetchAndHandleSearch(this.state.searchInputText));
    document.getElementById("searchInput").blur();
  };

  render() {
    return (
      <Search
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        searchInputText={this.state.searchInputText}
        jokes={this.props.jokes}
        isFetching={this.props.isFetching}
      />
    );
  }
}

function mapStateToProps({ search }) {
  return {
    isFetching: search.isFetching,
    error: search.error,
    jokes: search.jokes,
    totalJokes: search.totalJokes
  };
}

export default connect(mapStateToProps)(SearchContainer);
