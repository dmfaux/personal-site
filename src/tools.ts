export const classes = (...args: (string | undefined)[]): string => {
  return args.filter(Boolean).join(" ");
};
