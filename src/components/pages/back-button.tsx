"use client";

import { ArrowLeft } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  return (
    <Button onClick={onClick} variant="ghost">
      <ArrowLeft />
    </Button>
  );
}
