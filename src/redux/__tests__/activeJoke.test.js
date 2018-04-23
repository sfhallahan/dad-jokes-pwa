import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import activeJoke, {
	fetchingJoke,
	fetchingJokeFail,
	fetchingJokeSuccess,
	fetchNewJoke
} from "../modules/activeJoke";
jest.mock("../../utils/api.js");
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
		Date.now = jest.fn(() => 1482363367071);
		const expectedObj = {
			type: "FETCHING_JOKE_SUCCESS",
			joke: {
				jokeId: "1234",
				jokeText: "joke text",
				dateReceived: Date.now(),
				favorited: false
			}
		};
		expect(fetchingJokeSuccess({ id: "1234", joke: "joke text" })).toMatchObject(expectedObj);
	});
});

// thunks

describe("activeJoke thunks", () => {
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);

	it("dispatches correct actions when calling joke api", () => {
		Date.now = jest.fn(() => 1482363367071);

		const expectedActions = [
			{ type: "FETCHING_JOKE" },
			{
				type: "FETCHING_JOKE_SUCCESS",
				joke: {
					jokeId: expect.any(String),
					jokeText: expect.any(String),
					dateReceived: Date.now(),
					favorited: false
				}
			}
		];

		const store = mockStore({ activeJoke: [] });
		return store.dispatch(fetchNewJoke()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

// reducers
describe("activeJoke reducers", () => {
	it("should return the initial state", () => {
		const initialState = {
			isFetching: true,
			error: "",
			joke: {}
		};
		expect(activeJoke(undefined, {})).toEqual(initialState);
	});

	it("should handle FETCHING_JOKE", () => {
		const initialState = { isFetching: false, error: "", joke: {} };
		const newState = activeJoke(initialState, { type: "FETCHING_JOKE" });
		const expectedState = { isFetching: true, error: expect.any(String), joke: expect.any(Object) };

		expect(newState).toEqual(expectedState);
	});

	it("should handle FETCHING_JOKE_FAIL", () => {
		const initialState = { isFetching: true, error: "", joke: {} };
		const newState = activeJoke(initialState, { type: "FETCHING_JOKE_FAIL", error: "error" });
		const expectedState = { isFetching: false, error: "error", joke: expect.any(Object) };

		expect(newState).toEqual(expectedState);
	});

	it("should handle FETCHING_JOKE_SUCCESS", () => {
		Date.now = jest.fn(() => 1482363367071);
		const initialState = { isFetching: true, error: "", joke: {} };
		const newState = activeJoke(initialState, {
			type: "FETCHING_JOKE_SUCCESS",
			joke: { id: "1234", jokeText: "text", date: Date.now(), favorited: false }
		});
		const expectedState = {
			isFetching: false,
			error: "",
			joke: {
				id: expect.any(String),
				jokeText: expect.any(String),
				date: Date.now(),
				favorited: false
			}
		};

		expect(newState).toEqual(expectedState);
	});
});
