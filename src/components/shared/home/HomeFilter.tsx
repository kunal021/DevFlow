"use client";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import { formURLQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function HomeFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [active, setActive] = useState("");

  const handleTypeClick = (item: string) => {
    if (active === item) {
      setActive("");
      const newURL = formURLQuery({
        params: searchParams.toString(),
        key: "filter",
        value: null,
      });
      router.push(newURL, { scroll: false });
    } else {
      setActive(item);
      const newURL = formURLQuery({
        params: searchParams.toString(),
        key: "filter",
        value: item.toLowerCase(),
      });
      router.push(newURL, { scroll: false });
    }
  };

  return (
    <div className="mt-6 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => handleTypeClick(item.value)}
          className={`body-medium rounded-lg px-6 py-3  capitalize shadow-none ${
            active === item.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500 dark:bg-dark-300 dark:text-light-500"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}

export default HomeFilter;
