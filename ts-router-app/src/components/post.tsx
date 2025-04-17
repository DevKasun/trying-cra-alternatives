import React from 'react';
import { Link } from '@tanstack/react-router';

interface PostData {
    id: number;
    title: string;
    content: string;
}

interface PostProps {
    post: PostData;
}

const Post: React.FC<PostProps> = (props) => {
    const { post } = props;
    return (
        <Link to="/posts/$postId" params={{ postId: post.id.toString() }}>
            <div key={post.id} className="my-4 p-4 border-2 border-solid border-cyan-600 rounded-md hover:shadow-md hover:bg-cyan-600 group"
            >
                <h2 className="text-2xl">{post.title}</h2>
                <p className="text-gray-700 group-hover:text-black line-clamp-1">
                    {post.content}
                </p>
            </div>
        </Link>
    );
};
export default Post;