import { formatSize } from '../utils/number'

export function Table({ repos, fieldName, fieldKey }) {
  if (repos.length === 0) return ''
  return (
    <div className="overflow-auto">
      <table className="table-auto prose-td:align-middle prose-p:mb-0 prose-p:mt-1">
        <thead>
          <tr>
            <th>#</th>
            <th>Repo</th>
            <th>{fieldName}</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo, i) => {
            const { rank, name, description, html_url, owner } = repo

            return (
              <tr key={i}>
                <td className="font-bold text-lg">{rank}</td>
                <td className="flex items-center">
                  <img
                    className="rounded-full mr-3 my-0"
                    loading="lazy"
                    src={owner.avatar_url + '&size=80'}
                    alt={owner.login}
                    width={50}
                  />
                  <div>
                    <a
                      className="no-underline hover:underline"
                      href={html_url}
                      target="_blank"
                      title={`${name}${description ? ` - ${description}` : ''}`}
                    >
                      <strong className="font-bold">{name}</strong> <br />
                      <span className="text-gray-400">@{owner.login}</span>
                    </a>
                    {description && <p>{description}</p>}
                  </div>
                </td>
                <td>
                  {fieldKey !== 'size' ? (
                    new Intl.NumberFormat().format(repo[fieldKey])
                  ) : (
                    <span title={repo[fieldKey] + ' KB'}>
                      {formatSize(repo[fieldKey])}
                    </span>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
