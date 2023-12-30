export type ButtonVariant = "primary" | "secondary" | "tertiary";

export type ButtonSize = "regular" | "large";

export type ButtonState = "regular" | "hover";

export type ButtonStyleProperties<isTransient = true> = {
  size: ButtonSize;
} & (isTransient extends true
  ? { $variant: ButtonVariant }
  : { variant: ButtonVariant });
