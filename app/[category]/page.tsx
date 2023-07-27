import {
  CategoriesPathsDocument,
  CategoriesPathsQuery,
  CategoryDocument,
  CategoryFragment,
  CategoryQuery,
} from "@/graphql/types";
import client from "@/lib/client";
import { ApolloQueryResult } from "@apollo/client";
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
}

const getData = async (slug: string): Promise<Data> => {
  const categoryQuery: ApolloQueryResult<CategoryQuery> =
    await client.query<CategoryQuery>({
      query: CategoryDocument,
      variables: { slug: slug },
    });

  return {
    category: categoryQuery.data?.categoryCollection?.items[0] || undefined,
  };
};

interface PageProps {
  params: { category: string };
}

export default async function Page({ params }: PageProps) {
  const { category } = await getData(params.category);
  if (!category) return notFound();

  return <div>{category.title}</div>;
}
