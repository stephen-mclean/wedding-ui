import { fetchInvite } from "@/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InviteForm } from "./invite-form";

export default async function UpdateInvite({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const invite = await fetchInvite(code);
  console.log(invite);

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

  return (
    <div className="flex flex-col gap-6 flex-1 lg:max-w-lg">
      <h1 className="font-serif text-4xl text-center">RSVP</h1>
      <InviteForm invite={invite} />
    </div>
  );
}
