export const revalidate = 20;

import { PostDetails } from "@/components/PostDetails";
import {
  PostDetailsFragment,
  PostDocument,
  PostQuery,
  PostsPathsDocument,
  PostsPathsQuery,
} from "@/graphql/types";
import client from "@/lib/client";
import { ApolloQueryResult } from "@apollo/client";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const { data }: ApolloQueryResult<PostsPathsQuery> =
    await client.query<PostsPathsQuery>({
      query: PostsPathsDocument,
      fetchPolicy: "network-only",
    });

  const paths = data?.postCollection?.items.map((post) => {
    return { category: post?.category?.slug, post: post?.slug };
  });

  return paths || [];
};

interface Data {
  post?: PostDetailsFragment;
}

interface PageProps {
  params: { post: string };
}

const getData = async (slug: string): Promise<Data> => {
  const postQuery: ApolloQueryResult<PostQuery> = await client.query<PostQuery>(
    {
      query: PostDocument,
      variables: { slug: slug },
    }
  );

  return {
    post: postQuery.data?.postCollection?.items[0] || undefined,
  };
};

export default async function Page({ params }: PageProps) {
  const { post } = await getData(params.post);
  if (!post) return notFound();

  return <PostDetails post={post} />;
}
