export const revalidate = 10;

import {
  CategoriesPathsDocument,
  CategoriesPathsQuery,
  CategoryDocument,
  CategoryFragment,
  CategoryQuery,
  PostFragment,
  PostsDocument,
  PostsQuery,
} from "@/graphql/types";
import client from "@/lib/client";
import { ApolloQueryResult } from "@apollo/client";
import { notFound } from "next/navigation";
import { Pagination } from "../../components/Pagination";
import { PAGE_SIZE } from "@/lib/constants";
import { PostList } from "@/components/PostList";

interface Data {
  category?: CategoryFragment;
  posts: PostFragment[];
  total: number;
}

type Params = { category: string };
type SearchParams = Record<string, string>;

interface PageProps {
  params: Params;
  searchParams: SearchParams;
}

export const generateStaticParams = async () => {
  const { data }: ApolloQueryResult<CategoriesPathsQuery> =
    await client.query<CategoriesPathsQuery>({
      query: CategoriesPathsDocument,
      fetchPolicy: "network-only",
    });

  const paths = data?.categoryCollection?.items.map((category) => {
    return { category: category?.slug };
  });

  return paths || [];
};

const getData = async (
  params: Params,
  searchParams: SearchParams
): Promise<Data> => {
  const categoryQuery: ApolloQueryResult<CategoryQuery> =
    await client.query<CategoryQuery>({
      query: CategoryDocument,
      variables: { slug: params.category },
      fetchPolicy: "network-only",
    });

  const page = parseInt(searchParams["page"]) || 1;
  const skip = (page - 1) * PAGE_SIZE;

  const postsQuery: ApolloQueryResult<PostsQuery> =
    await client.query<PostsQuery>({
      query: PostsDocument,
      variables: { limit: PAGE_SIZE, skip: skip, category: params.category },
      fetchPolicy: "network-only",
    });

  return {
    category: categoryQuery.data?.categoryCollection?.items[0] || undefined,
    posts: (postsQuery.data?.postCollection?.items as PostFragment[]) || [],
    total: postsQuery.data?.postCollection?.total || 0,
  };
};

export default async function Page({ params, searchParams }: PageProps) {
  const { category, posts, total } = await getData(params, searchParams);
  if (!category) return notFound();

  return (
    <div>
      <h3 className="text-center text-2xl text-white font-bold mb-6">
        {category.title}
      </h3>
      <PostList posts={posts} />
      <Pagination total={total} />
    </div>
  );
}
