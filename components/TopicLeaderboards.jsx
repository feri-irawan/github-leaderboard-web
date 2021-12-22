export function Table({ topics, fieldName, fieldKey }) {
  if (topics.length === 0) return ''
  return (
    <div className="overflow-auto">
      <table className="table-auto prose-td:align-middle prose-p:mb-0 prose-p:mt-1">
        <thead>
          <tr>
            <th>#</th>
            <th>Topic</th>
            <th>Released</th>
            <th>{fieldName}</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, i) => {
            const {
              rank,
              name,
              display_name,
              short_description,
              created_by,
              released,
              created_at,
              html_url
            } = topic

            return (
              <tr key={i}>
                <td className="font-bold text-lg">{rank}</td>
                <td>
                  <a
                    className="no-underline hover:underline"
                    href={html_url}
                    target="_blank"
                    title={`${name}${
                      short_description ? ` - ${short_description}` : ''
                    }`}
                  >
                    <strong className="font-bold">{display_name}</strong> <br />
                    <span className="text-gray-400">#{name}</span>
                  </a>
                  {created_by && (
                    <p>
                      Created by <strong>{created_by}</strong>
                    </p>
                  )}
                  {created_at && (
                    <p>Created at {new Date(created_at).toUTCString()}</p>
                  )}
                  {short_description && <p>{short_description}</p>}
                </td>
                <td>{released ? released : '-'}</td>
                <td>{new Intl.NumberFormat().format(topic[fieldKey])}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
