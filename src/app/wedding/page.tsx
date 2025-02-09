import { BackButton } from "@/components/pages/back-button";
import Link from "next/link";
import Image from "next/image";

export default function Wedding() {
  return (
    <div className="flex flex-col gap-4 flex-1 lg:max-w-lg bg-surface sm:bg-opacity-0 pt-8 px-8 -mt-8 -mx-8 sm:mx-0 sm:mt-0 sm:pt-0 sm:px-0">
      <div className="flex items-center gap-2 sticky top-0 bg-surface py-2">
        <div className="absolute">
          <BackButton />
        </div>
        <h1 className="font-serif text-4xl text-center flex-1">The big day</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-2xl">Arriving at the venue</h2>
        <Image
          src="/masseria.jpg"
          alt="Masseria"
          width="0"
          height="0"
          sizes="100vw"
          className="flex-1 rounded-md object-cover w-auto h-auto max-h-36 md:max-h-64"
        />
        <p className="font-sans text-base">
          On the day, we will be arranging a bus to take everyone staying in
          Ostuni to the venue. The same bus will take everyone back to Ostuni
          after the event.
        </p>

        <p className="font-sans text-base">
          We will be able to confirm the details of the bus once we have
          confirmed the number of guests. We will be updating this page with the
          details as soon as we have them.
        </p>

        <p className="font-sans text-base">
          Alternatively, you will be able to drive to the venue and parking is
          provided. There are also some local taxis but availability is limited.
        </p>

        <h2 className="font-serif text-2xl">The ceremony</h2>
        <p className="font-sans text-base">
          The ceremony will take place at{" "}
          <Link
            href="https://www.masseriacastelluzzo.com/en"
            target="_blank"
            className="underline"
          >
            4pm at Masseria Castelluzzo
          </Link>
          . After the ceremony there will be aperitivo, dinner, music, drinks,
          cake, and dancing :)
        </p>
      </div>
    </div>
  );
}
