import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import listLeaderboard from '../../constants/listLeaderboard'

export default function Leaderboard() {
  const { pathname } = useRouter()
  return (
    <Layout pageName="Leaderboards" sidebar={false}>
      <h1>Leaderboards</h1>
      <p>
        Selamat datang di Leaderboards, berikut ini adalah daftar demo langsung
        dari semua leaderboard yang tersedia.
      </p>

      {/* Daftar Leaderboard */}
      <div className="prose-p:mb-0">
        {listLeaderboard.map(({ title, excerpt, slug, leaderboards }, i) => (
          <div key={i}>
            <h2>{title}</h2>
            <p className="pb-3">{excerpt}</p>

            {/* Leaderboard card */}
            <div className="grid sm:grid-cols-2 gap-3">
              {leaderboards.map((lb, i) => (
                <Link key={i} href={pathname + slug + lb.slug}>
                  <a className="p-3 mb-3 rounded-md border block group cursor-pointer no-underline hover:border-teal-400 duration-300">
                    <div className="flex justify-between text-lg font-bold group-hover:text-teal-600 duration-300">
                      <span>{lb.title}</span> {lb.icon}
                    </div>
                    <p className="font-normal">{lb.excerpt}</p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
