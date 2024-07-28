export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const up = (breakpoint: keyof typeof breakpoints) => {
  return window.innerWidth >= breakpoints[breakpoint];
};

export const down = (breakpoint: keyof typeof breakpoints) => {
  return window.innerWidth < breakpoints[breakpoint];
};

export const between = (start: keyof typeof breakpoints, end: keyof typeof breakpoints) => {
  return window.innerWidth >= breakpoints[start] && window.innerWidth < breakpoints[end];
};