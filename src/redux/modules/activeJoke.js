import { getNewJoke } from 'utils/api'

const FETCHING_JOKE = 'FETCHING_JOKE'
const FETCHING_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS'
const FETCHING_JOKE_FAIL = 'FETCH_JOKE_FAIL'


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

function fetchingJokeSuccess(joke) {
  return {
    type: FETCHING_JOKE_SUCCESS,
    joke: {
      jokeId: joke.id,
      jokeText: joke.joke,
      dateReceived: Date.now(),
      favorited: false,
    }
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


const defaultState = {
  isFetching: true,
  error: '',
  joke: {}
}

export default function activeJoke(state = defaultState, action) {
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
        joke: action.joke,
      }
    default:
      return state

  }
}
