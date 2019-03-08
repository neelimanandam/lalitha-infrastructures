import axios from 'axios'

const getNews = () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=50a130bd41534bd199b75c084f806883`
  )
}

export { getNews }
