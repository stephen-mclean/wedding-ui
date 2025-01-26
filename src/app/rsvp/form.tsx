"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const inviteCodeSchema = z.object({
  inviteCode: z
    .string()
    .min(5, { message: "Invite code is required" })
    .max(5, { message: "Invite code must be 5 characters long" })
    .regex(/^[A-Za-z0-9]+$/, { message: "Invite code must be alphanumeric" }),
});

type InviteCodeForm = z.infer<typeof inviteCodeSchema>;

export default function RSVPForm() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<InviteCodeForm>({
    resolver: zodResolver(inviteCodeSchema),
  });

  const router = useRouter();

  const handleNext = (data: InviteCodeForm) => {
    router.push(`/${data.inviteCode}`);
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleNext)}>
      <Controller
        name="inviteCode"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Invite Code"
            placeholder="e.g Qx1La"
            helperText="The code is case sensitive"
          />
        )}
      />

      <div className="flex justify-end gap-2">
        <Link href="/">
          <Button variant="secondary" type="button">
            Back
          </Button>
        </Link>
        <Button type="submit" disabled={!isValid}>
          Next
        </Button>
      </div>
    </form>
  );
}
