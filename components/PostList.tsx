import { PostFragment } from "@/graphql/types";
import Image from "next/image";
import Link from "next/link";

interface PostListProps {
  posts: PostFragment[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post?.sys.id}>
          <Link href={`/${post.category?.slug}/${post?.slug}`}>
            {post.thumbnail?.url && (
              <Image
                src={post.thumbnail?.url}
                alt={post.thumbnail?.title || post.title || ""}
                width={640}
                height={320}
              />
            )}
            {post?.title}
          </Link>
        </div>
      ))}
    </div>
  );
};
