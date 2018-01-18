import axios from 'axios'

const hostname ='https://icanhazdadjoke.com/'

export function getNewJoke() {
  return axios.get(hostname, {headers: {Accept: 'application/json'}})
    .then((response) => {
      return response.data
    })
}
