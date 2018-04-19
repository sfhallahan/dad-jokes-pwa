import React from "react";
import Search from "../Search/Search";
import Card from "../Card/Card";
import { shallow, mount } from "enzyme";
import { CircularProgress } from "material-ui";

describe("Search Component", () => {
	const initialSearchLoad = shallow(
		<Search
			isFetching={false}
			searchInputText=""
			jokes={[]}
			onChange={jest.fn()}
			onSearch={jest.fn()}
		/>
	);

	it("should contain the site title", () => {
		expect(initialSearchLoad.find("#siteTitle").text()).toBe("DadJokes");
	});

	it("show a <<no results>> message when there are no results", () => {
		expect(initialSearchLoad.find("#error").text()).toBe("No results to display");
	});

	it("update the search text when text is entered", () => {
		const event = { target: { value: "newtext" } };
		const mockOnChange = jest.fn();
		const spyOnChangeSearch = shallow(
			<Search
				isFetching={false}
				searchInputText=""
				jokes={[]}
				onChange={mockOnChange}
				onSearch={jest.fn()}
			/>
		);
		spyOnChangeSearch.find("#searchInput").simulate("change", event);
		expect(mockOnChange).toHaveBeenCalledWith(event);
	});

	it("call the search function when form is submitted", () => {
		const event = { target: { value: "newtext" } };
		const mockOnSearch = jest.fn();
		const spyOnSubmitSearch = shallow(
			<Search
				isFetching={false}
				searchInputText=""
				jokes={[]}
				onChange={jest.fn()}
				onSearch={mockOnSearch}
			/>
		);
		spyOnSubmitSearch.find("form").simulate("submit", event);
		expect(mockOnSearch).toHaveBeenCalledWith(event);
	});

	it("should show circular progress while fetching", () => {
		const fetchingSearch = shallow(
			<Search
				isFetching={true}
				searchInputText=""
				jokes={[]}
				onChange={jest.fn()}
				onSearch={jest.fn()}
			/>
		);
		expect(fetchingSearch.find(CircularProgress).length).toEqual(1);
	});

	it("display all the returned jokes", () => {
		const sampleJokes = [{ id: 1, joke: "joke 1" }, { id: 1, joke: "joke 1" }];
		const searchWithResults = shallow(
			<Search
				isFetching={false}
				searchInputText=""
				jokes={sampleJokes}
				onChange={jest.fn()}
				onSearch={jest.fn()}
			/>
		);

		expect(searchWithResults.find(Card).length).toEqual(2);
	});

	it.skip("should focus on the input box when the form is clicked", () => {
		const spyOnClickSearch = mount(
			<Search
				isFetching={false}
				searchInputText=""
				jokes={[]}
				onChange={jest.fn()}
				onSearch={jest.fn()}
			/>
		);
		spyOnClickSearch.find("form").simulate("click");
		expect(spyOnClickSearch.find("searchInput")).toBe(document.activeElement);
	});
});
