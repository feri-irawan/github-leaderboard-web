import Layout from '../../../components/Layout'
import { Table } from '../../../components/UserLeaderboards'
import { githubLeaderboard } from '../../../utils/api'
import { useEffect, useState } from 'react'
import { CircleSpin } from '../../../components/Loading'

export default function Users() {
  const date = new Date().toLocaleDateString()

  // Users global
  const [usersGlobal, setUsersGlobal] = useState([])

  // Users by location
  const [usersByLocation, setUsersByLocation] = useState({
    location: 'Indonesia',
    users: []
  })

  // Button get users by location
  const [buttonText, setButtonText] = useState('Get')

  useEffect(async () => {
    // Jika users global kosong
    if (usersGlobal.length === 0) setUsersGlobal(await getUsers())

    // Jika users by location kosong
    if (usersByLocation.users.length === 0)
      setUsersByLocation({
        location: 'Indonesia',
        users: await getUsers('Indonesia')
      })
  }, [usersGlobal, usersByLocation])

  // Mendapatkan users
  const getUsers = async (location = undefined) => {
    let url = location
      ? `/users/repos/${location.toLowerCase()}`
      : '/users/repos'

    const users = await githubLeaderboard(url)
    return users
  }

  const getUsersByLocation = async (e) => {
    e.preventDefault()

    const location = document.getElementById('inputLocation').value
    if (!location) return

    setButtonText(<CircleSpin />)
    const users = await getUsers(location)
    setUsersByLocation({ location, users })

    setButtonText('Get')
  }

  return (
    <Layout pageName="User - Repositories Leaderboard" sidebar={false}>
      <h1>User Repositories Leaderboards</h1>
      <p>
        Daftar leaderboard pengguna-pengguna dengan jumlah repositori terbanyak
        di Github.
      </p>

      <h2>Global</h2>
      <p>
        Top {usersGlobal.length} pengguna Github dengan jumlah repositori
        terbanyak sedunia {date}.
      </p>
      <Table users={usersGlobal} fieldName="Followers" fieldKey="followers" />

      <h2>By Location</h2>
      <p>
        Top {usersByLocation.users.length} pengguna Github dengan jumlah
        repositori terbanyak di <strong>{usersByLocation.location}</strong>{' '}
        {date}.
      </p>
      <div className="flex mt-3">
        <input
          type="text"
          id="inputLocation"
          className="rounded-none outline outline-0 rounded-l-lg bg-gray-600 border border-gray-700 text-gray-200 text-lg block flex-1 px-3 pb-2 pt-1 focus:ring ring-3 focus:ring-teal-400 duration-300"
          placeholder="Location..."
        />
        <button
          onClick={getUsersByLocation}
          className="inline-flex items-center px-3 text-sm text-teal-400 bg-gray-800 rounded-r-md border border-r-0 border-gray-900 focus:ring ring-3 focus:ring-teal-400 duration-300"
        >
          {buttonText}
        </button>
      </div>
      <Table
        users={usersByLocation.users}
        fieldName="Repositories"
        fieldKey="public_repos"
      />
    </Layout>
  )
}
