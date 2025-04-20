import { BackButton } from "@/components/pages/back-button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Wedding() {
  const t = useTranslations("wedding");
  return (
    <div className="flex flex-col gap-4 flex-1 lg:max-w-lg bg-surface sm:bg-opacity-0 pt-8 px-8 -mt-8 -mx-8 sm:mx-0 sm:mt-0 sm:pt-0 sm:px-0">
      <div className="flex items-center gap-2 sticky top-0 bg-surface py-2">
        <div className="absolute">
          <BackButton />
        </div>
        <h1 className="font-serif text-4xl text-center flex-1">{t("title")}</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-2xl">{t("arrivingAtTheVenue")}</h2>
        <Image
          src="/masseria.jpg"
          alt="Masseria"
          width="0"
          height="0"
          sizes="100vw"
          className="flex-1 rounded-md object-cover w-auto h-auto max-h-36 md:max-h-64"
        />
        <p className="font-sans text-base">{t("bus")}</p>

        <p className="font-sans text-base">{t("busDetails")}</p>

        <p className="font-sans text-base">{t("alternative")}</p>

        <h2 className="font-serif text-2xl">{t("ceremony")}</h2>
        <p className="font-sans text-base">{t("ceremonyDescription")}</p>
      </div>
    </div>
  );
}
