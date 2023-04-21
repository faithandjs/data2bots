import React from "react";
interface Props {
  id: string;
  name: string;
  placeholder: string;
  options: Array<{ label: string; value: string | number }>;
  defaultValue?: string | number;
  optionPlaceHolder: string;
  onChange: (e: string | number) => void;
}
export default function Select({
  id,
  name,
  placeholder,
  defaultValue = "",
  options,
  optionPlaceHolder,
  onChange,
}: Props) {
  return (
    <div>
      <select
        id={id}
        name={name}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-none bg-[rgba(9,30,66,0.04)] py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        defaultValue={defaultValue}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option value="" disabled hidden>
          {optionPlaceHolder}
        </option>
        {options.map((option, optionIndex) => (
          <option key={optionIndex} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
