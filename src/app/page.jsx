"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/signin"); // ✅ changed from /admin → /signin
  }, []);

  return null;
}