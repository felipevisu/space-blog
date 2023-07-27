import client from "@/lib/client";
import { PostFragment, PostsDocument, PostsQuery } from "@/graphql/types";
import { ApolloQueryResult } from "@apollo/client";

import { PAGE_SIZE } from "@/lib/constants";
import { PostList } from "@/components/PostList";
import { Pagination } from "@/components/Pagination";

type SearchParams = Record<string, string>;

interface PageProps {
  searchParams: SearchParams;
}

interface Data {
  posts: PostFragment[];
  total: number;
}

const getData = async (searchParams: SearchParams): Promise<Data> => {
  const page = parseInt(searchParams["page"]) || 1;
  const skip = (page - 1) * PAGE_SIZE;

  const postsQuery: ApolloQueryResult<PostsQuery> =
    await client.query<PostsQuery>({
      query: PostsDocument,
      variables: { limit: PAGE_SIZE, skip: skip },
    });

  return {
    posts: (postsQuery.data?.postCollection?.items as PostFragment[]) || [],
    total: postsQuery.data?.postCollection?.total || 0,
  };
};

export default async function Home({ searchParams }: PageProps) {
  const { posts, total } = await getData(searchParams);

  return (
    <main className="">
      <PostList posts={posts} />
      <Pagination total={total} />
    </main>
  );
}
