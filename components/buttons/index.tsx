import React from "react";
import Spin from "../shared/spin";

interface Props {
  name?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  useHalfWith?: boolean;
  className?: string;
  isOutlined?: boolean;
  isCancelButton?: boolean;
  isDeclinedButton?: boolean;
  isRemoveButton?: boolean;
  isBusy?: boolean;
  isDisabled?: boolean;
  cssExtras?: string;
  isWhiteButton?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button = ({
  name,
  type,
  onClick,
  useHalfWith,
  isOutlined,
  isCancelButton,
  isDeclinedButton,
  isRemoveButton,
  isBusy,
  isDisabled,
  cssExtras,
  children,
  isWhiteButton,
  className,
  style,
  ...rest
}: Props) => {
  return (
    <div className={`w-full ${cssExtras ? cssExtras : "mt-10 mb-6"}`}>
      <button
        type={type}
        onClick={onClick}
        disabled={isBusy || isDisabled}
        {...rest}
        className={`${
          isDisabled || isBusy
            ? "containedDisabledButton"
            : isOutlined
            ? "outlinedButton"
            : isCancelButton
            ? "cancelButton"
            : isRemoveButton
            ? "isRemoveButton"
            : isDeclinedButton
            ? "declinedButton"
            : isWhiteButton
            ? "whiteButton"
            : "containedButton"
        } font-normal  text-center items-center py-[.8rem] px-6 transition-all text-xs lg:text-md ${
          useHalfWith ? "lg:w-1/2" : "w-full"
        } ${className ?? ""}`}
        style={style ? style : {}}
      >
        <>
          {children ? (
            <>{children}</>
          ) : (
            <>
              {isBusy ? (
                <span
                  className={`${
                    isOutlined ? "text-[#0275D8]" : "text-[#FEFFFE]"
                  } inline-flex items-center font-bold`}
                >
                  <Spin width="w-5" height="h-5" /> Processing...
                </span>
              ) : (
                name
              )}
            </>
          )}
        </>
      </button>
    </div>
  );
};
