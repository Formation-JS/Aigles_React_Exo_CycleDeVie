import { useState } from 'react';

type ToggleReturnType = [
  value: boolean,
  toggle: () => void
];

export const useToggler = (initialValue : boolean) : ToggleReturnType  => {

  const [value, setValue] =  useState(initialValue);

  const toggle = () => {
    setValue(old => !old);
  }

  return [value, toggle];
};