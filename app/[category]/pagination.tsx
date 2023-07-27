"use client";

import { PAGE_SIZE } from "@/lib/constants";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface Pagination {
  total: number;
}

export const Pagination = ({ total }: Pagination) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pages: number = Math.floor(total / PAGE_SIZE);
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

  const handleClick = (value: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", value.toString());
    router.push(pathname + "?" + params.toString());
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
