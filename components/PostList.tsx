import { PostFragment } from "@/graphql/types";
import Image from "next/image";
import Link from "next/link";

interface PostListProps {
  posts: Array<PostFragment | null>;
}

export const PostList = ({ posts }: PostListProps) => {
  if (!posts.length)
    return <div className="text-white text-center">No articles found.</div>;

  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      {posts.map(
        (post) =>
          post && (
            <div key={post?.sys.id}>
              <Link href={`/${post.category?.slug}/${post?.slug}`}>
                {post.thumbnail?.url && (
                  <div className="relative overflow-hidden rounded-md h-80 mb-3">
                    <Image
                      src={post.thumbnail?.url}
                      alt={post.thumbnail?.title || post.title || ""}
                      layout={"fill"}
                      objectFit="cover"
                    />
                  </div>
                )}
                <h4 className="text-white font-semibold text-lg">
                  {post.title}
                </h4>
              </Link>
            </div>
          )
      )}
    </div>
  );
};
