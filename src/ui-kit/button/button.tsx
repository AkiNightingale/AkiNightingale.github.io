import './button.scss';
import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'primary' | 'secondary',
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  const btnClassName = clsx(
    'button',
    `button_${variant}`,
    className,
  );

  return (
    <button className={btnClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;