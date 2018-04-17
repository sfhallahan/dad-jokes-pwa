import React from "react";
import Home from "../Home/Home";
import Card from "../Card/Card";
import { shallow } from "enzyme";
import CircularProgress from "material-ui";
import Button from "material-ui/Button";

describe("Home Component", () => {
  const fetchingJokeHomepage = shallow(
    <Home isFetching={false} joke={{}} error="" handleRefresh={jest.fn()} />
  );

  const loadedHomepage = shallow(
    <Home
      isFetching={true}
      joke={{ jokeText: "text", favorited: false, dateReceived: new Date() }}
      error=""
      handleRefresh={jest.fn()}
    />
  );

  it("should contain the site title", () => {
    expect(fetchingJokeHomepage.find("#siteTitle").text()).toBe("DadJokes");
  });

  it.skip("should display progress wheel while fetching a joke", () => {
    expect(fetchingJokeHomepage.find(CircularProgress).length).toEqual(1);
  });

  it.skip("should display the Card when joke has loaded", () => {
    expect(loadedHomepage.find(Card).length).toEqual(1);
  });

  it.skip("should call refresh function when update button is clicked", () => {
    const mockedHandleRefresh = jest.fn();
    const spyOnRefreshHomepage = shallow(
      <Home
        isFetching={true}
        joke={{ jokeText: "text", favorited: false, dateReceived: new Date() }}
        error=""
        handleRefresh={mockedHandleRefresh}
      />
    );
    spyOnRefreshHomepage.find(Button).simulate("click");
    expect(mockedHandleRefresh).toHaveBeenCalled();
  });
});
