import { fetchInvite } from "@/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThankYouCelebration } from "./confetti";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function InviteCompleted({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const invite = await fetchInvite(code);

  const t = await getTranslations("invite");

  if (!invite) {
    return (
      <div className="flex flex-col gap-6 items-center">
        <h1 className="font-serif text-4xl text-center">
          {t("inviteNotFound")}
        </h1>
        <p className="font-sans text-base">{t("inviteNotFoundDescription")}</p>
        <Link href="/">
          <Button>{t("back")}</Button>
        </Link>
      </div>
    );
  }

  const allGuestsSaidNo = invite.guests.every((guest) => !guest.isAttending);

  const thankYouMessage = allGuestsSaidNo
    ? t("thankYouMessage")
    : t("thankYouMessage2");

  return (
    <div className="flex flex-col items-center gap-6 flex-1 lg:max-w-lg">
      {!allGuestsSaidNo ? <ThankYouCelebration /> : null}
      <h1 className="font-serif text-4xl text-center">{t("thankYou")}</h1>

      <Image
        src="/thank-you.JPG"
        alt="Thank you"
        width="0"
        height="0"
        sizes="100vw"
        className="flex-1 rounded-md object-contain w-auto h-auto max-h-36 md:max-h-64"
      />

      <p className="font-serif text-lg text-center">{thankYouMessage}</p>

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
    </div>
  );
}
