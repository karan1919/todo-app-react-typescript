import React from "react";
import { Form } from "react-bootstrap";

type Props = {
  type: string,
  placeholder: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  errors: string | undefined,
}

const Input: React.FC<Props> = ({ type, placeholder, value, onChange, errors }) => {
  return (
    <>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errors && <span style={{ color: "red" }}>{errors}</span>}
    </>
  );
};

export default Input;
