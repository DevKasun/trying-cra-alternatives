import { createFileRoute } from '@tanstack/react-router'
import ImportedPostData from '../db/posts.json'
import Post from '@/components/post'

export const Route = createFileRoute('/')({
  component: App,
})

interface PostDataProps {
  id: number
  title: string
  content: string
  created_at: string
}

function App() {
  const posts = ImportedPostData as Array<PostDataProps>
  return (
    <main className="p-8">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center text-4xl">DevKasun Blog</div>

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}
