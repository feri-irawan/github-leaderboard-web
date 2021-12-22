import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const navs = [
  { name: 'Home', url: '/' },
  { name: 'Leaderboards', url: '/leaderboards' },
  { name: 'Documentation', url: '/docs' },
  { name: 'Sponsor', url: 'https://saweria.co/feriirawans' }
]

// Top navigation
export function TopNavigation() {
  const router = useRouter()
  const route = '/' + router.pathname.split('/').slice(1)[0]

  const navigation = navs.map(({ name, url }, i) => {
    const active = route === url ? 'border-b-4 border-teal-400' : ''

    return (
      <Link href={url} key={i}>
        <a className={`px-3 py-2 md:pt-4 inline-block rounded-3 hover:text-teal-400 ${active}`}>
          {name}
        </a>
      </Link>
    )
  })

  return (
    <div className="sticky text-center md:text-right whitespace-nowrap overflow-x-auto px-3">
      {navigation}
    </div>
  )
}
