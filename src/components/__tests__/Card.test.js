import React from "react";
import Card from "../Card/Card";
import { shallow } from "enzyme";

describe("Card Component", () => {
	it("renders the joke text when passed a joke", () => {
		const text = "joke joke joke";
		expect(
			shallow(<Card jokeText={text} />)
				.find("#jokeText")
				.text()
		).toBe(`"${text}"`);
	});

	it("doesn't render the error when passed a joke", () => {
		expect(shallow(<Card jokeText="joke joke joke" />).find("#error").length).toEqual(0);
	});

	it("renders an error when no joke is present", () => {
		expect(shallow(<Card error="error received" />).find("#error").length).toEqual(1);
	});

	it("renders the provided error messagewhen no joke is present", () => {
		const errorMsg = "error message text";
		expect(
			shallow(<Card error={errorMsg} />)
				.find("#error")
				.text()
		).toBe(errorMsg);
	});
});
