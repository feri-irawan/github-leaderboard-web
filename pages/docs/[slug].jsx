import Layout from '../../components/Layout'
import { getAllPosts, getPostBySlug, markdownToHtml } from '../../utils/docs'

export default function DocsContent({ allPosts, post }) {
  return (
    <Layout listSidebar={allPosts} pageName={post.title}>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="text-right">
        <a
          href={`https://github.com/feri-irawan/github-leaderboard-web/blob/_posts/${post.slug}.md`}
          target="_blank"
        >
          Edit on Github
        </a>
      </div>
    </Layout>
  )
}

// Static props
export async function getStaticProps({ params }) {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content
      }
    }
  }
}

// Static paths
export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
