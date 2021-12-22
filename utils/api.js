import axios from 'axios'

const apiUrl = 'https://github-leaderboard-api.vercel.app'

// Fetch data from API
const githubLeaderboard = async (
  route,
  options = {
    max_result: 30
  }
) => {
  const querystring = '?' + new URLSearchParams(options)
  const url = apiUrl + route + querystring

  return await axios
    .get(url)
    .then(({ data }) => data.data)
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  githubLeaderboard
}
