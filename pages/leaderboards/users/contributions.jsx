import Layout from '../../../components/Layout'
import { Table } from '../../../components/UserLeaderboards'
import { githubLeaderboard } from '../../../utils/api'
import { useEffect, useState } from 'react'
import { toCapitalize } from '../../../utils/string'
import countries from '../../../constants/countries'

export default function Users({ byLocation }) {
  const date = new Date().toLocaleDateString()

  // Global users
  // const [usersGlobal, setUsersGlobal] = useState([])

  // Users by location
  const [usersByLocation, setUsersByLocation] = useState({
    location: 'Indonesia',
    users: []
  })

  // Memuat data
  useEffect(async () => {
    // Jika users global kosong
    // if (usersGlobal.length === 0) setUsersGlobal(await getUsers())

    // Jika users by location kosong
    if (usersByLocation.users.length === 0)
      setUsersByLocation({
        location: 'Indonesia',
        users: await getUsers('Indonesia')
      })
  }, [usersByLocation]) // Tambah kan usersGlobal jika ingin menampilkan user global

  // Mendapatkan users
  const getUsers = async (location = undefined) => {
    let url = location
      ? `/users/contribs/${location.toLowerCase()}`
      : '/users/contribs'

    const users = await githubLeaderboard(url)
    return users
  }

  // Untuk Button get user by location
  const getUsersByLocation = async (e) => {
    e.preventDefault()
    const location = toCapitalize(e.target.value)
    if (!location) return

    const users = await getUsers(location)
    setUsersByLocation({ location, users })
  }

  return (
    <Layout pageName="User - Contributions Leaderboard" sidebar={false}>
      <h1>User Contibutions Leaderboard</h1>
      <p>
        Daftar leaderboard pengguna dengan jumlah kontribusi terbanyak di
        Github.
      </p>

      <h2>By Location</h2>
      <p>
        Top {usersByLocation.users.length} pengguna Github dengan jumlah
        kontribusi terbanyak di <strong>{usersByLocation.location}</strong>{' '}
        {date}.
      </p>
      <select
        onChange={getUsersByLocation}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        {countries.map((country) => (
          <option value={country} selected={country === 'indonesia'}>
            {toCapitalize(country, '_', ' ')}
          </option>
        ))}
      </select>

      <Table
        users={usersByLocation.users}
        fieldName="Contributions"
        fieldKey="commits_count"
      />
    </Layout>
  )
}
