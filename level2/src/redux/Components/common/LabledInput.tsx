import React from "react";
import styled from "styled-components";

type inputoption = {
  id: any;
  label: any;
  placeholder: any;
  value: any;
  onChange: any;
};
function LabledInput({ id, label, placeholder, value, onChange }: inputoption) {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default LabledInput;

const StyledInput = styled.input`
  height: 30px;
  width: 230px;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;
`;

const StyledLabel = styled.label`
  margin-right: 10px;
  font-weight: 700;
`;
