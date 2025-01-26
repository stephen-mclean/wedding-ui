import * as React from "react";

import { cn } from "@/lib/utils";

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea"> & { label?: string; helperText?: string }
>(({ className, label, helperText, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={props.id} className="text-sm font-sans font-medium">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          "font-sans flex h-9 w-full rounded-md border border-accent bg-transparent px-3 py-1 text-sm min-h-14 shadow-sm transition-colors placeholder:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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
TextArea.displayName = "TextArea";

export { TextArea };
