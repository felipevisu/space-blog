export const revalidate = 60;

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
import Link from "next/link";
import { notFound } from "next/navigation";

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

interface Data {
  category?: CategoryFragment;
  posts: Array<PostFragment | null>;
}

const getData = async (slug: string): Promise<Data> => {
  const categoryQuery: ApolloQueryResult<CategoryQuery> =
    await client.query<CategoryQuery>({
      query: CategoryDocument,
      variables: { slug: slug },
    });

  const postsQuery: ApolloQueryResult<PostsQuery> =
    await client.query<PostsQuery>({
      query: PostsDocument,
      variables: { category: slug },
    });

  return {
    category: categoryQuery.data?.categoryCollection?.items[0] || undefined,
    posts: postsQuery.data?.postCollection?.items || [],
  };
};

interface PageProps {
  params: { category: string };
}

export default async function Page({ params }: PageProps) {
  const { category, posts } = await getData(params.category);
  if (!category) return notFound();

  return (
    <div>
      <h3>{category.title}</h3>
      <hr />
      <div>
        {posts.map((post) => (
          <div key={post?.sys.id}>
            <Link href={`/${params.category}/${post?.slug}`}>
              {post?.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
