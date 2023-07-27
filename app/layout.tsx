import {
  CategoriesDocument,
  CategoriesQuery,
  CategoryFragment,
} from "@/graphql/types";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Link from "next/link";
import { ApolloQueryResult } from "@apollo/client";
import client from "@/lib/client";

const inter = Inter({ subsets: ["latin"] });

interface Data {
  categories: CategoryFragment[];
}

const getData = async (): Promise<Data> => {
  const categoriesQuery: ApolloQueryResult<CategoriesQuery> =
    await client.query<CategoriesQuery>({
      query: CategoriesDocument,
    });

  return {
    categories:
      (categoriesQuery.data?.categoryCollection?.items as CategoryFragment[]) ||
      [],
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { categories } = await getData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>
          <Link href="/">A Blog about Space</Link>
        </h1>
        <hr />
        <nav>
          {categories.map((category) => (
            <div key={category?.sys.id}>
              <Link href={`/${category?.slug}`}>{category?.title}</Link>
            </div>
          ))}
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
