import React from 'react';

import './stack.scss';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  gap?: number;
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
}

const Stack: React.FC<StackProps> = ({
  direction = 'column',
  gap = 0.5,
  alignItems = 'center',
  justifyContent = 'flex-start',
  className = '', // Note: requires important
  style,
  children,
}) => {
  return (
    <div
      className={`stack stack_${direction} ${className}`}
      style={{
        gap: `${gap}rem`,
        alignItems,
        justifyContent,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Stack;