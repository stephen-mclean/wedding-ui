import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export type RadioItem = {
  label: string;
  value: string;
  id: string;
};

type RadioGroupProps = {
  items: RadioItem[];
  onChange: (value: string) => void;
  value: string;
  label: string;
  helperText?: string;
};

export const RadioGroup = ({
  items,
  onChange,
  value,
  label,
  helperText,
}: RadioGroupProps) => {
  return (
    <div className="flex flex-col gap-3">
      {label && (
        <label className="text-sm font-sans font-medium">{label}</label>
      )}

      <RadioGroupPrimitive.Root
        value={value}
        onValueChange={onChange}
        className="flex flex-row gap-4"
      >
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <RadioGroupPrimitive.Item
              value={item.value}
              id={item.id}
              className="w-4 h-4 rounded-full bg-surface border border-accent"
            >
              <RadioGroupPrimitive.Indicator className="flex justify-center items-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-accent" />
            </RadioGroupPrimitive.Item>
            <label
              htmlFor={item.id}
              className="text-xs font-sans font-medium h-4"
            >
              {item.label}
            </label>
          </div>
        ))}
      </RadioGroupPrimitive.Root>

      {helperText && (
        <p className="text-sm text-accent-dark font-sans">{helperText}</p>
      )}
    </div>
  );
};
