import { fetchInvite } from "@/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InviteForm } from "./invite-form";
import { getTranslations } from "next-intl/server";

export default async function UpdateInvite({
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

  return (
    <div className="flex flex-col gap-6 flex-1 lg:max-w-lg">
      <h1 className="font-serif text-4xl text-center">{t("title")}</h1>
      <InviteForm invite={invite} />
    </div>
  );
}
