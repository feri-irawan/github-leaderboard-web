import { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { Table } from '../../../components/TopicLeaderboards'
import { githubLeaderboard } from '../../../utils/api'

export default function Topics() {
  const date = new Date().toLocaleDateString()

  const [topics, setTopics] = useState([])

  useEffect(async () => {
    if (topics.length === 0) setTopics(await getTopics())
  }, [topics])

  // Mendapatkan topics
  const getTopics = async () => {
    const topics = await githubLeaderboard('/topics/repos')
    return topics
  }

  return (
    <Layout pageName="Topic - Repositories Leaderboard" sidebar={false}>
      <h1>Topic Repositories Leaderboard</h1>
      <p>
        Daftar {topics.length} topik dengan jumlah repositori terbanyak sedunia{' '}
        {date}
      </p>

      <h2>Global</h2>
      <Table topics={topics} fieldName="Repositories" fieldKey="repos_count" />
    </Layout>
  )
}
