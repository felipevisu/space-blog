import client from "@/lib/client";
import {
  CategoriesDocument,
  CategoriesQuery,
  CategoryFragment,
} from "@/graphql/types";
import { ApolloQueryResult } from "@apollo/client";
import Link from "next/link";

interface Data {
  categories: Array<CategoryFragment | null>;
}

const getData = async (): Promise<Data> => {
  const categoriesQuery: ApolloQueryResult<CategoriesQuery> =
    await client.query<CategoriesQuery>({
      query: CategoriesDocument,
    });

  return {
    categories: categoriesQuery.data?.categoryCollection?.items || [],
  };
};

export default async function Home() {
  const { categories } = await getData();

  return (
    <main className="">
      <div>
        {categories.map((category) => (
          <div key={category?.sys.id}>
            <Link href={`/${category?.slug}`}>{category?.title}</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
