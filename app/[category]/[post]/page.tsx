import { PostsPathsDocument, PostsPathsQuery } from "@/graphql/types";
import client from "@/lib/client";
import { ApolloQueryResult } from "@apollo/client";

export const generateStaticParams = async () => {
  const { data }: ApolloQueryResult<PostsPathsQuery> =
    await client.query<PostsPathsQuery>({
      query: PostsPathsDocument,
    });

  const paths = data?.postCollection?.items.map((post) => {
    return { category: post?.category?.slug, post: post?.slug };
  });

  return paths || [];
};

interface PageProps {
  params: { post: string };
}

export default async function Page({ params }: PageProps) {
  return <div>{params.post}</div>;
}
