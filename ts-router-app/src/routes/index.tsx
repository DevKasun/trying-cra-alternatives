import { createFileRoute } from '@tanstack/react-router'
import ImportedPostData from '../db/posts.json'

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
          <div
            key={post.id}
            className="my-4 p-4 border-2 border-solid border-cyan-600 rounded-md hover:shadow-md hover:bg-cyan-600 group"
          >
            <h2 className="text-2xl">{post.title}</h2>
            <p className="text-gray-700 group-hover:text-black line-clamp-1">
              {post.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
