import { createFileRoute } from '@tanstack/react-router';
import ImportedPostData from '@/db/posts.json';

// Define the interface for post data, matching the structure in posts.json
interface PostDataProps {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

// Cast the imported JSON data to the defined interface
const posts: Array<PostDataProps> = ImportedPostData as Array<PostDataProps>;

export const Route = createFileRoute('/posts/$postId')({
  loader: ({ params }) => {
    const post = posts.find(p => p.id.toString() === params.postId);
    if (!post) {
      // Handle the case where the post is not found
      // For now, let's throw an error or return a specific state
      // In a real app, you might redirect or show a 404 component
      throw new Error('Post not found');
    }
    return post; // Return the found post data
  },
  component: PostDetail,
});

function PostDetail() {
  const post = Route.useLoaderData(); // Access the loaded post data

  return (
    <div className="p-8">
      <div className="container max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 text-lg">{post.content}</p>
        <p className="text-sm text-gray-500 mt-4">Created at: {new Date(post.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
}