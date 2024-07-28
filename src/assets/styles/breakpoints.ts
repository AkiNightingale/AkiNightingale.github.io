import React from 'react';

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(() => window.matchMedia(query).matches);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', documentChangeHandler);

    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [query]);

  return matches;
};

export const useUp = (breakpoint: keyof typeof breakpoints) => {
  const query = `(min-width: ${breakpoints[breakpoint]}px)`;
  return useMediaQuery(query);
};

export const useDown = (breakpoint: keyof typeof breakpoints) => {
  const query = `(max-width: ${breakpoints[breakpoint]}px)`;
  return useMediaQuery(query);
};

export const useBetween = (start: keyof typeof breakpoints, end: keyof typeof breakpoints) => {
  const query = `(min-width: ${breakpoints[start]}px) and (max-width: ${breakpoints[end]}px)`;
  return useMediaQuery(query);
};