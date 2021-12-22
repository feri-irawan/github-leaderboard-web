import Link from 'next/link'
import { TopNavigation } from './Navigation'

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-gray-200 w-full">
      <div className="md:grid grid-cols-3">
        <div className="col-span-auto p-3 pb-3 text-center md:text-left">
          <Link href="/">
            <a className="text-lg font-bold">Github Leaderboard API</a>
          </Link>
        </div>

        <div className="col-span-2">
          <TopNavigation />
        </div>
      </div>
    </header>
  )
}
