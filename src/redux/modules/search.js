import { getSearchResults } from 'utils/api'

const FETCHING_SEARCH = 'FETCHING_SEARCH'
const FETCHING_SEARCH_SUCCESS = 'FETCHING_SEARCH_SUCCESS'
const FETCHING_SEARCH_FAILURE = 'FETCHING_SEARCH_FAILURE'
const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'

function fetchingSearch(searchText) {
  return {
    type: FETCHING_SEARCH,
    searchText,
  }
}

function fetchingSearchFailure(error) {
  console.log(error)
  return {
    type: FETCHING_SEARCH_FAILURE,
    error: 'Error fetching results',
  }
}

function fetchingSearchSuccess(newJokes, totalJokes) {
  return {
    type: FETCHING_SEARCH_SUCCESS,
    newJokes,
    totalJokes,
  }
}

function clearSearchResults() {
  return {
    type: CLEAR_SEARCH_RESULTS,
  }
}

export function fetchAndHandleSearch(searchText) {
  return function (dispatch, getState) {
    dispatch(fetchingSearch(searchText))
    const currentPage = getState().search.currentPage

    // This is to test progress, response is too fast
    setTimeout(() => {
      getSearchResults(searchText, currentPage).then((data) => {
        console.log(data)
        const newJokes = data.results
        const totalJokes = data.total_jokes
        dispatch(fetchingSearchSuccess(newJokes, totalJokes))
      })
    }, 1000)

  }
}

const initialState = {
  isFetching: false,
  error: '',
  searchText: '',
  jokes: [],
  currentPage: 1,
  totalJokes: 0,
}


function jokes(state, action) {
  switch (action.type) {
    case FETCHING_SEARCH_SUCCESS:
      return action.newJokes
    default:
      return state
  }
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case FETCHING_SEARCH:
      return {
        ...initialState,
        searchText: action.searchText,
        isFetching: true,
      }
    case FETCHING_SEARCH_FAILURE:
      return {
        ...initialState,
        error: action.error,
      }
    case FETCHING_SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        jokes: jokes(state.jokes, action),
        totalJokes: action.totalJokes,
      }
    case CLEAR_SEARCH_RESULTS:
      return {
        initialState
      }
    default:
      return state

  }
}
