import { BackButton } from "@/components/pages/back-button";
import Link from "next/link";
import Image from "next/image";

export default function Sights() {
  return (
    <div className="flex flex-col gap-4 flex-1 lg:max-w-lg bg-surface sm:bg-opacity-0 pt-8 px-8 -mt-8 -mx-8 sm:mx-0 sm:mt-0 sm:pt-0 sm:px-0">
      <div className="flex items-center gap-2 sticky top-0 bg-surface py-2">
        <div className="absolute">
          <BackButton />
        </div>
        <h1 className="font-serif text-4xl text-center flex-1">What to see</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-2xl">Ostuni</h2>
        <Image
          src="/ostuni.jpg"
          alt="Ostuni"
          width="0"
          height="0"
          sizes="100vw"
          className="flex-1 rounded-md object-cover w-auto h-auto max-h-36 md:max-h-64"
        />
        <p className="font-sans text-base">
          Ostuni is a beautiful city with a lot of history and culture. It is
          known for its whitewashed buildings and old town walls.
        </p>
        <p className="font-sans text-base">
          If you have the opportunity to stay with us a bit longer, here are
          some of the places you can&apos;t miss.
        </p>

        <h3 className="font-serif text-xl">Monopoli</h3>
        <Image
          src="/monopoli.webp"
          alt="Monopoli"
          width="0"
          height="0"
          sizes="100vw"
          className="flex-1 rounded-md object-cover w-auto h-auto max-h-36 md:max-h-64"
        />
        <p className="font-sans text-base">
          <Link
            href="https://maps.app.goo.gl/CY5SfM6ZzcmdTMPMA"
            target="_blank"
            className="underline"
          >
            Monopoli
          </Link>{" "}
          is 43km north of Ostuni. It is also Ilaria&apos;s favorite town in the
          area :) Here, you will have the option to stroll around the historical
          center and to go for a swim while you eat fried fish in a cone (there
          are no seagulls).
        </p>

        <h3 className="font-serif text-xl">Polignano a Mare</h3>
        <Image
          src="/polignano.jpg"
          alt="Polignano"
          width="0"
          height="0"
          sizes="100vw"
          className="flex-1 rounded-md object-cover w-auto h-auto max-h-36 md:max-h-64"
        />
        <p className="font-sans text-base">
          <Link
            href="https://maps.app.goo.gl/mkhJusct5PTkkjaJ6"
            target="_blank"
            className="underline"
          >
            Polignano
          </Link>{" "}
          is 50km north of Ostuni. Foreigners think this is the absolute best
          town in Puglia (they are right, but just because they don&apos;t know
          the area well).
        </p>

        <p className="font-sans text-base">
          Here, you will be able to have an ice cream or sip a beer sitting on a
          cliff.
        </p>

        <h3 className="font-serif text-xl">Alberobello</h3>
        <Image
          src="/alberobello.jpg"
          alt="Alberobello"
          width="0"
          height="0"
          sizes="100vw"
          className="flex-1 rounded-md object-cover w-auto h-auto max-h-36 md:max-h-64"
        />
        <p className="font-sans text-base">
          <Link
            href="https://maps.app.goo.gl/gWpDnrWQasdDm4V17"
            target="_blank"
            className="underline"
          >
            Alberobello
          </Link>{" "}
          is 32km inland from Ostuni and is a world UNESCO heritage site. Here,
          you can visit Trulli. Trulli are traditional houses which have been
          turned into restaurants, shops, hotels, etc. They are very beautiful
          and Stephen loved them :)
        </p>

        <h3 className="font-serif text-xl">Lecce</h3>
        <Image
          src="/lecce.jpg"
          alt="Lecce"
          width="0"
          height="0"
          sizes="100vw"
          className="flex-1 rounded-md object-cover w-auto h-auto max-h-36 md:max-h-64"
        />
        <p className="font-sans text-base">
          <Link
            href="https://maps.app.goo.gl/xvPbNiQJvmT1R1n68"
            target="_blank"
            className="underline"
          >
            Lecce
          </Link>{" "}
          is 82km south of Ostuni. Lecce is known for Barocco style buildings,
          plenty of churches, pasticciotto pastry, and iced coffee with almond
          syrup (caffe leccese). What a treat! But everything is a treat,
          really!
        </p>

        <h3 className="font-serif text-xl">More recommendations</h3>
        <p className="font-sans text-base">
          Ask us if you would like any help planning your itinerary.
        </p>
      </div>
    </div>
  );
}
