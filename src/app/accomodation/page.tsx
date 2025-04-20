import { BackButton } from "@/components/pages/back-button";
import { useTranslations } from "next-intl";

export default function Accomodation() {
  const t = useTranslations("accomodation");
  return (
    <div className="flex flex-col gap-4 flex-1 lg:max-w-lg bg-surface sm:bg-opacity-0 pt-8 px-8 -mt-8 -mx-8 sm:mx-0 sm:mt-0 sm:pt-0 sm:px-0">
      <div className="flex items-center gap-2 sticky top-0 bg-surface py-2">
        <div className="absolute">
          <BackButton />
        </div>
        <h1 className="font-serif text-4xl text-center flex-1">{t("title")}</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-2xl">{t("theVenue")}</h2>
        <p className="font-sans text-base">{t("theVenueDescription")}</p>
        <p className="font-sans text-base">{t("theVenueDescription2")}</p>

        <h2 className="font-serif text-2xl">{t("ostuni")}</h2>
        <p className="font-sans text-base">{t("ostuniDescription")}</p>
        <p className="font-sans text-base">{t("ostuniDescription2")}</p>
        <p className="font-sans text-base">{t("ostuniDescription3")}</p>
      </div>
    </div>
  );
}
