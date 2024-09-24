import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-5">
      <Link href="/employee" className="hover:text-gray-600">
        go to /employee
      </Link>
    </main>
  );
}
