import { buildSearchUrl, getNewJoke, getSearchResults } from "../api.js";

describe("Search URL builder", () => {
	it("builds a valid search URL given a single search word", () => {
		const searchWord = "bananas";
		const searchURL = buildSearchUrl(searchWord, "1");
		expect(searchURL).toBe(`https://icanhazdadjoke.com/search?page=1&limit=10&term=${searchWord}`);
	});

	it("builds a valid search URL given a multiple word search", () => {
		const searchURL = buildSearchUrl("multiple words", "1");
		expect(searchURL).toBe(`https://icanhazdadjoke.com/search?page=1&limit=10&term=multiple+words`);
	});
});

// skip these unless testing any API updates
describe("Jokes API", () => {
	it.skip("returns expected response when requesting a single joke", () => {
		const expectedResponseObj = {
			id: expect.any(String),
			joke: expect.any(String),
			status: expect.any(Number)
		};
		return getNewJoke().then(data => {
			expect(data).toEqual(expectedResponseObj);
		});
	});

	it.skip("returns expected response when requesting a single joke", () => {
		const expectedResponseObj = {
			current_page: expect.any(Number),
			limit: expect.any(Number),
			next_page: expect.any(Number),
			previous_page: expect.any(Number),
			results: expect.any(Array),
			search_term: expect.any(String),
			status: expect.any(Number),
			total_jokes: expect.any(Number),
			total_pages: expect.any(Number)
		};
		return getSearchResults("banana", 1).then(data => {
			expect(data).toEqual(expectedResponseObj);
		});
	});
});
