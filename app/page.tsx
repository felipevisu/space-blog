import client from "@/lib/client";
import {
  CategoriesDocument,
  CategoriesQuery,
  CategoryFragment,
  PostFragment,
  PostsDocument,
  PostsQuery,
} from "@/graphql/types";
import { ApolloQueryResult } from "@apollo/client";

interface Data {
  categories: Array<CategoryFragment | null>;
  posts: Array<PostFragment | null>;
}

const getData = async (): Promise<Data> => {
  const categoriesQuery: ApolloQueryResult<CategoriesQuery> =
    await client.query<CategoriesQuery>({
      query: CategoriesDocument,
    });

  const postsQuery: ApolloQueryResult<PostsQuery> =
    await client.query<PostsQuery>({
      query: PostsDocument,
    });

  return {
    categories: categoriesQuery.data?.categoryCollection?.items || [],
    posts: postsQuery.data?.postCollection?.items || [],
  };
};

export default async function Home() {
  const { categories, posts } = await getData();

  return (
    <main className="">
      <h1>A Blog about Music</h1>
      <nav>
        {categories.map((category) => (
          <div key={category?.sys.id}>{category?.title}</div>
        ))}
      </nav>
      <div>
        {posts.map((post) => (
          <div key={post?.sys.id}>{post?.title}</div>
        ))}
      </div>
    </main>
  );
}
