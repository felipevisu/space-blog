"use client";

import { PAGE_SIZE } from "@/lib/constants";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

interface Pagination {
  total: number;
}

export const Pagination = ({ total }: Pagination) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";
  const pageNumber = parseInt(page);
  const pages: number = Math.ceil(total / PAGE_SIZE);
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleClick = (value: number) => {
    const queryString = createQueryString("page", value.toString());
    router.push(pathname + "?" + queryString);
  };

  return (
    <div className="flex justify-center space-x-2 mb-6">
      {pagesArray.map((i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`w-10 h-10 bg-gray-700 ${
            pageNumber === i && "bg-gray-400"
          } hover:bg-gray-600 rounded-md text-white`}
        >
          {i}
        </button>
      ))}
    </div>
  );
};
