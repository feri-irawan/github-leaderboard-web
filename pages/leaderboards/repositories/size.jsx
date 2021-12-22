import { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { Table } from '../../../components/RepoLeaderboards'
import { githubLeaderboard } from '../../../utils/api'

export default function Repos() {
  const date = new Date().toLocaleDateString()

  // Global repos
  const [repos, setRepos] = useState([])

  // Memuat repos
  useEffect(async () => {
    // Jika repos kosong
    if (repos.length === 0) setRepos(await getRepos())
  }, [repos])

  const getRepos = async () => {
    return await githubLeaderboard('/repos/size')
  }

  return (
    <Layout pageName="Repository - Size Leaderboard" sidebar={false}>
      <h1>Repository Size Leaderboard</h1>
      <p>
        Daftar {repos.length} repositori dengan jumlah ukuran terbesar di Github{' '}
        {date}.
      </p>

      <h2>Global</h2>
      <Table repos={repos} fieldName="Stars" fieldKey="size" />
    </Layout>
  )
}
