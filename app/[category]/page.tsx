export const revalidate = 60;

import {
  CategoriesPathsDocument,
  CategoriesPathsQuery,
  CategoryDocument,
  CategoryFragment,
  CategoryQuery,
  PostsDocument,
  PostsQuery,
} from "@/graphql/types";
import client from "@/lib/client";
import { ApolloQueryResult } from "@apollo/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pagination } from "./pagination";
import { PAGE_SIZE } from "@/lib/constants";

interface Data {
  category?: CategoryFragment;
  posts: PostsQuery["postCollection"];
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
    });

  const page = parseInt(searchParams["page"]) || 1;
  const skip = (page - 1) * PAGE_SIZE;

  const postsQuery: ApolloQueryResult<PostsQuery> =
    await client.query<PostsQuery>({
      query: PostsDocument,
      variables: { limit: PAGE_SIZE, skip: skip, category: params.category },
    });

  return {
    category: categoryQuery.data?.categoryCollection?.items[0] || undefined,
    posts: postsQuery.data?.postCollection,
  };
};

export default async function Page({ params, searchParams }: PageProps) {
  const { category, posts } = await getData(params, searchParams);
  if (!category || !posts) return notFound();

  return (
    <div>
      <h3>{category.title}</h3>
      <hr />
      <div>
        {posts.items.map((post) => (
          <div key={post?.sys.id}>
            <Link href={`/${params.category}/${post?.slug}`}>
              {post?.title}
            </Link>
          </div>
        ))}
      </div>
      <hr />
      <Pagination total={posts.total} />
    </div>
  );
}
