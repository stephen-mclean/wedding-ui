import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col gap-4 text-center text-balance">
      <h1 className="font-serif text-4xl">
        <span className="text-primary">{t("title")}</span>
      </h1>
      <h2 className="font-serif text-2xl">{t("subtitle1")}</h2>
      <h2 className="font-serif text-2xl">{t("subtitle2")}</h2>
      <h2 className="font-serif text-2xl font-semibold">{t("date")}</h2>
      <div className="flex flex-col mx-auto gap-2">
        <Link href={"/travel"} className="flex">
          <Button variant="secondary" size="full">
            {t("howToGetThere")}
          </Button>
        </Link>
        <Link href={"/wedding"} className="flex">
          <Button variant="secondary" size="full">
            {t("theBigDay")}
          </Button>
        </Link>
        <Link href={"/accomodation"} className="flex">
          <Button variant="secondary" size="full">
            {t("whereToStay")}
          </Button>
        </Link>
        <Link href={"/sights"} className="flex">
          <Button variant="secondary" size="full">
            {t("whatToSee")}
          </Button>
        </Link>
      </div>

      <div className="flex mx-auto">
        <Link href={"/rsvp"} className="flex-1">
          <Button size="full">{t("rsvp")}</Button>
        </Link>
      </div>
    </div>
  );
}
