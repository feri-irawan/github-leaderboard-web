export function Table({ users, fieldName, fieldKey }) {
  if (users.length === 0) return ''
  return (
    <table className="table-auto prose-td:align-middle">
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>{fieldName}</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => {
          const { rank, login, name, bio, avatar_url, html_url } = user
          return (
            <tr key={i}>
              <td className="font-bold text-lg">{rank}</td>
              <td className="flex items-center">
                <img
                  className="rounded-full mr-3 my-0"
                  loading="lazy"
                  src={avatar_url + '&size=80'}
                  alt={name}
                  width={50}
                />
                <a
                  className="no-underline hover:underline"
                  href={html_url}
                  target="_blank"
                  title={`${name}${bio ? ` - ${bio}` : ''}`}
                >
                  {name && <strong className="block">{name}</strong>}
                  <span className="text-gray-400">@{login}</span>
                </a>
              </td>
              <td>{new Intl.NumberFormat().format(user[fieldKey])}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
