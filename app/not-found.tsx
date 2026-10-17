import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">No bookmark found :(</h1>
      <Link href="/" className="underline">
        Home
      </Link>
    </div>
  );
}
