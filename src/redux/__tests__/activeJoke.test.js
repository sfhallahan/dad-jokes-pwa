import {
  fetchingJoke,
  fetchingJokeFail,
  fetchingJokeSuccess,
  fetchNewJoke
} from "../modules/activeJoke";

const DATE_TO_USE = new Date("2016");
const _Date = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = _Date.UTC;
global.Date.parse = _Date.parse;
global.Date.now = _Date.now;
// action creators

describe("activeJoke action creators", () => {
  it("should create an action to fetch a joke", () => {
    const expectedObj = {
      type: "FETCHING_JOKE"
    };
    expect(fetchingJoke()).toMatchObject(expectedObj);
  });

  it("should create an action to when an error is returned", () => {
    const expectedObj = {
      type: "FETCHING_JOKE_FAIL",
      error: "Error fetching joke"
    };
    expect(fetchingJokeFail("error")).toMatchObject(expectedObj);
  });

  it("should create an action to when an error is returned", () => {
    const expectedObj = {
      type: "FETCHING_JOKE_SUCCESS",
      joke: {
        jokeId: 1,
        jokeText: "joke text",
        dateReceived: Date.now(),
        favorited: false
      }
    };
    expect(fetchingJokeSuccess({ id: 1, joke: "joke text" })).toMatchObject(expectedObj);
  });
});

// reducers
describe("activeJoke reducers", () => {});
