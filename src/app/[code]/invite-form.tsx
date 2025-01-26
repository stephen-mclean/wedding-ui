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
  const { fields } = useFieldArray<Invite>({
    name: "guests",
  });

  const getIsAttendingOptions = (index: number): RadioItem[] => {
    return [
      {
        label: "Yes",
        value: "true",
        id: `isAttending-yes-${index}`,
      },
      {
        label: "No",
        value: "false",
        id: `isAttending-no-${index}`,
      },
    ];
  };

  const getLabel = (guest: Guest) => {
    return guest.isPlusOne
      ? "Will you be bringing a plus one?"
      : "Is attending?";
  };

  const getHelperText = (guest: Guest) => {
    return guest.isPlusOne
      ? "If yes, please include their name in the notes."
      : undefined;
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

  const router = useRouter();

  const onSubmit = async (data: InviteSchema, e?: BaseSyntheticEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    await updateInvite({ ...data, notes: data.notes || "" });
    router.push("/");
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
              label="Notes"
              placeholder="Include any other helpful info for us here or any dietary requirements."
            />
          )}
        />

        <div className="flex justify-end gap-2">
          <Link href="/">
            <Button variant="secondary" type="button">
              Back
            </Button>
          </Link>
          <Button type="submit" disabled={isDisabled}>
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
