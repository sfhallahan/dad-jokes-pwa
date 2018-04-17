import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { BottomNavContainer, HomeContainer, SearchContainer } from "containers";

export default function App(props) {
  return (
    <Fragment>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/search" component={SearchContainer} />
      <BottomNavContainer />
    </Fragment>
  );
}
