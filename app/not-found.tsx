import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center text-white">
      <h1 className="text-xl py-6">Not found - 404!</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
