import { useFormContext } from "react-hook-form";
interface Props {
  name: string;
  label?: string;
  classes: string;
}
const Textarea = ({ name, label, classes, ...rest }: Props) => {
  const { register, formState } = useFormContext();

  return (
    <div className="control">
      {label && (
        <label className="block" htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        className={`${formState.errors[name] && "errorControl"} ${classes}`}
        id={name}
        {...register(name)}
        {...rest}
      />
      <p className="errorText">
        {!!formState?.errors[name] && <>{formState?.errors[name]?.message}</>}
      </p>
    </div>
  );
};

export { Textarea };
