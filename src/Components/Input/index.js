import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { InputCustom, Container } from "./styles";

export default function InputComponent({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <InputCustom ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}
