import { fetchInvite } from "@/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <div className="flex flex-col gap-6 flex-1 lg:max-w-lg">
      <h1 className="font-serif text-4xl text-center">Thank you!</h1>
      <p className="font-serif text-base">{thankYouMessage}</p>
    </div>
  );
}
