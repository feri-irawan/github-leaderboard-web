import Head from 'next/head'
import Navbar from './Navbar'
import Content from './Content'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout({
  children,
  pageName,
  listSidebar,
  sidebar = true
}) {
  return (
    <div className="w-full">
      <Head>
        <title>{pageName} - Github Leaderboard</title>
        <link
          rel="icon"
          href="https://github.githubassets.com/favicons/favicon.svg"
        />
        <meta
          name="twitter:image:src"
          content="https://opengraph.githubassets.com/c9c69757aedd8cb6cbc79b2bc8c35c245f25ec83ea457ed06c2b55952c53a291/feri-irawan/github-leaderboard-web"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="feri-irawan/github-leaderboard-web"
        />
        <meta
          name="twitter:description"
          content="Documentation web - Github Leaderboard API."
        />
        <meta
          property="og:image"
          content="https://opengraph.githubassets.com/c9c69757aedd8cb6cbc79b2bc8c35c245f25ec83ea457ed06c2b55952c53a291/feri-irawan/github-leaderboard-web"
        />
        <meta
          property="og:image:alt"
          content="Documentation web - Github Leaderboard API"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:site_name" content="GitHub" />
        <meta property="og:type" content="object" />
        <meta
          property="og:title"
          content="feri-irawan/github-leaderboard-web"
        />
        <meta
          property="og:url"
          content="https://github.com/feri-irawan/github-leaderboard-web"
        />
        <meta
          property="og:description"
          content="Documentation web - Github Leaderboard API."
        />
      </Head>

      <div className="w-full">
        <Navbar />

        <div className="wrapper bg-blue-50 md:grid grid-cols-6 gap-3 p-3 justify-center">
          {sidebar && (
            <div className="col-span-2">
              <Sidebar list={listSidebar} />
            </div>
          )}
          <div className={`col-span-4 ${!sidebar ? 'col-start-2' : ''}`}>
            <div className="mx-auto">
              <Content content={children} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
