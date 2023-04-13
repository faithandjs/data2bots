import { yupResolver as yupResolvers } from "@hookform/resolvers/yup";
import { format } from "date-fns";
import { FieldValues } from "react-hook-form/dist/types";

const isClient = () => typeof window === "object";

const yupResolver = isClient() ? yupResolvers : undefined;

const monthList = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];
const monthOptions = monthList.map((list) => ({
  ...list,
  value: list.value.toUpperCase(),
  label: list.label.toUpperCase(),
}));

export const formatDate = (date: string | number | Date) => {
  if (!date) return "";
  return format(new Date(date), "dd/MM/yyyy");
};

const getErrObject = (name: string, errors: FieldValues) => {
  const nameArray = name.split(".");
  return nameArray.reduce(function (acc, item) {
    if (!acc) return null;
    if (acc[item]) {
      return acc[item];
    } else {
      return null;
    }
  }, errors as FieldValues);
};

const isEmptyObj = (obj: object) => {
  if (!obj) return true;
  return Object.keys(obj).length === 0;
};

const truncate = (str: string, n: number) => {
  return str?.length > n ? str.slice(0, n - 1) + "..." : str;
};

const formatBlogDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

export {
  isClient,
  yupResolver,
  monthOptions,
  getErrObject,
  isEmptyObj,
  truncate,
  formatBlogDate,
};
