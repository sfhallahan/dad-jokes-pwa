import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import { BottomNavContainer, HomeContainer, SearchContainer } from "containers";
import { DesktopModal } from "components";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    if (window.innerWidth > 900) {
      this.setState({ isOpen: true });
    }
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/search" component={SearchContainer} />
        <BottomNavContainer />
        <DesktopModal handleClose={this.handleClose} isOpen={this.state.isOpen} />
      </Fragment>
    );
  }
}
