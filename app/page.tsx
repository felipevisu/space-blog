import client from "@/lib/client";
import { PostFragment, PostsDocument, PostsQuery } from "@/graphql/types";
import { ApolloQueryResult } from "@apollo/client";
import Link from "next/link";

interface Data {
  posts: Array<PostFragment | null>;
}

const getData = async (): Promise<Data> => {
  const postsQuery: ApolloQueryResult<PostsQuery> =
    await client.query<PostsQuery>({
      query: PostsDocument,
    });

  return {
    posts: postsQuery.data?.postCollection?.items || [],
  };
};

export default async function Home() {
  const { posts } = await getData();

  return (
    <main className="">
      <div>
        {posts.map((post) => (
          <div key={post?.sys.id}>
            <Link href={`/${post?.category?.slug}/${post?.slug}`}>
              {post?.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
