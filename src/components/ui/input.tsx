import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { label?: string; helperText?: string }
>(({ className, type, label, helperText, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={props.id} className="text-sm font-sans font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          "font-sans flex h-9 w-full rounded-md border border-accent bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
      {helperText && (
        <p className="text-sm text-accent-dark font-sans">{helperText}</p>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
