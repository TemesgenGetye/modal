"use client";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  router.push("/employee");
  return null;
}

export default Page;
