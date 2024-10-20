import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 text-center text-balance">
      <h1 className="font-serif text-4xl">
        <span className="text-primary">Ilaria</span> and{" "}
        <span className="text-primary">Stephen</span>
      </h1>
      <h2 className="font-serif text-2xl">
        invite you for a day of dancing, drinking, eating, love, and fun
      </h2>
      <h2 className="font-serif text-2xl">
        ...and also to celebrate their wedding :)
      </h2>
      <h2 className="font-serif text-2xl font-semibold">20th September 2025</h2>
      <div className="flex flex-col items-center gap-2">
        <Link href={"/travel"}>
          <div className="flex gap-1 text-base font-sans text-primary">
            How to get there
          </div>
        </Link>
        <Link href={"/accomodation"}>
          <div className="flex gap-1 text-base font-sans text-primary">
            Where to stay
          </div>
        </Link>
        <Link href={"/sights"}>
          <div className="flex gap-1 text-base font-sans text-primary">
            What to see
          </div>
        </Link>
      </div>
    </div>
  );
}
