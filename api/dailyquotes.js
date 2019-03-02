import axios from 'axios'

const getQuote = () => {
  return axios.get(`http://quotes.rest/qod.json?category=inspire`)
}

export { getQuote }
