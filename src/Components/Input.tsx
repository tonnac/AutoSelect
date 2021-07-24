import React from "react";
import { UseInputInterface } from "../Hooks/useInput";

interface InputProps {
  inputName: string;
  useInput: UseInputInterface;
}

export default function Input(Props: InputProps) {
  return (
    <>
      {Props.inputName}
      <br></br>
      <input
        placeholder="값 입력"
        value={Props.useInput.value}
        onChange={Props.useInput.onChange}
      ></input>
      <br></br>
    </>
  );
}
