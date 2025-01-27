import { BackButton } from "@/components/pages/back-button";
import Link from "next/link";

export default function Accomodation() {
  return (
    <div className="flex flex-col gap-4 flex-1 lg:max-w-lg bg-surface sm:bg-opacity-0 pt-8 px-8 -mt-8 -mx-8 sm:mx-0 sm:mt-0 sm:pt-0 sm:px-0">
      <div className="flex items-center gap-2 sticky top-0 bg-surface py-2">
        <div className="absolute">
          <BackButton />
        </div>
        <h1 className="font-serif text-4xl text-center flex-1">
          Where to stay
        </h1>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-2xl">The venue</h2>
        <p className="font-sans text-base">
          <Link
            href="https://www.masseriacastelluzzo.com/en"
            target="_blank"
            className="underline"
          >
            Masseria Castelluzzo
          </Link>{" "}
          has a small number of rooms (12) available which will be reserved for
          close family and on a first come first served basis.
        </p>
        <p className="font-sans text-base">
          Please contact us if you are interested in staying at the Masseria as
          we are trying to accomodate everyone based on everyones needs and the
          limited accomodation at the venue itself.
        </p>

        <h2 className="font-serif text-2xl">Ostuni</h2>
        <p className="font-sans text-base">
          We recommend staying in Ostuni city center. There are a number of
          hotels and Airbnb&apos;s in the center.
        </p>
        <p className="font-sans text-base">
          Ostuni is very popular with tourists and is very lively in the Summer.
          We plan to arrange events with everyone staying in Ostuni before and
          after the wedding so it would be a great place for everyone to stay
          without having to travel.
        </p>
        <p className="font-sans text-base">
          Please also note that there are many great options in the surrounding
          countryside. However, you will need to arrange rental of a car or
          scooter as transport to the countryside is impossible without your own
          transport.
        </p>
      </div>
    </div>
  );
}
