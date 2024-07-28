import clsx from 'clsx';
import React from 'react';
import './grid.scss';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: boolean;
  item?: boolean;
  sm?: number;
  md?: number;
  lg?: number;
  spacing?: number;
}

const Grid: React.FC<GridProps> = ({
  container = false,
  item = false,
  sm = 1,
  md ,
  lg,
  spacing = 0,
  className,
  children,
  ...other
}) => {
  const isGeneralSize = sm && !md && !lg;

  const gridClassName = clsx(className, {
    ['grid__container']: container,
    ['grid__item']: item,
    [`spacing-${spacing}`]: container && spacing > 0,
    [`gap-${spacing}`]: container && spacing > 0,
    [`size-${sm}`]: item && isGeneralSize,
    [`sm-${sm}`]: item && sm && !isGeneralSize,
    [`md-${md}`]: item && md && !isGeneralSize,
    [`lg-${lg}`]: item && lg && !isGeneralSize,
  });

  return (
    <div className={gridClassName} {...other}>
      {children}
    </div>
  );
};

export default Grid;