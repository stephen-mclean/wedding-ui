import { fetchInvite } from "@/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThankYouCelebration } from "./confetti";
import Image from "next/image";

export default async function InviteCompleted({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const invite = await fetchInvite(code);

  if (!invite) {
    return (
      <div className="flex flex-col gap-6 items-center">
        <h1 className="font-serif text-4xl text-center">Invite not found</h1>
        <p className="font-sans text-base">
          We could not find an invite with that code. Please check your invite
          again.
        </p>
        <Link href="/">
          <Button>Back</Button>
        </Link>
      </div>
    );
  }

  const allGuestsSaidNo = invite.guests.every((guest) => !guest.isAttending);

  const thankYouMessage = allGuestsSaidNo
    ? "Thank you very much for responding. We're sorry we won't see you this time, but we hope to see you soon!"
    : "Thank you very much for responding. We can't wait to share our day with you. Please find some useful information below and don't hesitate to reach out to us if you need anything.";

  return (
    <div className="flex flex-col items-center gap-6 flex-1 lg:max-w-lg">
      {!allGuestsSaidNo ? <ThankYouCelebration /> : null}
      <h1 className="font-serif text-4xl text-center">Thank you!</h1>

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
            How to get there
          </Button>
        </Link>
        <Link href={"/wedding"} className="flex">
          <Button variant="secondary" size="full">
            The big day
          </Button>
        </Link>
        <Link href={"/accomodation"} className="flex">
          <Button variant="secondary" size="full">
            Where to stay
          </Button>
        </Link>
        <Link href={"/sights"} className="flex">
          <Button variant="secondary" size="full">
            What to see
          </Button>
        </Link>
      </div>
    </div>
  );
}
