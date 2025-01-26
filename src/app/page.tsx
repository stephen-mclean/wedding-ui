import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <Link href={"/travel"} className="flex">
          <Button variant="secondary">How to get there</Button>
        </Link>
        <Link href={"/wedding"} className="flex">
          <Button variant="secondary">The big day</Button>
        </Link>
        <Link href={"/accomodation"} className="flex">
          <Button variant="secondary">Where to stay</Button>
        </Link>
        <Link href={"/sights"} className="flex">
          <Button variant="secondary">What to see</Button>
        </Link>
      </div>

      <div className="flex mx-auto">
        <Link href={"/rsvp"}>
          <Button>RSVP</Button>
        </Link>
      </div>
    </div>
  );
}
