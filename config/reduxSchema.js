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
  favorites: {
    [jokeId]: {
      jokeId,
      jokeText,
      dateReceived,
    }
  },
  search: {
    isFetching,
    error,
    searchText,
    currentPage,
    totalPages,
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
