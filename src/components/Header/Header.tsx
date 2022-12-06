import { HTMLAttributes } from 'react';
import classes from './Header.module.css';

type Props = {
  size: 1 | 2 | 3 | 4 | 5 | 6;
} & HTMLAttributes<HTMLHeadingElement>;

export function Header({ size, className, ...headingAttributes }: Props) {
  const CustomTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = `h${size}`;

  return (
    <CustomTag
      {...headingAttributes}
      className={`${classes.root} ${className}`}
    />
  );
}
