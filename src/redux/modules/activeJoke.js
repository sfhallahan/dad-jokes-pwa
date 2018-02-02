import { getNewJoke } from 'utils/api'

const FETCHING_JOKE = 'FETCHING_JOKE'
const FETCHING_JOKE_SUCCESS = 'FETCHING_JOKE_SUCCESS'
const FETCHING_JOKE_FAIL = 'FETCHING_JOKE_FAIL'


function fetchingJoke() {
  return {
    type: FETCHING_JOKE,
  }
}

function fetchingJokeFail(error) {
  console.warn('Error fetching joke', error)
  return {
    type: FETCHING_JOKE_FAIL,
    error: 'Error fetching joke'
  }
}

function fetchingJokeSuccess(newJoke) {
  return {
    type: FETCHING_JOKE_SUCCESS,
    joke: {
      jokeId: newJoke.id,
      jokeText: newJoke.joke,
      dateReceived: Date.now(),
      favorited: false,
    },
  }
}

export function fetchNewJoke() {
  return function(dispatch, getState) {
    dispatch(fetchingJoke())
    getNewJoke()
    .then((joke) => dispatch(fetchingJokeSuccess(joke)))
    .catch((error) => dispatch(fetchingJokeFail(error)))
  }
}

const initialState = {
  isFetching: true,
  error: '',
  joke: {}
}

export default function activeJoke(state = initialState, action) {
  switch (action.type) {
    case FETCHING_JOKE:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_JOKE_FAIL:
      return {
        isFetching: false,
        error: action.error,
        joke: {}
      }
    case FETCHING_JOKE_SUCCESS:
      return {
        isFetching: false,
        error: '',
        joke: action.joke
      }
    default:
      return state
  }
}
