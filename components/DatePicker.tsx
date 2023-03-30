import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getErrObject } from "../utils/helpers";

interface Props {
  name: string;
  label?: string;
  required?: boolean;
  placeholderText?: string;
  dateFormat?: string;
  maxDate?: Date;
  disabled?: boolean;
  showYearPicker?: boolean;
  onChange?: (date?: Date) => void;
}
export const MyDatePicker = ({
  label,
  name,
  dateFormat,
  required,
  placeholderText,
  ...props
}: Props) => {
  const { control, formState } = useFormContext();

  return (
    <div className="control">
      {label && (
        <label className="label" htmlFor={name}>
          {label}{" "}
          {required ? (
            <i className="text-xs text-[#0275D8]">*</i>
          ) : (
            <span className="text-xs text-[#848F9F]">(Optional)</span>
          )}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            {...props}
            dateFormat={dateFormat}
            placeholderText={placeholderText}
            onChange={onChange}
            selected={value}
            className={`${
              getErrObject(name, formState.errors) && "errorControl"
            }`}
          />
        )}
      />
      <p className="errorText">
        {!!getErrObject(name, formState.errors) && (
          <>{getErrObject(name, formState.errors)?.message}</>
        )}
      </p>
    </div>
  );
};
