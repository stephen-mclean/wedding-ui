import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex justify-center items-center text-base font-sans rounded h-8 px-3 flex-1",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-dark",
        secondary: "bg-surface border-primary border text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props} />
  );
};
