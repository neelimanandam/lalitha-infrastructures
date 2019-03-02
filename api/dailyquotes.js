import axios from 'axios'

const getQuote = () => {
  return axios.get(`https://quotes.rest/qod.json?category=inspire`)
}

export { getQuote }
