import {
  FieldValues,
  Path, UseFormRegister,
} from 'react-hook-form';
import { HTMLAttributes } from 'react';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

interface InputProps<T extends FieldValues> extends HTMLAttributes<HTMLInputElement> {
  label: Path<T>;
  register: UseFormRegister<T>;
  rules ?: RegisterOptions<T>
  errorMsg ?: string
  type : string
  disabled ?: boolean
}

function Input<T extends FieldValues>({
  label, register, rules, errorMsg, ...props
}: InputProps<T>) {
  return (
    <input
      className="shadow-md rounded-md border border-gray-300 p-2.5 w-full"
      {...register(label, rules)}
      {...props}
    />
  );
}

Input.displayName = 'Input';
export default Input;
