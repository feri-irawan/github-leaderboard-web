import Layout from '../components/Layout'
import { getPostBySlug, markdownToHtml } from '../utils/docs'

export default function DocsContent({ allPosts, post }) {
  return (
    <Layout sidebar={false} pageName={post.title}>
      <h1>Welcome Github Leaderboard</h1>

      <div className="flex flex-wrap prose-img:m-0 prose-img:mb-1 prose-img:mr-1 mt-7">
        <img
          alt="Visitor"
          src="https://fibadge.vercel.app/badges/visitors/feri-irawan/github-leaderboard-web?color=teal"
        />
        <a
          href="https://github.com/feri-irawan/github-leaderboard-api"
          target="_blank"
        >
          <img
            alt="Github Stars"
            src="https://img.shields.io/github/stars/feri-irawan/github-leaderboard-api?style=for-the-badge&color=yellow"
          />
        </a>
        <a
          href="https://github.com/feri-irawan/github-leaderboard-api"
          target="_blank"
        >
          <img
            alt="Github Forks"
            src="https://img.shields.io/github/forks/feri-irawan/github-leaderboard-api?style=for-the-badge"
          />
        </a>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

// Static props
export async function getStaticProps() {
  const post = getPostBySlug('index', [
    'title',
    'date',
    'slug',
    'author',
    'content'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}
