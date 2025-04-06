import { createFileRoute } from '@tanstack/react-router'
// import postData from '../db/posts.json'

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
  // const postData = postDataRaw as Array<PostDataProps>
  return (
    <main className="p-8">
      <div className="container mx">
        <div className="text-center text-4xl">DevKasun Blog</div>

        {/* {posts.map((post) => (
          <div key={post.id} className="my-4">
            <h2 className="text-2xl">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
          </div>
        ))} */}
      </div>
    </main>
  )
}
