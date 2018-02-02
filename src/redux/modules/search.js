import { getSearchResults } from 'utils/api'

const FETCHING_SEARCH = 'FETCHING_SEARCH'
const FETCHING_SEARCH_SUCCESS = 'FETCHING_SEARCH_SUCCESS'
const FETCHING_SEARCH_FAILURE = 'FETCHING_SEARCH_FAILURE'

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

export function fetchAndHandleSearch(searchText) {
  return function (dispatch, getState) {
    dispatch(fetchingSearch(searchText))
    const currentPage = getState().search.currentPage
    getSearchResults(searchText, currentPage).then((data) => {
        const newJokes = data.results
        const totalJokes = data.total_jokes
        dispatch(fetchingSearchSuccess(newJokes, totalJokes))
    }).catch((error) => dispatch(fetchingSearchFailure(error)))
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
    default:
      return state

  }
}
