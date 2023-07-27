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

  const pages: number = Math.floor(total / PAGE_SIZE);
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
    <>
      {pagesArray.map((i) => (
        <button key={i} onClick={() => handleClick(i)}>
          {i}
        </button>
      ))}
    </>
  );
};
