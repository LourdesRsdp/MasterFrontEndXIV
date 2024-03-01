import React from "react";
import { useField } from "formik";


export const InputFormik: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => {
 
  const [field, meta] = useField(props.name);
  const inputFieldProps = Boolean(field) ? field : props;

  const hasError = Boolean(meta && meta.touched && meta.error);

 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <input
        {...props}
        name={inputFieldProps.name}
        onChange={inputFieldProps.onChange}
        onBlur={inputFieldProps.onBlur}
        value={inputFieldProps.value}
        style={{ width: "100%" }}
      />
      <span style={{ fontSize: "60%", color: "red" }}>
        {hasError ? meta.error : ""}
      </span>
    </div>
  );
};