import { BackButton } from "@/components/pages/back-button";
import Link from "next/link";

export default function Travel() {
  return (
    <div className="flex flex-col gap-4 flex-1 lg:max-w-lg bg-surface sm:bg-opacity-0 pt-8 px-8 -mt-8 -mx-8 sm:mx-0 sm:mt-0 sm:pt-0 sm:px-0">
      <div className="flex items-center gap-2 sticky top-0 bg-surface py-2">
        <div className="absolute">
          <BackButton />
        </div>
        <h1 className="font-serif text-4xl text-center flex-1">
          How to get there
        </h1>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-2xl">Getting to Ostuni</h2>
        <p className="font-sans text-base">
          While the wedding ceremony will be held in the Ceglie area, the best
          place, logistically, for everyone to stay nearby would be Ostuni.
        </p>

        <h2 className="font-serif text-2xl">Bus to the venue</h2>

        <p className="font-sans text-base">
          We will be arranging a bus to take everyone staying in Ostuni to the
          venue on the day of the wedding.
        </p>

        <h2 className="font-serif text-2xl">Airports</h2>
        <p className="font-sans text-base">
          The closest airports are{" "}
          <Link
            href="https://brindisi.airports.aeroportidipuglia.it/en/"
            target="_blank"
            className="underline"
          >
            Brindisi
          </Link>{" "}
          (44km) and{" "}
          <Link
            href="https://bari.airports.aeroportidipuglia.it/en/"
            target="_blank"
            className="underline"
          >
            Bari
          </Link>{" "}
          (100km).
        </p>

        <p className="font-sans text-base">
          For both airports, direct flights from Dublin are available on a
          Wednesday and a Saturday.
        </p>

        <p className="font-sans text-base">
          To get from either airport to Ostuni you can take a bus, taxi, or rent
          a car. Please see the airport website for all options.
        </p>
      </div>
    </div>
  );
}
