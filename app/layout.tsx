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
    <html lang="en" className="bg-gray-800">
      <body className={inter.className}>
        <div className="container max-w-screen-xl mx-auto px-3">
          <header className="border-b">
            <h1 className="text-3xl text-white font-bold py-4">
              <Link href="/">
                <span className="hover:text-yellow-500">
                  A Blog about Space
                </span>
              </Link>
            </h1>
          </header>
          <nav className="flex space-x-6 py-4 border-b mb-6">
            {categories.map((category) => (
              <div key={category?.sys.id}>
                <Link href={`/${category?.slug}`}>
                  <span className="text-white font-semibold hover:text-yellow-500">
                    {category?.title}
                  </span>
                </Link>
              </div>
            ))}
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
