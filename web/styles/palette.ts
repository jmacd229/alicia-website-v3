const themePalette: Record<ThemePalette, Record<Shade, string>> = {
  grey: {
    a: "#F1F1F1",
    b: "#B9B9B9",
    c: "#818181",
  },
  blue: {
    a: "#96e5e8",
    b: "#00C2CB",
    c: "#00A5AC",
  },
  jade: {
    a: "#4B8C91",
    b: "#3D7276",
    c: "#2A4E51",
  },
};

export const rgbColors: Partial<
  Record<ThemePalette, Partial<Record<Shade, string>>>
> = {
  blue: {
    b: "0, 194, 203",
    c: "0, 135, 142",
  },
};

const commonPalette = {
  white: "#FFFFFF",
  black: "#000000",
  highlight: "#E3B562",
};

export const colors = { ...themePalette, ...commonPalette };

type ThemePalette = "grey" | "blue" | "jade";
type CommonPalette = "black" | "white" | "highlight";

// Limiting shades for styling consistency. Using alphabet for easy reference
type Shade = "a" | "b" | "c";

export type Color = ThemePalette | `${ThemePalette}-${Shade}` | CommonPalette;

export const getColor = (color: Color): string => {
  const [palette, shade] = color.split("-");
  if (typeof colors[palette] === "string") {
    return colors[palette];
  }
  return colors[palette][shade ?? "b"];
};

export default colors;
