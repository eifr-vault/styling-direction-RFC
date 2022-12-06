import { HTMLAttributes } from 'react';
import classes from './Button.module.css';

type Props = HTMLAttributes<HTMLButtonElement>;

export function Button({ title, className, ...buttonAttributes }: Props) {
  return (
    <button {...buttonAttributes} className={`${classes.root} ${className}`} />
  );
}
