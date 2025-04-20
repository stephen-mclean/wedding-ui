"use client";

import { type Invite, type Guest, updateInvite } from "@/api";
import { BaseSyntheticEvent } from "react";
import {
  FormProvider,
  useFieldArray,
  useForm,
  Controller,
} from "react-hook-form";
import { RadioGroup, type RadioItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextArea } from "@/components/ui/textarea";
import Link from "next/link";
import { useTranslations } from "next-intl";

const guestSchema = z.object({
  isAttending: z.boolean(),
  name: z.string(),
  id: z.number().optional(),
  isPlusOne: z.boolean().optional(),
});

const inviteSchema = z.object({
  guests: z.array(guestSchema),
  id: z.number(),
  notes: z.string().optional(),
  submitCount: z.number(),
});

type InviteSchema = z.infer<typeof inviteSchema>;

type Props = {
  invite: Invite;
};

const Guests = () => {
  const t = useTranslations("invite");

  const { fields } = useFieldArray<Invite>({
    name: "guests",
  });

  const getIsAttendingOptions = (index: number): RadioItem[] => {
    return [
      {
        label: t("yes"),
        value: "true",
        id: `isAttending-yes-${index}`,
      },
      {
        label: t("no"),
        value: "false",
        id: `isAttending-no-${index}`,
      },
    ];
  };

  const getLabel = (guest: Guest) => {
    return guest.isPlusOne ? t("plusOne") : t("isAttending");
  };

  const getHelperText = (guest: Guest) => {
    return guest.isPlusOne ? t("plusOneNotes") : undefined;
  };

  return (
    <div className="flex flex-col gap-6">
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col gap-4">
          <h3 className="font-serif text-xl">{field.name}</h3>
          <Controller
            name={`guests.${index}.isAttending`}
            render={({ field }) => (
              <RadioGroup
                items={getIsAttendingOptions(index)}
                onChange={(value) => field.onChange(value === "true")}
                value={`${field.value}`}
                label={getLabel(fields[index])}
                helperText={getHelperText(fields[index])}
              />
            )}
          />
        </div>
      ))}
    </div>
  );
};

export const InviteForm = ({ invite }: Props) => {
  const methods = useForm<InviteSchema>({
    defaultValues: invite,
    resolver: zodResolver(inviteSchema),
  });

  const t = useTranslations("invite");

  const router = useRouter();

  const onSubmit = async (data: InviteSchema, e?: BaseSyntheticEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    await updateInvite({ ...data, notes: data.notes || "" });
    router.push(`/${invite.code}/complete`);
  };

  const isDisabled =
    methods.formState.isSubmitting || !methods.formState.isValid;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <Guests />

        <Controller
          name="notes"
          render={({ field }) => (
            <TextArea
              {...field}
              label={t("notes")}
              placeholder={t("notesPlaceholder")}
            />
          )}
        />

        <div className="flex justify-end gap-2">
          <Link href="/">
            <Button variant="secondary" type="button">
              {t("back")}
            </Button>
          </Link>
          <Button type="submit" disabled={isDisabled}>
            {t("submit")}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
