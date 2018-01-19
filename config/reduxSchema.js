{
  homeJoke: {
    isFetching,
    error,
    joke: {
      jokeId,
      jokeText,
      dateReceived,
      favorited: true/false
    }
  }
  search: {
    isFetching,
    error,
    searchText,
    currentPage,
    totalPages,
    jokeIds: [],
    jokes: [
      [jokeId]: {
        jokeId,
        jokeText,
        dateReceived,
      }
    ]

    }
  },

}
