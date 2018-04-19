export async function getNewJoke() {
	return {
		id: "4wciyk3EBAd",
		joke: "I got a reversible jacket for Christmas, I can't wait to see how it turns out.",
		status: 200
	};
}

export async function getSearchResults(searchText, currentPage) {
	return {
		current_page: 1,
		limit: 10,
		next_page: 1,
		previous_page: 1,
		results: [
			{
				id: "4wciyk3EBAd",
				joke: "I got a reversible jacket for Christmas, I can't wait to see how it turns out.",
				status: 200
			},
			{
				id: "4wciyk3EBAd",
				joke: "I got a reversible jacket for Christmas, I can't wait to see how it turns out.",
				status: 200
			},
			{
				id: "4wciyk3EBAd",
				joke: "I got a reversible jacket for Christmas, I can't wait to see how it turns out.",
				status: 200
			}
		],
		search_term: "Christmas",
		status: 200,
		total_jokes: 3,
		total_pages: 1
	};
}
