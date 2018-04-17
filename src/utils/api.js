import axios from 'axios'

const hostname ='https://icanhazdadjoke.com/'

const requestHeaders = {
headers: {
    Accept: 'application/json',
  }
}

export function getNewJoke() {
  return axios.get(hostname, requestHeaders)
              .then((response) => {
                return response.data})
}

export function getSearchResults(searchText, currentPage) {
  const searchUrl = buildSearchUrl(searchText, currentPage)
  return axios.get(searchUrl, requestHeaders)
              .then((response) => response.data)

}

function buildSearchUrl(searchText, currentPage) {
  let searchParam = searchText === "" ? '' : `&term=${searchText.split(' ').join('+')}`
  return `${hostname}search?page=${currentPage}&limit=10${searchParam}`
}
