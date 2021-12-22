import Layout from '../../components/Layout'
import { getAllPosts, getPostBySlug, markdownToHtml } from '../../utils/docs'

export default function DocsContent({ allPosts, post }) {
  return (
    <Layout listSidebar={allPosts} pageName={post.title}>
      <div
        className="prose lg:prose-xl max-w-full"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  )
}

// Static props
export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  const post = getPostBySlug('README', [
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
