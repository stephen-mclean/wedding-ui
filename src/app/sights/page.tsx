import { BackButton } from "@/components/pages/back-button";
import Link from "next/link";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";

export default async function Sights() {
  const t = await getTranslations("sights");
  const locale = await getLocale();

  return (
    <div className="flex flex-col gap-4 flex-1 lg:max-w-lg bg-surface sm:bg-opacity-0 pt-8 px-8 -mt-8 -mx-8 sm:mx-0 sm:mt-0 sm:pt-0 sm:px-0">
      <div className="flex items-center gap-2 sticky top-0 bg-surface py-2">
        <div className="absolute">
          <BackButton />
        </div>
        <h1 className="font-serif text-4xl text-center flex-1">{t("title")}</h1>
      </div>

      <div className="flex flex-col gap-2">
        {locale === "it" ? (
          <p>Pagina scritta in italiano da Stephen. Prego tutti :)</p>
        ) : null}
        <h2 className="font-serif text-2xl">{t("ostuni")}</h2>
        <Image
          src="/ostuni.jpg"
          alt="Ostuni"
          width="0"
          height="0"
          sizes="100vw"
          className="flex-1 rounded-md object-cover w-auto h-auto max-h-36 md:max-h-64"
        />
        <p className="font-sans text-base">{t("ostuniDescription")}</p>
        <p className="font-sans text-base">{t("ostuniDescription2")}</p>

        <h3 className="font-serif text-xl">{t("monopoli")}</h3>
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
            {t("monopoli")}
          </Link>{" "}
          {t("monopoliDescription")}
        </p>

        <h3 className="font-serif text-xl">{t("polignano")}</h3>
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
            {t("polignano")}
          </Link>{" "}
          {t("polignanoDescription")}
        </p>

        <p className="font-sans text-base">{t("polignanoDescription2")}</p>

        <h3 className="font-serif text-xl">{t("alberobello")}</h3>
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
            {t("alberobello")}
          </Link>{" "}
          {t("alberobelloDescription")}
        </p>

        <h3 className="font-serif text-xl">{t("lecce")}</h3>
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
            {t("lecce")}
          </Link>{" "}
          {t("lecceDescription")}
        </p>

        <h3 className="font-serif text-xl">{t("moreRecommendations")}</h3>
        <p className="font-sans text-base">
          {t("moreRecommendationsDescription")}
        </p>
      </div>
    </div>
  );
}
