import Link from 'next/link'

// Sidebar
export default function Sidebar({ list }) {
  const ignorePosts = ['README', 'index']

  const listHtml = list
    .filter(({ slug }) => !ignorePosts.includes(slug))
    .map(({ title, slug }, i) => {
      return (
        <div className="py-1 px-3" key={i}>
          <Link href={`/docs/${slug}`}>
            <a className="hover:text-teal-700 font-semibold">{title}</a>
          </Link>
        </div>
      )
    })

  return (
    <div className="border bg-white md:border-gray-300 rounded-md p-3 mb-3">
      <div className="text-lg font-bold pl-3">Menu</div>
      {listHtml}
    </div>
  )
}
