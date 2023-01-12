import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center mt-60">
      <h1 className="font-bold  text-9xl">404</h1>
      <h6 className="text-5xl font-bold text-gray-600">
        <span>Oops!</span> Page not found
      </h6>
    </div>
  );
};

export default NotFound;
