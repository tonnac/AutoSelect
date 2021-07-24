import React, { useState } from "react";

export interface UseInputInterface {
  value: string | number;
  onChange: any;
  setValue: React.Dispatch<React.SetStateAction<string | number>>;
}

export default function useInput(
  defaultValue: string | number
): UseInputInterface {
  const [value, setValue] = useState(defaultValue);

  function onChange(e: any) {
    const {
      target: { value },
    } = e;
    setValue(value);
  }

  return { value, onChange, setValue };
}
