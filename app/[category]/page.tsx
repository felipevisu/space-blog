import { CategoriesPathsDocument, CategoriesPathsQuery } from "@/graphql/types";
import client from "@/lib/client";
import { ApolloQueryResult } from "@apollo/client";

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

interface PageProps {
  params: { category: string };
}

export default async function Page({ params }: PageProps) {
  return <div>{params.category}</div>;
}
