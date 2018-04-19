import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import jokes, {
	fetchingSearch,
	fetchingSearchFailure,
	fetchingSearchSuccess,
	fetchAndHandleSearch
} from "../modules/search";
jest.mock("../../utils/api.js");
// action creators

describe("activeJoke action creators", () => {
	it("should create an action to fetch a search", () => {
		const expectedObj = {
			type: "FETCHING_SEARCH",
			searchText: "search"
		};
		expect(fetchingSearch("search")).toMatchObject(expectedObj);
	});

	it("should create an error action when an error is returned", () => {
		const expectedObj = {
			type: "FETCHING_SEARCH_FAILURE",
			error: "Error fetching results"
		};
		expect(fetchingSearchFailure("error")).toMatchObject(expectedObj);
	});

	it("should create an action to when an error is returned", () => {
		Date.now = jest.fn(() => 1482363367071);
		const expectedObj = {
			type: "FETCHING_SEARCH_SUCCESS",
			newJokes: [],
			totalJokes: 0
		};

		expect(fetchingSearchSuccess([], 0)).toMatchObject(expectedObj);
	});
});

// thunks
describe("search thunks", () => {
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);

	it("dispatches correct actions when calling joke api with search params", () => {
		const expectedActions = [
			{ type: "FETCHING_SEARCH", searchText: "text" },
			{
				type: "FETCHING_SEARCH_SUCCESS",
				newJokes: [expect.any(Object), expect.any(Object), expect.any(Object)],
				totalJokes: 3
			}
		];

		const store = mockStore({ search: [] });
		return store.dispatch(fetchAndHandleSearch("text")).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

// reducers
describe("search reducers", () => {
	it("should return the initial state", () => {
		const initialState = {
			isFetching: false,
			error: "",
			searchText: "",
			jokes: [],
			currentPage: 1,
			totalJokes: 0
		};
		expect(jokes(undefined, {})).toEqual(initialState);
	});

	it("should handle FETCHING_SEARCH", () => {
		const initialState = {
			isFetching: false,
			error: "",
			searchText: "",
			jokes: [],
			currentPage: 1,
			totalJokes: 0
		};
		const expectedState = {
			isFetching: true,
			error: "",
			searchText: "text",
			jokes: [],
			currentPage: 1,
			totalJokes: 0
		};
		const newState = jokes(initialState, { type: "FETCHING_SEARCH", searchText: "text" });

		expect(newState).toEqual(expectedState);
	});

	it("should handle FETCHING_SEARCH_FAILURE", () => {
		const initialState = {
			isFetching: true,
			error: "",
			searchText: "",
			jokes: [],
			currentPage: 1,
			totalJokes: 0
		};
		const expectedState = {
			isFetching: false,
			error: "Error fetching results",
			searchText: "",
			jokes: [],
			currentPage: 1,
			totalJokes: 0
		};
		const newState = jokes(initialState, {
			type: "FETCHING_SEARCH_FAILURE",
			error: "Error fetching results"
		});

		expect(newState).toEqual(expectedState);
	});

	it("should handle FETCHING_SEARCH_SUCCESS", () => {
		const initialState = {
			isFetching: true,
			error: "",
			searchText: "",
			jokes: [],
			currentPage: 1,
			totalJokes: 0
		};
		const expectedState = {
			isFetching: false,
			error: "",
			searchText: "",
			jokes: [
				{
					id: "4wciyk3EBAd",
					joke: "I got a reversible jacket for Christmas, I can't wait to see how it turns out.",
					status: 200
				}
			],
			currentPage: 1,
			totalJokes: 1
		};
		const newState = jokes(initialState, {
			type: "FETCHING_SEARCH_SUCCESS",
			newJokes: [
				{
					id: "4wciyk3EBAd",
					joke: "I got a reversible jacket for Christmas, I can't wait to see how it turns out.",
					status: 200
				}
			],
			totalJokes: 1
		});

		expect(newState).toEqual(expectedState);

		expect(newState).toEqual(expectedState);
	});
});
