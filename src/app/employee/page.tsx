import Link from "next/link";
import React from "react";
const numbers = [1, 2, 3, 4, 5];
function page() {
  return (
    <div className="flex flex-wrap gap-4 p-5">
      {numbers.map((number) => (
        <Link
          href={`/employee/tab/${number}`}
          key={number}
          className="flex h-80 w-80 items-center justify-center border border-gray-100 text-4xl font-semibold shadow-lg"
        >
          {number}
        </Link>
      ))}
    </div>
  );
}

export default page;
