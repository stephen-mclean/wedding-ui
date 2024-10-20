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
      <div className="flex flex-col mx-auto gap-2">
        <Link href={"/travel"}>
          <div className="flex justify-center items-center text-base font-sans bg-surface border-primary border text-primary rounded h-8 px-3 flex-1">
            How to get there
          </div>
        </Link>
        <Link href={"/wedding"}>
          <div className="flex justify-center items-center text-base font-sans bg-surface border-primary border text-primary rounded h-8 px-3 flex-1">
            The big day
          </div>
        </Link>
        <Link href={"/accomodation"}>
          <div className="flex justify-center items-center text-base font-sans bg-surface border-primary border text-primary rounded h-8 px-3 flex-1">
            Where to stay
          </div>
        </Link>
        <Link href={"/sights"}>
          <div className="flex justify-center items-center text-base font-sans bg-surface border-primary border text-primary rounded h-8 px-3 flex-1">
            What to see
          </div>
        </Link>
      </div>

      <div className="flex mx-auto">
        <Link href={"/rsvp"}>
          <div className="flex justify-center items-center text-base font-sans bg-accent text-accent-dark rounded h-8 px-3 flex-1">
            RSVP
          </div>
        </Link>
      </div>
    </div>
  );
}
